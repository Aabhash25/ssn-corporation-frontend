import Layout from "./Layout";
import HomePage from "./Pages/HomePage";
import Quote from "./components/Quote";
import NotAvailable from "./components/NotAvailable";
import QTakeoffAI from "./Pages/QTakeoffAI";
import RealEstateAnalysis from "./Pages/RealEstateAnalysis";
import AboutUs from "./Pages/AboutUs"; // add
import Contact from "./Pages/Contact"; // add

// Code-split a page: loads its default export when the route is visited.
// (Replaces React.lazy + <Suspense>; works with pre-rendering.)
const page = (load) => ({
  lazy: async () => ({ Component: (await load()).default }),
});

// Title + description for each route (rendered into <head> by Layout.jsx).
// Review the wording, these are starting points.
const seo = (title, description, extra = {}) => ({
  handle: { seo: { title, description, ...extra } },
});

const API_URL = import.meta.env.VITE_API_URL || "";

// Runs at build time: fetches page 1 of projects and the filter options.
// Throws on failure so a bad build never goes live.
const portfolioLoader = async () => {
  const [projectsRes, filtersRes] = await Promise.all([
    fetch(`${API_URL}projects/?page=1`),
    fetch(`${API_URL}projects/filter_options/`),
  ]);
  if (!projectsRes.ok || !filtersRes.ok) {
    throw new Error("Portfolio API request failed");
  }
  return {
    projects: await projectsRes.json(),
    filterOptions: await filtersRes.json(),
  };
};
// Fetch every project (all pages) so each gets its own pre-rendered page.
const fetchAllProjects = async () => {
  const first = await fetch(`${API_URL}projects/?page=1`);
  if (!first.ok) throw new Error("Projects API request failed");
  const firstData = await first.json();
  const all = [...(firstData.results || [])];

  const pageSize = all.length || 12;
  const totalPages = Math.ceil((firstData.count || 0) / pageSize);

  for (let page = 2; page <= totalPages; page++) {
    const res = await fetch(`${API_URL}projects/?page=${page}`);
    if (!res.ok) throw new Error(`Projects API request failed (page ${page})`);
    const data = await res.json();
    all.push(...(data.results || []));
  }
  return all;
};
// Fetch every job so each job gets its own pre-rendered HTML page.
const fetchAllJobs = async () => {
  let allJobs = [];
  let url = `${API_URL}jobs/`;

  while (url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Jobs API request failed: ${response.status}`);
    }

    const data = await response.json();

    allJobs.push(...(data.results || []));
    url = data.next;
  }

  return allJobs;
};

const projectLoader = async ({ params }) => {
  const projectId = params.id.split("-")[0];

  const res = await fetch(`${API_URL}projects/${projectId}/`);

  if (!res.ok) {
    throw new Error(`Project ${projectId} request failed`);
  }

  return res.json();
};
const careerLoader = async () => {
  let allJobs = [];
  let url = `${API_URL}jobs/`;

  while (url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Jobs API request failed: ${response.status}`);
    }

    const data = await response.json();

    allJobs = [...allJobs, ...(data.results || [])];

    url = data.next;
  }

  allJobs.sort((a, b) => new Date(b.posted_date) - new Date(a.posted_date));

  return {
    jobs: allJobs,
  };
};
const jobDetailLoader = async ({ params }) => {
  const response = await fetch(`${API_URL}jobs/${params.id}/`);

  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }

    throw new Error(`Failed to fetch job: ${response.status}`);
  }

  return await response.json();
};
const newsLoader = async () => {
  const response = await fetch(`${API_URL}news/?page=1&page_size=12`);

  if (!response.ok) {
    throw new Error(`News API request failed: ${response.status}`);
  }

  const json = await response.json();
  const newsData = json.results || (Array.isArray(json) ? json : []);
  const totalCount = json.count ?? newsData.length;

  return {
    newsData,
    totalCount,
    totalPages: Math.max(1, Math.ceil(totalCount / 12)),
  };
};

const newsDetailLoader = async ({ params }) => {
  const newsId = params.id;

  const [newsRes, moreRes] = await Promise.all([
    fetch(`${API_URL}news/${newsId}/`),
    fetch(`${API_URL}news/?page=1&page_size=12`),
  ]);

  if (newsRes.status === 404) {
    return { news: null, moreNews: [] };
  }

  if (!newsRes.ok) {
    throw new Error(`News request failed: ${newsRes.status}`);
  }

  if (!moreRes.ok) {
    throw new Error(`More news request failed: ${moreRes.status}`);
  }

  const news = await newsRes.json();
  const moreData = await moreRes.json();

  const newsArray =
    moreData.results || (Array.isArray(moreData) ? moreData : []);

  const moreNews = newsArray
    .filter((item) => String(item.id) !== String(newsId))
    .slice(0, 3);

  return {
    news,
    moreNews,
  };
};

