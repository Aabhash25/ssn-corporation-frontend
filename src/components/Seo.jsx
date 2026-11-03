import { Head } from "vite-react-ssg";

const SITE_URL = "https://ssncorporation.com";

/**
 * Per-page head tags. Layout.jsx renders this automatically from each
 * route's `handle.seo` in routes.jsx. Detail pages (news, jobs, projects)
 * can render <Seo title="..." description="..." path="/news/123" /> themselves
 * to override the generic route-level values.
 */
export default function Seo({
  title,
  description,
  path = "/",
  noindex = false,
}) {
  const clean = path === "/" ? "/" : path.replace(/\/$/, "");
  const url = `${SITE_URL}${clean}`;

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SSN Corporation" />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
    </Head>
  );
}
