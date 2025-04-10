---
layout: home
title: Strong Towns Ottawa
subtitle: Making Ottawa a more financially resilient and livable city
---

<div class="hero-banner">
    <div class="hero-overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div class="hero-content">
                    <h1 class="hero-title">Everyone deserves to live in an <em>affordable, equitable, and financially secure city</em>.</h1>
                    <p class="hero-text">Decades of auto-oriented, sprawling development have left their mark on Ottawa, leading to expensive housing, unproductive urban spaces, and unsafe streets. Together, we can advocate for a city built around <em>people, not automobiles</em>.</p>
                    <div class="hero-buttons">
                        <a href="https://discord.gg/your-discord-link" class="btn btn-primary hero-btn hero-btn-yellow">
                            <i class="fab fa-discord"></i> Join us on Discord
                        </a>
                        <a href="https://facebook.com/your-facebook-page" class="btn btn-primary hero-btn hero-btn-yellow">
                            <i class="fab fa-facebook"></i> Join us on Facebook
                        </a>
                        <a href="mailto:info@strongtownsottawa.ca" class="btn btn-primary hero-btn hero-btn-blue">
                            <i class="fas fa-envelope"></i> Send us an email
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
:root {
    --st-blue: #0C2340;
    --st-light-blue: #A7C6ED;
    --st-yellow: #FFB549;
}

body {
    padding: 0 !important;
    margin: 0 !important;
}

/* Override theme's wrapper and container */
.wrapper {
    max-width: none !important;
    padding: 0 !important;
    margin: 0 !important;
}

.container {
    max-width: none !important;
    padding: 0 !important;
    margin: 0 !important;
}

.hero-banner {
    background-image: url('/assets/img/header-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 6rem 0;
    margin: 0;
    text-align: center;
    display: flex;
    align-items: center;
    min-height: 80vh;
    position: relative;
    width: 100vw;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6); /* Black with 60% opacity */
    z-index: 1;
}

.hero-banner .container {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
}

.hero-banner .row {
    margin: 0;
    display: flex;
    justify-content: center;
}

.hero-banner [class*="col-"] {
    padding: 0;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
}

.hero-title {
    font-size: 2.5rem;
    line-height: 1.3;
    margin-bottom: 2rem;
    color: white;
    font-weight: 700;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.hero-title em {
    font-style: italic;
    color: var(--st-yellow);
}

.hero-text {
    font-size: 1.4rem;
    line-height: 1.6;
    margin-bottom: 3rem;
    color: white;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.hero-text em {
    font-style: italic;
    color: var(--st-yellow);
}

.hero-buttons {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
    flex-wrap: nowrap;
    width: 100%;
    padding: 0 1rem;
}

.hero-btn {
    margin: 0;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    border: none;
    border-radius: 4px;
    color: var(--st-blue);
    text-decoration: none;
    transition: all 0.3s ease;
    flex: 1;
    min-width: 0;
    justify-content: center;
    font-weight: 600;
    white-space: nowrap;
}

.hero-btn-yellow {
    background-color: var(--st-yellow);
}

.hero-btn-yellow:hover {
    background-color: #e6a341;
    color: var(--st-blue);
    text-decoration: none;
}

.hero-btn-blue {
    background-color: white;
    color: var(--st-blue);
}

.hero-btn-blue:hover {
    background-color: var(--st-light-blue);
    color: var(--st-blue);
    text-decoration: none;
}

.hero-btn i {
    font-size: 1.1rem;
    width: 1.1rem;
    text-align: center;
}

.hero-btn span {
    flex-shrink: 0;
}

@media (max-width: 768px) {
    .hero-banner {
        padding: 4rem 0;
        min-height: auto;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-text {
        font-size: 1.2rem;
    }
    
    .hero-buttons {
        flex-direction: row;
        gap: 1rem;
        flex-wrap: wrap;
    }
    
    .hero-btn {
        flex: 1;
        min-width: 160px;
    }
}
</style>

<div class="container">
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div class="post-preview">
                <h2 class="post-title">Our Mission</h2>
                <p>We are a group of citizens working to make Ottawa a more financially resilient and livable city. Our goal is to promote sustainable development practices that create strong, vibrant communities.</p>
            </div>
            <hr>
            <div class="post-preview">
                <h2 class="post-title">Get Involved</h2>
                <p>Join us in our mission to make Ottawa a better place to live. Whether you're interested in urban planning, community development, or just want to learn more, we welcome your participation.</p>
                <a href="#" class="btn btn-primary">Join Our Community</a>
            </div>
            <hr>
            <div class="post-preview">
                <h2 class="post-title">Latest Updates</h2>
                <p>Stay informed about our latest initiatives and events. We regularly host community discussions, workshops, and advocacy efforts.</p>
                <a href="#" class="btn btn-default">View All Updates</a>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div class="post-preview">
                <h2 class="post-title">Resources</h2>
                <ul>
                    <li><a href="#">Strong Towns Principles</a></li>
                    <li><a href="#">Local Development Projects</a></li>
                    <li><a href="#">Community Resources</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div class="post-preview">
                <h2 class="post-title">Contact Us</h2>
                <p>Have questions or want to get involved? Reach out to us through our social media channels or email.</p>
                <p>Visit <a href="https://www.strongtownsottawa.ca">www.strongtownsottawa.ca</a> for the production version of this website.</p>
            </div>
        </div>
    </div>
</div>