const fetchAllNews = async () => {
  let allNews = [];
  let url = `${API_URL}news/?page=1&page_size=100`;

  while (url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`News API request failed: ${response.status}`);
    }

    const data = await response.json();

    allNews.push(...(data.results || []));

    url = data.next;
  }

  return allNews;
};

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      // Home
      {
        index: true,
        element: <HomePage />,
        ...seo(
          "SSN Corporation — Engineering, Construction, Infrastructure & R&D",
          "SSN Corporation is a multidisciplinary engineering and construction firm headquartered in Raleigh, North Carolina. We provide engineering and general construction services throughout Georgia, North Carolina, and Virginia.",
        ),
      },

      // Pages
      {
        path: "portfolio",
        loader: portfolioLoader,
        ...page(() => import("./Pages/PortfolioPages")),
        ...seo(
          "Portfolio | SSN Corporation",
          "Explore projects completed by SSN Corporation.",
        ),
      },
      {
        path: "about",
        Component: AboutUs,
        ...seo(
          "About Us | SSN Corporation",
          "Learn about SSN Corporation, our team and our work.",
        ),
      },
      {
        path: "contact",
        Component: Contact,
        ...seo(
          "Contact Us | SSN Corporation",
          "Get in touch with SSN Corporation.",
        ),
      },
      {
        path: "career",
        loader: careerLoader,
        ...page(() => import("./Pages/Career")),
        ...seo(
          "Careers & Job Openings | SSN Corporation",
          "Explore current job openings at SSN Corporation, a Raleigh, NC engineering and construction firm. View open positions and apply online.",
        ),
      },
      {
        path: "open-resources",
        ...page(() => import("./FooterPages/OpenResources")),
        ...seo(
          "Open Resources | SSN Corporation",
          "Open resources from SSN Corporation.",
        ),
      },
      {
        path: "news",
        loader: newsLoader,
        ...page(() => import("./FooterPages/News")),
        ...seo(
          "News & Updates | SSN Corporation",
          "Latest news, project milestones and corporate updates from SSN Corporation, a Raleigh, NC engineering and construction firm.",
        ),
      },
      {
        path: "business",
        ...page(() => import("./FooterPages/Business")),
        ...seo(
          "Business With Us | SSN Corporation",
          "Work with SSN Corporation.",
        ),
      },
      {
        path: "request-proposal",
        ...page(() => import("./FooterPages/ProposalPage")),
        ...seo(
          "Request a Proposal | SSN Corporation",
          "Request a proposal from SSN Corporation.",
        ),
      },
      {
        path: "quote",
        element: <Quote />,
        ...seo(
          "Request a Quote | SSN Corporation",
          "Request a quote from SSN Corporation.",
        ),
      },
      {
        path: "engineers",
        ...page(() => import("./Pages/Engineers")),
        ...seo(
          "Engineers | SSN Corporation",
          "Engineering services and opportunities with SSN Corporation.",
        ),
      },
      {
        path: "contractors",
        ...page(() => import("./Pages/Contractors")),
        ...seo(
          "Contractors | SSN Corporation",
          "Services for contractors from SSN Corporation.",
        ),
      },
      {
        path: "gallery",
        ...page(() => import("./FooterPages/Gallery")),
        ...seo(
          "Gallery | SSN Corporation",
          "Photos from SSN Corporation projects and work.",
        ),
      },
      {
        path: "qtakeoff-ai",
        element: <QTakeoffAI />,
        ...seo(
          "QTakeoff AI | SSN Corporation",
          "QTakeoff AI, an AI-powered construction estimation platform from SSN Corporation.",
        ),
      },
      {
        path: "real-estate-site-analysis",
        element: <RealEstateAnalysis />,
        ...seo(
          "Real Estate Site Analysis | SSN Corporation",
          "Real estate site analysis from SSN Corporation.",
        ),
      },

      // Services
      {
        path: "tenant-fit-outs",
        ...page(
          () => import("./Pages/ServicesDropdown/TenantFitOuts/TenantFitOuts"),
        ),
        ...seo(
          "Tenant Fit-Outs | SSN Corporation",
          "Tenant fit-out services from SSN Corporation.",
        ),
      },
      {
        path: "research-and-development",
        ...page(() => import("./Pages/ResearchAndDevelopment")),
        ...seo(
          "Research & Development | SSN Corporation",
          "Research and development at SSN Corporation.",
        ),
      },

      // Dropdown services
      {
        path: "building-service-design",
        ...page(
          () =>
            import("./Pages/ServicesDropdown/BuildingServiceDesign/BuildingServiceDesign"),
        ),
        ...seo(
          "Building Service Design | SSN Corporation",
          "Building service design from SSN Corporation.",
        ),
      },
      {
        path: "land-planning",
        ...page(
          () =>
            import("./Pages/ServicesDropdown/LandPlanningAndPermitting/LandPlanningAndPermitting"),
        ),
        ...seo(
          "Land Planning & Permitting | SSN Corporation",
          "Land planning and permitting services from SSN Corporation.",
        ),
      },
      {
        path: "structural-engineering",
        ...page(
          () =>
            import("./Pages/ServicesDropdown/StructuralEngineering/StructuralEngineering"),
        ),
        ...seo(
          "Structural Engineering | SSN Corporation",
          "Structural engineering services from SSN Corporation.",
        ),
      },
      {
        path: "construction-administration",
        ...page(
          () =>
            import("./Pages/ServicesDropdown/ConstructionAdministration/ConstructionAdministration"),
        ),
        ...seo(
          "Construction Administration | SSN Corporation",
          "Construction administration services from SSN Corporation.",
        ),
      },
      {
        path: "material-testing",
        ...page(
          () =>
            import("./Pages/ServicesDropdown/ConstructionMaterialSurveyAndTesting/ConstructionMaterialSurveyAndTesting"),
        ),
        ...seo(
          "Construction Material Survey & Testing | SSN Corporation",
          "Construction material survey and testing services from SSN Corporation.",
        ),
      },
      {
        path: "geotechnical-engineering",
        ...page(
          () =>
            import("./Pages/ServicesDropdown/GeotechnicalEngineering/GeoTechnicalEngineering"),
        ),
        ...seo(
          "Geotechnical Engineering | SSN Corporation",
          "Geotechnical engineering services from SSN Corporation.",
        ),
      },
      {
        path: "construction-engineering",
        ...page(
          () => import("./Pages/ServicesDropdown/ConstructionEngineering"),
        ),
        ...seo(
          "Construction Engineering & Management | SSN Corporation",
          "Construction engineering and management services from SSN Corporation.",
        ),
      },
      {
        path: "stormwater-management-drainage-engineering",
        ...page(() => import("./Pages/ServicesDropdown/WaterResources")),
        ...seo(
          "Water Resources Engineering | SSN Corporation",
          "Water resources engineering services from SSN Corporation.",
        ),
      },
      {
        path: "general-construction",
        ...page(() => import("./Pages/ServicesDropdown/GeneralConstruction")),
        ...seo(
          "General Construction | SSN Corporation",
          "General construction services from SSN Corporation.",
        ),
      },
      {
        path: "pre-construction",
        ...page(() => import("./Pages/ServicesDropdown/PreConstruction")),
        ...seo(
          "Pre-Construction | SSN Corporation",
          "Pre-construction services from SSN Corporation.",
        ),
      },
      {
        path: "construction-management",
        ...page(
          () => import("./Pages/ServicesDropdown/ConstructionManagement"),
        ),
        ...seo(
          "Construction Management | SSN Corporation",
          "Construction management services from SSN Corporation.",
        ),
      },
      {
        path: "design-plus-build",
        ...page(() => import("./Pages/ServicesDropdown/DesignPlusBuild")),
        ...seo(
          "Design + Build | SSN Corporation",
          "Design-build services from SSN Corporation.",
        ),
      },
      {
        path: "specialty-services",
        ...page(
          () =>
            import("./Pages/ServicesDropdown/SpecialtyEngineeringServices/SpecialtyEngineeringServices"),
        ),
        ...seo(
          "Specialty Engineering Services | SSN Corporation",
          "Specialty engineering services from SSN Corporation.",
        ),
      },

      // Dynamic detail pages.
      // TODO: add getStaticPaths so each one is pre-rendered (see notes).
      // Example:
      //   getStaticPaths: () => newsItems.map((n) => `news/${n.id}`),
      {
        path: "news/:id",
        loader: newsDetailLoader,

        // Generate a static HTML page for every news article.
        getStaticPaths: async () => {
          const news = await fetchAllNews();

          return news.map((item) => `news/${item.id}`);
        },

        ...page(() => import("./FooterPages/NewsDetail")),
        ...seo(
          "News | SSN Corporation",
          "Read the latest news, projects, milestones, and corporate updates from SSN Corporation.",
        ),
      },
      {
        path: "jobs/:id",
        loader: jobDetailLoader,

        // Generate a static HTML page for every job.
        getStaticPaths: async () => {
          const jobs = await fetchAllJobs();

          return jobs.map((job) => `jobs/${job.id}`);
        },

        ...page(() => import("./Pages/JobDetail")),
        ...seo(
          "Job Opening | SSN Corporation",
          "Explore job opportunities and career openings at SSN Corporation.",
        ),
      },
      {
        path: "project-description/:id",
        loader: projectLoader,
        getStaticPaths: async () => {
          const projects = await fetchAllProjects();
          return projects.map((p) => `project-description/${p.id}-${p.slug}`);
        },
        ...page(() => import("./Pages/ProjectDescription")),
        ...seo(
          "Project | SSN Corporation",
          "A project completed by SSN Corporation.",
        ),
      },

      // 404
      {
        path: "*",
        element: <NotAvailable />,
        ...seo(
          "Page Not Found | SSN Corporation",
          "This page could not be found.",
          { noindex: true },
        ),
      },
    ],
  },
];
