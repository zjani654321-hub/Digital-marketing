/**
 * SEO Helper for dynamic page titles, metadata, and JSON-LD structured data
 */

export interface PageSEO {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  schema?: Record<string, unknown>;
}

export function updateDocumentSEO(seo: PageSEO) {
  // Update document title
  document.title = `${seo.title} | ZeeMark`;

  // Update meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', seo.description);

  // Update Open Graph tags
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', `${seo.title} | ZeeMark`);

  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', seo.description);

  let ogType = document.querySelector('meta[property="og:type"]');
  if (ogType) ogType.setAttribute('content', seo.ogType || 'website');

  // Update or create Canonical link
  const origin = window.location.origin;
  const basePath = window.location.pathname.startsWith('/Digital-marketing') ? '/Digital-marketing' : '';
  const canonicalUrl = `${origin}${basePath}${seo.canonicalPath || '/'}`;
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);

  // Inject or update Schema.org JSON-LD
  const schemaId = 'zeemark-structured-data';
  let schemaScript = document.getElementById(schemaId) as HTMLScriptElement | null;
  if (!schemaScript) {
    schemaScript = document.createElement('script');
    schemaScript.id = schemaId;
    schemaScript.type = 'application/ld+json';
    document.head.appendChild(schemaScript);
  }

  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ZeeMark",
    "url": origin,
    "description": "Grow Your Business Digitally with original marketing guides, 3D analytics, and free SEO tools.",
    "publisher": {
      "@type": "Organization",
      "name": "ZeeMark",
      "logo": {
        "@type": "ImageObject",
        "url": `${origin}/favicon.ico`
      }
    }
  };

  schemaScript.textContent = JSON.stringify(seo.schema || baseSchema);
}
