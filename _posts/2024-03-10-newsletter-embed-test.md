---
layout: post
title: Newsletter May 14th
subtitle: Welcome to the Strong Towns Ottawa inaugural newsletter!
date: 2025-05-14
author: Etienne
tags:
  - Finances
image: /assets/img/blog/urban-development.jpg
---

<iframe 
  id="newsletter-iframe"
  src="https://eocampaign1.com/web-version?p=d996fa3e-34bc-11f0-974a-0d74e976bca3&pt=campaign&t=1747674778&s=5ca69219f1d50a10e9f0d874650b9ed36079a4e9acfc7945a7c1e9435f06ad37" 
  width="100%" 
  frameborder="0"
  style="border: none; background: transparent;"
  scrolling="no"
  onload="resizeIframe(this)"
></iframe>

<script>
function resizeIframe(iframe) {
  iframe.onload = function() {
    // Set height based on content
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
  };
  
  // IMPORTANT: before commiting changes to repo check to see if content is cut off either on mobile or desktop. If some content is cuttoff increase the iframe height in the line below
  iframe.style.height = '2300px';
  setTimeout(function() {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
  }, 50);
}
window.addEventListener('resize', function() {
  var iframe = document.getElementById('newsletter-iframe');
  if (iframe) resizeIframe(iframe);
});
</script>