---
title: August Newsletter
date: 2025-08-02 00:00:00 Z
tags:
- Newsletter
layout: post
subtitle: Welcome to the Strong Towns Ottawa inaugural newsletter!
author: Etienne Lefebvre
featured-image: "/assets/img/newsletter_logo.png"
---

<iframe 
  id="newsletter-iframe"
  src="https://eocampaign1.com/web-version?p=28f5b398-6d68-11f0-865d-05ecf714d2a3&pt=campaign&t=1754060700&s=51c4c01aa7980a838f9ff0982dd4fac65a30c810abc44a9df4b367e1a724588a" 
  width="100%" 
  frameborder="0"
  style="border: none; background: transparent; display: block;"
  scrolling="no"
  onload="resizeIframe(this)"
></iframe>

<script>
function resizeIframe(iframe) {
  iframe.style.height = '4250px'; // Desktop-specific adjustment (Always adjust desktop first, once you find the correct height adjust for mobile below)
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
    iframe.style.height = '6250px'; // Mobile-specific adjustment (Usually 300-400px higher than Desktop)
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