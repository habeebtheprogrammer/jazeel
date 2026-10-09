import { programmes } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap() {
  const paths = ["", "/about", "/programmes", ...programmes.map((p) => `/programmes/${p.slug}`), "/enroll"];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1.0 : 0.7,
  }));
}
