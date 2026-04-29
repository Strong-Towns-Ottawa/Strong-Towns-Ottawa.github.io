---
title: May Newsletter
date: 2026-04-29 00:00:00 Z
tags:
- Newsletter
layout: post
author: Jill Stothart, Marko Miljusevic, & Etienne Lefebvre
featured-image: "/assets/img/April_meeting.jpg"
featured: true
---

<iframe 
  id="newsletter-iframe"
  src="https://eomail5.com/web-version?p=31bf47bc-3358-11f1-810a-29dfb9980132&pt=campaign&t=1777474182&s=518d3209ae780bd043d58f201edf20a859ae22b50d795e2682f6a25611db3a33" 
  width="100%" 
  frameborder="0"
  style="border: none; background: transparent; display: block;"
  scrolling="no"
  onload="resizeIframe(this)"
></iframe>

<script>
function resizeIframe(iframe) {
  iframe.style.height = '15360px'; // Desktop-specific adjustment (Always adjust desktop first, once you find the correct height adjust for mobile below)
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
    iframe.style.height = '22760px'; // Mobile-specific adjustment (Usually 33% bigger than Desktop)
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
