const SITE = "SSN Corporation";
const BASE_URL = "https://ssncorporation.com";
const SUFFIX = ` | ${SITE}`;

const decode = (s = "") => {
  const once = (t) =>
    t.replace(/&nbsp;/g, " ").replace(/&rsquo;|&#39;/g, "’")
      .replace(/&quot;/g, '"').replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">").replace(/&amp;/g, "&");
  return once(once(s));
};

const stripHtml = (h = "") =>
  decode(String(h).replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();

const truncate = (str, max) => {
  if (str.length <= max) return str;
  const cut = str.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\-–]+$/, "") + "…";
};

const absolute = (u) => (u && /^https?:\/\//.test(u) ? u : undefined);

export function buildNewsSeo(news) {
  const title = decode(news.title || "News").trim();
  const url = `${BASE_URL}/news/${news.id}`;

  // Keep the full title; add the brand only if it fits
  const pageTitle = `${title}${SUFFIX}`.length <= 60 ? `${title}${SUFFIX}` : title;

  const body = stripHtml(news.content);
  const description = truncate(body || `${title} – news from ${SITE}.`, 155);

  const images = [news.image1, news.image2].map(absolute).filter(Boolean);
  const date = news.published_date ? String(news.published_date).slice(0, 10) : undefined;

  return {
    title: pageTitle,
    description,
    url,
    image: images[0],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "NewsArticle",
          headline: truncate(title, 110),
          description,
          mainEntityOfPage: url,
          url,
          ...(date && { datePublished: date, dateModified: date }),
          ...(images.length && { image: images }),
          author: { "@type": "Organization", name: SITE, url: BASE_URL },
          publisher: {
            "@type": "Organization",
            name: SITE,
            logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.webp` },
          },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "News", item: `${BASE_URL}/news` },
            { "@type": "ListItem", position: 3, name: title, item: url },
          ],
        },
      ],
    },
  };
}