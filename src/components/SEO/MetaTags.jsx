import { useEffect } from 'react';

/**
 * MetaTags Component
 * Dynamically updates page meta tags for SEO
 * 
 * @param {string} title - Page title
 * @param {string} description - Page description
 * @param {string} keywords - Page keywords (optional)
 * @param {string} canonical - Canonical URL (optional)
 * @param {string} ogImage - Open Graph image URL (optional)
 */
function MetaTags({ 
  title, 
  description, 
  keywords = '', 
  canonical = '',
  ogImage = 'https://reviewmanagment.app/logo.png'
}) {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (property, content, isProperty = false) => {
      if (!content) return;
      
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Primary Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('title', title);
    if (keywords) updateMetaTag('keywords', keywords);

    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    if (canonical) updateMetaTag('og:url', canonical, true);

    // Twitter Card
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    if (canonical) updateMetaTag('twitter:url', canonical);

    // Update canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  }, [title, description, keywords, canonical, ogImage]);

  return null; // This component doesn't render anything
}

export default MetaTags;
