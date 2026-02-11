---
title: February Newsletter
date: 2026-02-10 00:00:00 Z
tags:
- Newsletter
layout: post
author: Etienne Lefebvre
featured-image: "/assets/img/waterpipe_map.png"
featured: true
---

<iframe 
  id="newsletter-iframe"
  src="https://eomail5.com/web-version?p=2428002e-ee6d-11f0-b1be-896fb6a599d6&pt=campaign&t=1770732093&s=1fcc912563d38bc69c1873c3b54c3128a60640a56fafd5e9f88c4edbc7e70738" 
  width="100%" 
  frameborder="0"
  style="border: none; background: transparent; display: block;"
  scrolling="no"
  onload="resizeIframe(this)"
></iframe>

<script>
function resizeIframe(iframe) {
  iframe.style.height = '9550px'; // Desktop-specific adjustment (Always adjust desktop first, once you find the correct height adjust for mobile below)
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
    iframe.style.height = '12800px'; // Mobile-specific adjustment (Usually 33% bigger than Desktop)
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