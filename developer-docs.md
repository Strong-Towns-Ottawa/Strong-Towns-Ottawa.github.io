---
layout: page
title: Developer Documentation
subtitle: Technical reference for working with this website
permalink: /developer-docs/
---

# Strong Towns Ottawa Website - Documentation Website 

## Project Overview

This is the official website for **Strong Towns Ottawa**, a local advocacy organization and chapter of the Strong Towns movement. The organization (legally "Ottawa-Gatineau Urbanism Association Inc.") is dedicated to making Ottawa a more financially resilient, livable, and sustainable city through education, advocacy, and community engagement around urban planning topics.

**Primary Functions:**
- Publishing blog posts and analysis articles
- Sharing monthly newsletters
- Announcing and organizing events
- Providing educational resources on housing, transit, infrastructure, and finances
- Building community engagement around urbanism topics

**Website:** [https://strongtownsottawa.ca](https://strongtownsottawa.ca)

## Technology Stack

| Component | Technology |
|-----------|------------|
| **Static Site Generator** | Jekyll 4.3.4 |
| **Theme** | Beautiful Jekyll (remote theme from daattali/beautiful-jekyll) |
| **Language** | Ruby 3.3 |
| **Markdown Parser** | kramdown |
| **CMS** | Decap CMS (formerly Netlify CMS) |
| **Hosting** | Cloudflare Pages |
| **CI/CD** | GitHub Actions ([.github/workflows/jekyll.yml](.github/workflows/jekyll.yml)) |
| **Analytics** | GoatCounter |
| **Icons** | Font Awesome 6.5.2 |
| **CSS Framework** | Bootstrap 4.4.1 |

**Key Jekyll Plugins:**
- `jekyll-paginate-v2` - Advanced pagination (10 posts per page)
- `jekyll-feed` - RSS feed generation
- `jekyll-seo-tag` - SEO metadata
- `jekyll-sitemap` - XML sitemap
- `jekyll-remote-theme` - Remote theme support

## Key Architecture Decisions

### Static Site Generation with Jekyll
Jekyll provides fast, secure static HTML generation with version-controlled content. This eliminates server-side vulnerabilities, reduces hosting costs, and simplifies deployment.

### Remote Theme (Beautiful Jekyll)
Using a remote theme keeps the codebase clean and maintainable without needing to manage theme files locally. Custom styling is layered on top through [assets/css/custom.css](assets/css/custom.css).

### Cloudflare Pages Hosting
Fast, reliable hosting via Cloudflare Pages with custom domain support (strongtownsottawa.ca). Deployment is automatic via GitHub Actions, which builds the site and deploys to Cloudflare's edge network for optimal performance and security.

### Markdown-Based Content
All content is written in Markdown with YAML front matter, making it easy for non-technical contributors to add and edit content.

### Tag-Based Organization
Content is organized using tags (Housing, Transit, Finances, Cycling, Newsletter, Letters, Event) with corresponding category pages in the [All_Posts/](All_Posts/) directory.

### Custom CSS Layer
Brand colors and custom styling are consolidated in a single file ([assets/css/custom.css](assets/css/custom.css)) that overrides theme defaults while preserving theme structure.

## Directory Structure

```
Strong-Towns-Ottawa.github.io/
├── _posts/                      # Blog posts with date prefix (YYYY-MM-DD-title.md)
├── pages/                       # Static pages (about.md, resources.md, etc.)
├── _layouts/                    # HTML templates
│   ├── base.html               # Root template with nav, footer, analytics
│   ├── default.html            # Standard page wrapper
│   ├── home.html               # Homepage layout
│   └── tag.html                # Category/tag page layout
├── _includes/                   # Reusable template components
│   ├── nav.html                # Navigation bar
│   ├── footer-scripts.html     # Footer scripts
│   ├── search.html             # Search functionality
│   ├── tag-filters.html        # Tag filtering interface
│   ├── newsletter-banner.html  # Newsletter signup banner
│   └── warning-banner.html     # Alert banner
├── All_Posts/                   # Tag-based category pages
│   ├── Cycling/
│   ├── Finances/
│   ├── Housing/
│   ├── Transit/
│   ├── Newsletter/
│   ├── Letters/
│   └── Event/
├── assets/
│   ├── css/
│   │   └── custom.css          # All custom styling and brand colors
│   ├── js/
│   │   └── beautifuljekyll.js  # Navigation toggle and mobile menu
│   ├── img/                    # Images
│   └── pdf/                    # PDF documents
├── _config.yml                  # Jekyll configuration
├── .pages.yml                   # Decap CMS configuration
├── index.html                   # Homepage entry point
├── Gemfile & Gemfile.lock       # Ruby dependencies
├── CNAME                        # Custom domain configuration
└── _site/                       # Generated static site (build output)
```

## Coding Conventions

### File Naming

| Type | Pattern | Examples |
|------|---------|----------|
| **Blog Posts** | `YYYY-MM-DD-kebab-case-title.md` | `2026-01-30-sussex-beechwood-and-who-gets-to-belong.md` |
| **Pages** | `kebab-case-filename.md` | `about.md`, `resources.md` |
| **Images** | `kebab-case-filename.{jpg,png,webp}` | `hero_banner.webp`, `sussex-blocks.png` |
| **CSS Classes** | `kebab-case` | `.st-yellow-btn`, `.tag-filter` |

### Front Matter Template

All blog posts require YAML front matter at the top of the file:

```yaml
---
title: Post Title Here
date: YYYY-MM-DD HH:MM:SS Z
tags:
  - Tag1
  - Tag2
layout: post
author: Author Name (optional)
subtitle: Secondary tagline (optional)
featured-image: /assets/img/filename.jpg (optional)
featured: true
published: true
---
```

**Valid Tags:** `Cycling`, `Finances`, `Housing`, `Transit`, `Newsletter`, `Letters`, `Event`

**Required Fields:** `title`, `date`, `tags`, `layout`, `featured`
**Optional Fields:** `author`, `subtitle`, `featured-image`, `published`

**Notes:**
- Set `featured: true` to display post on homepage
- Omit `published` field or set `published: false` for drafts
- Date must not be in the future for post to appear
- Tags must match exactly (case-sensitive)

### CSS Conventions

**Brand Colors** (defined in [assets/css/custom.css](assets/css/custom.css)):
```css
:root {
    --st-blue: #0C2340;         /* Primary brand color */
    --st-light-blue: #A7C6ED;   /* Secondary brand color */
    --st-yellow: #FFB549;       /* Accent/highlight color */
}
```

**Styling Principles:**
- Use CSS custom properties (variables) for brand colors
- Mobile-first responsive design with `@media (max-width: 768px)`
- Class naming: kebab-case (`.navbar-custom`, `.tag-filter-selected`)
- Keep all custom styles in [assets/css/custom.css](assets/css/custom.css)
- Don't modify theme files directly - use CSS overrides

## Common Tasks

### Adding a New Blog Post

1. **Create the file** in `_posts/` directory:
   ```
   _posts/2026-02-03-your-post-title.md
   ```

2. **Add front matter** at the top:
   ```yaml
   ---
   title: Your Post Title
   date: 2026-02-03 10:00:00 Z
   tags:
     - Housing
   layout: post
   author: Your Name
   featured-image: /assets/img/your-image.jpg
   featured: true
   ---
   ```

3. **Write content** in Markdown below the front matter

4. **Add featured image** (optional):
   - Place image in `/assets/img/` directory
   - Use kebab-case naming
   - Optimize/compress before uploading

5. **Choose appropriate tag(s)** from valid list:
   - Cycling, Finances, Housing, Transit, Newsletter, Letters, Event

6. **Set featured status**:
   - `featured: true` displays on homepage
   - `featured: false` excludes from homepage

7. **Commit and push** to trigger automatic deployment

**Example:** See [_posts/2026-01-30-sussex-beechwood-and-who-gets-to-belong.md](https://strongtownsottawa.ca/2026/01/30/sussex-beechwood-and-who-gets-to-belong.html)

### Adding a New Static Page

1. **Create file** in `pages/` directory:
   ```
   pages/your-page-name.md
   ```

2. **Add front matter**:
   ```yaml
   ---
   title: Your Page Title
   layout: page
   permalink: /your-page-name/
   ---
   ```

3. **Write content** in Markdown

4. **Add to navbar** (optional) in [_config.yml](_config.yml):
   ```yaml
   navbar-links:
     Your Page: /your-page-name
   ```

5. **Commit and push**

**Example:** See [pages/about.md](pages/about.md)

### Adding Images

1. **Place image** in `/assets/img/` directory
2. **Use kebab-case naming**: `my-image-title.jpg`
3. **Optimize for web** (compress to reduce file size)
4. **Reference in posts** using absolute path:
   ```markdown
   ![Alt text](/assets/img/my-image-title.jpg)
   ```
   Or in front matter:
   ```yaml
   featured-image: /assets/img/my-image-title.jpg
   ```

### Creating a Newsletter Post

1. Use standard blog post format (see "Adding a New Blog Post")
2. Add `Newsletter` tag in front matter
3. Can embed iframe for newsletter content:
   ```html
   <iframe src="your-newsletter-url" width="100%" height="600"></iframe>
   ```

**Example:** [_posts/2026-01-05-January-Newsletter.md](_posts/2026-01-05-January-Newsletter.md)

### Testing Changes Locally

Before pushing changes, test locally:

```bash
# Install dependencies (first time only)
bundle install

# Start local development server
bundle exec jekyll serve

# Visit in browser
# http://localhost:4000
```

Press `Ctrl+C` to stop the server.

## Debugging and Troubleshooting

### Jekyll Build Failures

**Symptoms:** GitHub Actions workflow fails, site doesn't update

**Solutions:**
- Check Ruby version: `ruby -v` (should be 3.3.x)
- Reinstall gems: `bundle install`
- Clear Jekyll cache: `bundle exec jekyll clean`
- Check for YAML front matter syntax errors (indentation matters!)
- Review GitHub Actions logs at: `.github/workflows/jekyll.yml`
- Look for missing closing quotes or colons in front matter

**Common YAML Errors:**
```yaml
# BAD - missing space after colon
title:Post Title

# GOOD
title: Post Title

# BAD - inconsistent indentation
tags:
  - Housing
    - Transit

# GOOD
tags:
  - Housing
  - Transit
```

### Post Not Appearing on Site

**Check these common issues:**
1. **Future date:** Post date must not be in the future
2. **Draft status:** Remove `published: false` or set to `true`
3. **Invalid YAML:** Check front matter syntax (use YAML validator)
4. **Wrong location:** File must be in `_posts/` directory
5. **Incorrect filename:** Must match `YYYY-MM-DD-title.md` format
6. **Invalid tag:** Tag must be in valid list (case-sensitive)

### Images Not Loading

**Checklist:**
- ✅ Use absolute paths: `/assets/img/filename.jpg` (not relative `../img/`)
- ✅ Verify file exists in correct location
- ✅ Check filename case sensitivity (case matters!)
- ✅ Ensure image was committed and pushed to repository
- ✅ Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### Styling Issues

**Debug steps:**
1. Open browser developer tools (F12)
2. Check if custom CSS is loaded: [assets/css/custom.css](assets/css/custom.css)
3. Verify CSS class names in HTML match stylesheet
4. Test responsive styles at different breakpoints
5. Clear browser cache
6. Check for CSS syntax errors (missing semicolons, braces)

**To modify styles:**
- Edit [assets/css/custom.css](assets/css/custom.css) only
- Don't modify theme files directly
- Use CSS variables for brand colors (`var(--st-blue)`)
- Test mobile responsive design

### Build Succeeds But Changes Not Live

**Possible causes:**
1. **Deployment delay:** Wait 1-2 minutes for Cloudflare Pages deployment
2. **Wrong branch:** Verify push was to `main` branch (not a feature branch)
3. **Workflow not triggered:** Check GitHub Actions tab for workflow status
4. **Browser cache:** Hard refresh: `Ctrl+Shift+R`
5. **DNS cache:** If using custom domain, DNS may take time to propagate

**To verify deployment:**
- Go to repository → Actions tab
- Check latest workflow run completed successfully
- Look for green checkmark next to commit

### Tag Pages Not Working

**Verify:**
1. Tag is in valid list: Cycling, Finances, Housing, Transit, Newsletter, Letters, Event
2. Tag name matches exactly (case-sensitive)
3. Corresponding category page exists in `All_Posts/` directory
4. Tag is properly formatted in front matter (YAML list syntax)

## Important Files Reference

| File | Purpose | When to Edit |
|------|---------|--------------|
| [_config.yml](_config.yml) | Jekyll configuration, site metadata, navbar links, social links | Changing navbar, site title, social media links |
| [.pages.yml](.pages.yml) | Decap CMS configuration for editorial interface | Modifying CMS fields or structure |
| [_layouts/base.html](_layouts/base.html) | Root HTML template with nav, footer, analytics | Changing overall page structure |
| [_includes/nav.html](_includes/nav.html) | Navigation bar HTML | Modifying navigation appearance |
| [assets/css/custom.css](assets/css/custom.css) | All custom styling and brand colors | Any visual/styling changes |
| [assets/js/beautifuljekyll.js](assets/js/beautifuljekyll.js) | Navigation toggle and mobile menu logic | Changing mobile menu behavior |
| [index.html](index.html) | Homepage entry point | Modifying homepage content |
| [.github/workflows/jekyll.yml](.github/workflows/jekyll.yml) | GitHub Actions build and deploy workflow | Changing build or deployment process |
| [Gemfile](Gemfile) | Ruby dependencies | Adding/updating Jekyll plugins |

### When Adding Features

- **Maintain existing conventions** - Don't introduce new patterns unnecessarily
- **Reuse existing components** - Check [_layouts/](_layouts/) and [_includes/](_includes/) for reusable components
- **Test locally first** - Always run `bundle exec jekyll serve` before pushing
- **Keep theme intact** - Don't modify Beautiful Jekyll theme structure directly
- **Follow file naming** - Stick to established kebab-case conventions
- **Use existing tags** - Don't create new tags without updating all tag infrastructure

### When Debugging

- **Start with error messages** - Jekyll errors are usually clear and specific
- **Check GitHub Actions logs** - Build logs show detailed error information
- **Verify locally** - Reproduce issues with `bundle exec jekyll serve`
- **Review recent commits** - Use `git log` to identify breaking changes
- **YAML is sensitive** - Most errors come from front matter formatting

### When Modifying Design

- **Edit custom.css only** - All styling changes go in [assets/css/custom.css](assets/css/custom.css)
- **Don't touch theme files** - Use CSS overrides instead of modifying theme
- **Test responsive design** - Check mobile, tablet, and desktop breakpoints
- **Use brand colors** - Reference CSS variables: `var(--st-blue)`, `var(--st-yellow)`
- **Mobile-first approach** - Base styles for mobile, then add media queries for larger screens

### General Best Practices

- **Read before editing** - Always read existing files before making changes
- **One change at a time** - Make focused commits for easier debugging
- **Preserve working code** - Don't refactor unless explicitly requested
- **Follow YAML syntax strictly** - Indentation and formatting matter
- **Absolute paths for assets** - Always use `/assets/` not relative paths
- **Compress images** - Optimize file sizes before adding to repository

---

**Last Updated:** 2026-02-03
**Maintained By:** Strong Towns Ottawa
**Questions?** Contact hello@strongtownsottawa.ca
