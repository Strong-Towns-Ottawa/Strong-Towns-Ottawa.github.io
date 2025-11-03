---
title: November Newsletter
date: 2025-11-03 00:00:00 Z
tags:
- Newsletter
layout: post
author: Etienne Lefebvre
featured-image: "/assets/img/newsletter_logo.png"
featured: true
---

<iframe 
  id="newsletter-iframe"
  src="https://eomail5.com/web-version?p=77579b5a-b6ba-11f0-8f0e-1bf7c7ba3c2b&pt=campaign&t=1762180907&s=37f468acc535d5fb1901325661949e5d7865dfe40b334074200ceabeafcf1106" 
  width="100%" 
  frameborder="0"
  style="border: none; background: transparent; display: block;"
  scrolling="no"
  onload="resizeIframe(this)"
></iframe>

<script>
function resizeIframe(iframe) {
  iframe.style.height = '8175px'; // Desktop-specific adjustment (Always adjust desktop first, once you find the correct height adjust for mobile below)
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
    iframe.style.height = '12000px'; // Mobile-specific adjustment (Usually 33% bigger than Desktop)
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