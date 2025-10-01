---
title: October Newsletter
date: 2025-10-01 00:00:00 Z
tags:
- Newsletter
layout: post
subtitle: Join our new advocacy focused monthly meetings!
author: Etienne Lefebvre
featured-image: "/assets/img/newsletter_logo.png"
featured: true
---

<iframe 
  id="newsletter-iframe"
  src="https://eomail5.com/web-version?p=502d2d26-88e1-11f0-a78e-a540687d4a7d&pt=campaign&t=1759320096&s=0e5c09e31d882985ea3d9ce7a9f027404b70c15d99d9bc69a7345e3259c69fd5" 
  width="100%" 
  frameborder="0"
  style="border: none; background: transparent; display: block;"
  scrolling="no"
  onload="resizeIframe(this)"
></iframe>

<script>
function resizeIframe(iframe) {
  iframe.style.height = '7300px'; // Desktop-specific adjustment (Always adjust desktop first, once you find the correct height adjust for mobile below)
    setTimeout(function() {
    try {
      // Attempt to get dynamic height (may fail due to cross-origin-resource-sharing limitations)
      const height = iframe.contentWindow.document.body.scrollHeight;
      if (height > 100) { 
        iframe.style.height = height + 'px';
      }
    } catch (e) {
    
      console.log('Could not auto-detect height, using fallback');
    }
  }, 500);

  
  if (window.innerWidth <= 768) {
    iframe.style.height = '10300px'; // Mobile-specific adjustment (Usually 33% bigger than Desktop)
  }
}


function handleResize() {
  const iframe = document.getElementById('newsletter-iframe');
  if (iframe) {
    iframe.style.height = '100px';
    resizeIframe(iframe);
  }
}

window.addEventListener('resize', handleResize);
window.addEventListener('orientationchange', handleResize);
</script>