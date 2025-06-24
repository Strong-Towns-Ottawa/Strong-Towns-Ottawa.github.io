---
title: Newsletter May 14th
date: 2025-05-14 00:00:00 Z
tags:
- Finances
layout: post
subtitle: Welcome to the Strong Towns Ottawa inaugural newsletter!
author: Etienne
image: "/assets/img/blog/urban-development.jpg"
---

<iframe 
  id="newsletter-iframe"
  src="https://eocampaign1.com/web-version?p=d996fa3e-34bc-11f0-974a-0d74e976bca3&pt=campaign&t=1747674778&s=5ca69219f1d50a10e9f0d874650b9ed36079a4e9acfc7945a7c1e9435f06ad37" 
  width="100%" 
  frameborder="0"
  style="border: none; background: transparent; display: block;"
  scrolling="no"
  onload="resizeIframe(this)"
></iframe>

<script>
function resizeIframe(iframe) {
  iframe.style.height = '2200px'; // Desktop-specific adjustment (Always adjust desktop first, once you find the correct height adjust for mobile below)
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
    iframe.style.height = '2500px'; // Mobile-specific adjustment (Usually 300-400px higher than Desktop)
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