export async function GET() {
  const urls = [
    { loc: "https://ruhco.org/", lastmod: "2025-11-29T12:23:03+00:00", priority: "1.00" },
    { loc: "https://ruhco.org/about_me", lastmod: "2025-11-29T12:23:03+00:00", priority: "0.80" },
    { loc: "https://ruhco.org/services/executive_coaching", lastmod: "2025-11-29T12:23:03+00:00", priority: "0.80" },
    { loc: "https://ruhco.org/services/coaching_supervision", lastmod: "2025-11-29T12:23:03+00:00", priority: "0.80" },
    { loc: "https://ruhco.org/services/coaching_skills", lastmod: "2025-11-29T12:23:03+00:00", priority: "0.80" },
    { loc: "https://ruhco.org/services/organisational_vision", lastmod: "2025-11-29T12:23:03+00:00", priority: "0.80" },
    { loc: "https://ruhco.org/services/change_management", lastmod: "2025-11-29T12:23:03+00:00", priority: "0.80" },
    { loc: "https://ruhco.org/services/organisational_culture", lastmod: "2025-11-29T12:23:03+00:00", priority: "0.80" },
    { loc: "https://ruhco.org/publications", lastmod: "2025-11-29T12:23:03+00:00", priority: "0.80" },
    { loc: "https://ruhco.org/Case-studies", lastmod: "2025-11-29T12:23:03+00:00", priority: "0.80" },
    { loc: "https://ruhco.org/media-and-events", lastmod: "2025-11-29T12:23:03+00:00", priority: "0.80" },
    { loc: "https://ruhco.org/contact-us", lastmod: "2025-11-29T12:23:03+00:00", priority: "0.80" },
    { loc: "https://ruhco.org/community-first", lastmod: "2025-11-29T12:23:03+00:00", priority: "0.80" },
    { loc: "https://ruhco.org/pdfs/1.pdf", lastmod: "2025-11-13T15:45:56+00:00", priority: "0.64" },
    { loc: "https://ruhco.org/pdfs/2.pdf", lastmod: "2025-11-13T15:45:56+00:00", priority: "0.64" },
    { loc: "https://ruhco.org/pdfs/3.pdf", lastmod: "2025-11-13T15:45:56+00:00", priority: "0.64" },
    { loc: "https://ruhco.org/pdfs/4.pdf", lastmod: "2025-11-13T15:45:56+00:00", priority: "0.64" },
    { loc: "https://ruhco.org/pdfs/5.pdf", lastmod: "2025-11-13T15:45:56+00:00", priority: "0.64" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `
  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
