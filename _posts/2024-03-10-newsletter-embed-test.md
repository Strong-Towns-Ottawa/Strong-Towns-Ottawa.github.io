---
layout: post
title: Test, embedding mailchimp newsletters in posts
subtitle: it's all about them i-frames
date: 2025-05-14
author: Etienne
tags:
  - Finances
image: /assets/img/blog/urban-development.jpg
---

## This is a test

<div class="newsletter-embed-container">
  <iframe
    src="https://mailchi.mp/parkingreform/parking-reforms-perfect-partner-meet-single-stair-design-14187747"
    width="100%"
    scrolling="no"
    style="border: none;"
    onload="adjustIframeHeight(this)"
  ></iframe>
</div>

<style>
  .newsletter-embed-container {
    overflow: hidden;
    position: relative;
    -webkit-overflow-scrolling: touch; 
  }
  
  .newsletter-embed-container iframe {
    display: block;
    width: 100%;
    border: 0;
    margin: 0;
    padding: 0;
  }
</style>

<script>
  function adjustIframeHeight(iframe) {
    const isMobile = window.innerWidth <= 768;
    iframe.style.height = isMobile ? '6000px' : '6400px';
    
     if (isMobile) {
      iframe.style.pointerEvents = 'none';
      document.body.style.overflow = 'auto';
    }
    
      setTimeout(() => {
      iframe.style.height = isMobile ? '6000px' : '6400px';
    }, 1000);
  }

  window.addEventListener('resize', function() {
    const iframe = document.querySelector('.newsletter-embed-container iframe');
    if (iframe) adjustIframeHeight(iframe);
  });
</script>