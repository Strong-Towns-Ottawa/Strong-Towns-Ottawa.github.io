---
title: January Newsletter
date: 2026-01-05 00:00:00 Z
tags:
- Newsletter
layout: post
author: Etienne Lefebvre
featured-image: "/assets/img/december_meeting.jpg"
featured: true
---

<iframe 
  id="newsletter-iframe"
  src="https://eomail5.com/web-version?p=1600ee10-d6d6-11f0-a9b2-51f3f0bf799e&pt=campaign&t=1767627724&s=3637db7f0ff911023d38ee57a17879b08517068ef0236fb4f0125159eb26a37b" 
  width="100%" 
  frameborder="0"
  style="border: none; background: transparent; display: block;"
  scrolling="no"
  onload="resizeIframe(this)"
></iframe>

<script>
function resizeIframe(iframe) {
  iframe.style.height = '6800px'; // Desktop-specific adjustment (Always adjust desktop first, once you find the correct height adjust for mobile below)
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
    iframe.style.height = '8750px'; // Mobile-specific adjustment (Usually 33% bigger than Desktop)
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