import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BusinessWithUs from "./components/BusinessWithUs";
import Statistics from "./components/Statistics";
import JoinOurTeam from "./components/JoinOurTeam";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Visitors from "./components/Visitors";
import Licenses from "./components/Licenses";
import AffiliationRibbon from "./components/AffiliationRibbon";
import Quote from "./components/Quote";
import NotAvailable from "./components/NotAvailable";
import QTakeoffAI from "./Pages/QTakeoffAI";
import RealEstateAnalysis from "./Pages/RealEstateAnalysis";

// ⭐ Lazy-loaded pages — these will split into separate JS files
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const Contact = lazy(() => import("./Pages/Contact"));
const Career = lazy(() => import("./Pages/Career"));
const PortfolioPages = lazy(() => import("./Pages/PortfolioPages"));
const PortfolioDescription = lazy(() => import("./Pages/ProjectDescription"));
const Engineers = lazy(() => import("./Pages/Engineers"));
const Contractors = lazy(() => import("./Pages/Contractors"));
const JobDetail = lazy(() => import("./Pages/JobDetail"));

const OpenResources = lazy(() => import("./FooterPages/OpenResources"));
const News = lazy(() => import("./FooterPages/News"));
const Gallery = lazy(() => import("./FooterPages/Gallery"));
const Business = lazy(() => import("./FooterPages/Business"));
const ProposalPage = lazy(() => import("./FooterPages/ProposalPage"));
const NewsDetail = lazy(() => import("./FooterPages/NewsDetail"));

const ResearchAndDevelopment = lazy(
  () => import("./Pages/ResearchAndDevelopment"),
);
const ConstructionMaterialTesting = lazy(
  () => import("./Pages/ConstructionMaterialTesting"),
);

// Services Dropdown Pages
const BuildingServiceDesign = lazy(
  () =>
    import("./Pages/ServicesDropdown/BuildingServiceDesign/BuildingServiceDesign"),
);
const LandPlanningAndPermitting = lazy(
  () =>
    import("./Pages/ServicesDropdown/LandPlanningAndPermitting/LandPlanningAndPermitting"),
);
const TenantFitOuts = lazy(
  () => import("./Pages/ServicesDropdown/TenantFitOuts/TenantFitOuts"),
);
const ConstructionAdministration = lazy(
  () =>
    import("./Pages/ServicesDropdown/ConstructionAdministration/ConstructionAdministration"),
);
const StructuralEngineering = lazy(
  () =>
    import("./Pages/ServicesDropdown/StructuralEngineering/StructuralEngineering"),
);
const ConstructionMaterialSurveyAndTesting = lazy(
  () =>
    import("./Pages/ServicesDropdown/ConstructionMaterialSurveyAndTesting/ConstructionMaterialSurveyAndTesting"),
);
const GeoTechnicalEngineering = lazy(
  () =>
    import("./Pages/ServicesDropdown/GeotechnicalEngineering/GeoTechnicalEngineering"),
);
const ConstructionEngineeringAndManagement = lazy(
  () => import("./Pages/ServicesDropdown/ConstructionEngineering"),
);
const GeneralConstruction = lazy(
  () => import("./Pages/ServicesDropdown/GeneralConstruction"),
);
const DesignPlusBuild = lazy(
  () => import("./Pages/ServicesDropdown/DesignPlusBuild"),
);
const PreConstruction = lazy(
  () => import("./Pages/ServicesDropdown/PreConstruction"),
);
const ConstructionManagement = lazy(
  () => import("./Pages/ServicesDropdown/ConstructionManagement"),
);
const SpecialtyEngineeringServices = lazy(
  () =>
    import("./Pages/ServicesDropdown/SpecialtyEngineeringServices/SpecialtyEngineeringServices"),
);
const WaterResourcesEngineering = lazy(
  () => import("./Pages/ServicesDropdown/WaterResources"),
);

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      {/* 🚀 Suspense enables code splitting */}
      <Suspense fallback={<div className="min-h-screen">Loading...</div>}>
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Visitors />
                <Services />
                <Licenses />
                <BusinessWithUs />
                <Statistics />
                <JoinOurTeam />
                <Testimonials />
                <AffiliationRibbon />
              </>
            }
          />
          {/* Pages */}
          <Route path="/portfolio" element={<PortfolioPages />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/open-resources" element={<OpenResources />} />
          <Route path="/news" element={<News />} />
          <Route path="/business" element={<Business />} />
          <Route path="/request-proposal" element={<ProposalPage />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/engineers" element={<Engineers />} />
          <Route path="/contractors" element={<Contractors />} />
          <Route
            path="/project-description/:id"
            element={<PortfolioDescription />}
          />
          {/* Services */}

          <Route path="/tenant-fit-outs" element={<TenantFitOuts />} />
          <Route
            path="/research-and-development"
            element={<ResearchAndDevelopment />}
          />
          {/* <Route
            path="/material-testing"
            element={<ConstructionMaterialTesting />}
          /> */}
          {/* Dropdown Services */}
          <Route
            path="/building-service-design"
            element={<BuildingServiceDesign />}
          />
          <Route
            path="/land-planning"
            element={<LandPlanningAndPermitting />}
          />
          <Route
            path="/structural-engineering"
            element={<StructuralEngineering />}
          />
          <Route
            path="/construction-administration"
            element={<ConstructionAdministration />}
          />
          <Route
            path="/material-testing"
            element={<ConstructionMaterialSurveyAndTesting />}
          />
          <Route
            path="/geotechnical-engineering"
            element={<GeoTechnicalEngineering />}
          />
          <Route
            path="/construction-engineering"
            element={<ConstructionEngineeringAndManagement />}
          />
          <Route
            path="/water-resources-engineering"
            element={<WaterResourcesEngineering />}
          />
          <Route
            path="/general-construction"
            element={<GeneralConstruction />}
          />
          <Route path="/pre-construction" element={<PreConstruction />} />
          <Route
            path="/construction-management"
            element={<ConstructionManagement />}
          />
          <Route path="/design-plus-build" element={<DesignPlusBuild />} />
          <Route
            path="/specialty-services"
            element={<SpecialtyEngineeringServices />}
          />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/qtakeoff-ai" element={<QTakeoffAI />} />
          <Route
            path="/real-estate-site-analysis"
            element={<RealEstateAnalysis />}
          />
          {/* 404 */}
          <Route path="*" element={<NotAvailable />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
