---
title: September Newsletter
date: 2025-09-02 00:00:00 Z
tags:
- Newsletter
layout: post
subtitle: The Budget Is Brewing, Let's Stir The Pot
author: Etienne Lefebvre
featured-image: "/assets/img/newsletter_logo.png"
---

<iframe 
  id="newsletter-iframe"
  src="https://eocampaign1.com/web-version?p=05807a58-72ca-11f0-97df-237306d6f0b6&pt=campaign&t=1756818061&s=e973e6a463371fb14780ac2d833bbfa401b8e532707ab11cd412a6f5fb626015" 
  width="100%" 
  frameborder="0"
  style="border: none; background: transparent; display: block;"
  scrolling="no"
  onload="resizeIframe(this)"
></iframe>

<script>
function resizeIframe(iframe) {
  iframe.style.height = '8200px'; // Desktop-specific adjustment (Always adjust desktop first, once you find the correct height adjust for mobile below)
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
    iframe.style.height = '13400px'; // Mobile-specific adjustment (Usually 33% bigger than Desktop)
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