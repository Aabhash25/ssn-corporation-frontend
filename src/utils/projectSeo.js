const SITE = "SSN Corporation";
const BASE_URL = "https://ssncorporation.com";
const SUFFIX = ` | ${SITE}`;

// Decode entities the CMS stored (runs twice for double-encoded "&amp;amp;")
const decode = (s = "") => {
  const once = (t) =>
    t
      .replace(/&nbsp;/g, " ")
      .replace(/&rsquo;|&#39;|&#x27;/g, "’")
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&");
  return once(once(s));
};

const stripHtml = (html = "") =>
  decode(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();

const clean = (s = "") => decode(s).replace(/\s+/g, " ").trim();

const truncate = (str, max) => {
  if (str.length <= max) return str;
  const cut = str.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\-–]+$/, "") + "…";
};

function buildTitle(name, desc) {
  const n = name.toLowerCase();
  const d = desc.toLowerCase();

  let base;
  if (!desc || d === n) base = name;
  else if (d.includes(n)) base = desc;          // description already contains the name
  else base = `${name} – ${desc}`;

  if ((base + SUFFIX).length <= 60) return base + SUFFIX;
  if (base.length <= 60) return base;
  if ((name + SUFFIX).length <= 60) return name + SUFFIX;
  return truncate(name, 60);
}

export function buildProjectSeo(p, slugParam) {
  const name = clean(p.name || p.description || "Project");
  const desc = clean(p.description);
  const location = clean(p.location);

  const title = p.meta_title?.trim() || buildTitle(name, desc);

  // Description: lead with the project, add location only if not already mentioned
  const lead = desc || name;
  const locationInLead =
    !location || lead.toLowerCase().includes(location.split(",")[0].trim().toLowerCase());
  const body = stripHtml(p.long_description);
  const auto = `${lead}${locationInLead ? "" : ` at ${location}`}. ${body}`;
  const description = truncate(p.meta_description?.trim() || auto, 155);

  const url = `${BASE_URL}/project-description/${slugParam}`;
  const image = p.images?.[0];

  return {
    title,
    description,
    url,
    image,
    keywords: p.keywords,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          name: title,
          description,
          url,
          ...(image && { primaryImageOfPage: image }),
          isPartOf: { "@type": "WebSite", name: SITE, url: BASE_URL },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "Portfolio", item: `${BASE_URL}/portfolio` },
            { "@type": "ListItem", position: 3, name, item: url },
          ],
        },
      ],
    },
  };
}