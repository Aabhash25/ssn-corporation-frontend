const SITE = "SSN Corporation";
const BASE_URL = "https://ssncorporation.com";
const SUFFIX = ` | ${SITE}`;

const DEFAULT_LOCATION = "Raleigh, NC"; // used when a job has no location

// Django job_type value -> Google's allowed employmentType values
const EMPLOYMENT_TYPES = {
  full_time: "FULL_TIME",
  part_time: "PART_TIME",
  contract: "CONTRACTOR",
  consultant: "CONTRACTOR",
  on_call: "OTHER",
  project_based: "OTHER",
};

const decode = (s = "") => {
  const once = (t) =>
    t.replace(/&nbsp;/g, " ").replace(/&rsquo;|&#39;/g, "’")
      .replace(/&quot;/g, '"').replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">").replace(/&amp;/g, "&");
  return once(once(s));
};

// Strips the "## " and "- " markers your CMS text uses
const plain = (s = "") =>
  decode(s).replace(/^##\s*/gm, "").replace(/^[-•]\s*/gm, "")
    .replace(/\s+/g, " ").trim();

const truncate = (str, max) => {
  if (str.length <= max) return str;
  const cut = str.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\-–]+$/, "") + "…";
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Converts one text field into simple HTML (headings, bullets, paragraphs)
function fieldToHtml(text = "") {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  let html = "", list = [];
  const flush = () => {
    if (list.length) html += `<ul>${list.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
    list = [];
  };
  for (const line of lines) {
    if (/^[-•]/.test(line)) list.push(line.replace(/^[-•]\s*/, ""));
    else if (/^##\s+/.test(line)) { flush(); html += `<h4>${esc(line.replace(/^##\s*/, ""))}</h4>`; }
    else { flush(); html += `<p>${esc(line)}</p>`; }
  }
  flush();
  return html;
}

function buildDescriptionHtml(job) {
  const blocks = [
    ["About the Company", job.company_description],
    ["Role Overview", job.role_description],
    ["Key Responsibilities", job.key_responsibilities],
    ["Physical Requirements", job.physical_requirements],
    ["Requirements", job.requirements],
    ["Qualifications & Experience", job.qualification_experience],
    ["Perks & Benefits", job.perks_benefits],
    ["Additional Info", job.others],
    ...(job.sections || []).map((s) => [s.title, s.content]),
  ];
  return blocks
    .filter(([, t]) => t?.trim())
    .map(([h, t]) => `<h3>${esc(h)}</h3>${fieldToHtml(t)}`)
    .join("");
}

export function buildJobSeo(job) {
  const title = decode(job.title || "Job Opening").trim();
  const isClosed = job.role_filled === true;
  const url = `${BASE_URL}/jobs/${job.id}`;

  let pageTitle;
  if (isClosed) {
    pageTitle = `${title} (Position Filled)${SUFFIX}`;
  } else {
    pageTitle = `${title} – Job Opening${SUFFIX}`;
    if (pageTitle.length > 60) pageTitle = `${title}${SUFFIX}`;
  }
  // Long titles: keep the full title, drop the brand and "Job Opening" extras
  if (pageTitle.length > 60) pageTitle = isClosed ? `${title} (Filled)` : title;
  const summary = plain(job.role_description) || plain(job.company_description);

  // Only fully remote jobs count as remote (not hybrid or flexible)
  const isRemote = job.work_mode === "remote";
  const typedLocation = decode(job.location || "").trim();
  // Old jobs (blank) and a typed "Remote" are not a city, so use the default
  const location =
    typedLocation && typedLocation.toLowerCase() !== "remote"
      ? typedLocation
      : DEFAULT_LOCATION;
  const employmentType = EMPLOYMENT_TYPES[job.job_type];
  const description = truncate(
    isClosed
      ? `${title} at ${SITE}. This position has been filled. View current openings.`
      : `${title} at ${SITE}, ${isRemote ? "Remote" : location}. ${summary}`,
    155,
  );

  // Expects "City, ST"; a ZIP code after the state is dropped
  const [city, region] = location.split(",").map((s) => s.trim());
  const state = region?.replace(/\s*\d{5}(-\d{4})?$/, "");

  const placement = isRemote
    ? {
        jobLocationType: "TELECOMMUTE",
        // Change this if remote applicants can be outside the US
        applicantLocationRequirements: { "@type": "Country", name: "USA" },
      }
    : {
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: city,
            ...(state && { addressRegion: state }),
            addressCountry: "US",
          },
        },
      };

  const graph = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Careers", item: `${BASE_URL}/career` },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ],
    },
  ];

  // Only open jobs get JobPosting markup
  if (!isClosed) {
    graph.unshift({
      "@type": "JobPosting",
      title,
      description: buildDescriptionHtml(job) || summary,
      ...(job.posted_date && { datePosted: job.posted_date.slice(0, 10) }),
      hiringOrganization: {
        "@type": "Organization",
        name: SITE,
        sameAs: BASE_URL,
        logo: `${BASE_URL}/logo.webp`,
      },
      ...(employmentType && { employmentType }),
      // Applications are accepted through the end of the deadline date
      ...(job.deadline && { validThrough: `${job.deadline}T23:59:59` }),
      ...placement,
      directApply: true,
      url,
    });
  }

  return {
    title: pageTitle,
    description,
    url,
    noindex: isClosed,
    jsonLd: { "@context": "https://schema.org", "@graph": graph },
  };
}