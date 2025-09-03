---
title: All Posts
layout: page
pagination:
  enabled: true
---

<style>
/* Custom CSS to override post title size */
.post-preview .post-title {
  font-size: 1.5rem !important;
  line-height: 1.3 !important;
}

@media (min-width: 768px) {
  .post-preview .post-title {
    font-size: 1.75rem !important;
  }
}

/* New column layout for post previews */
.post-preview article {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 768px) {
  .post-preview article {
    flex-direction: row;
    align-items: flex-start;
  }
}

.post-preview .post-content {
  flex: 1;
}

.post-preview .post-image-column {
  flex-shrink: 0;
  width: 100%;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .post-preview .post-image-column {
    width: 250px; /* Increased from 200px to 250px (25% larger) */
    margin-left: 1.5rem;
    margin-bottom: 0;
  }
}

.post-preview .post-featured-image {
  width: 100%;
  height: 188px; /* Increased from 150px to 188px (25% larger) */
  overflow: hidden;
  border-radius: 6px;
}

.post-preview .post-featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.post-preview .post-featured-image:hover img {
  transform: scale(1.05);
}
</style>

{% include tag-filters.html %}

{% assign posts = paginator.posts | default: site.posts %}

<!-- role="list" needed so that `list-style: none` in Safari doesn't remove the list semantics -->
<ul class="posts-list list-unstyled" role="list">
  {% for post in posts %}
  <li class="post-preview">
    <article>

      <div class="post-content">
        <a href="{{ post.url | absolute_url }}">
          <h2 class="post-title">{{ post.title | strip_html }}</h2>

          {% if post.subtitle %}
            <h3 class="post-subtitle">
            {{ post.subtitle | strip_html }}
            </h3>
          {% endif %}
        </a>

        {% if post.author %}
          <span>By <strong>{{ post.author | strip_html }}</strong></span>
        {% endif %}
        <p class="post-meta">
          {% assign date_format = site.date_format | default: "%B %-d, %Y" %}
          Posted on {{ post.date | date: date_format }}
        </p>

        {% unless site.feed_show_excerpt == false %}
        <div class="post-entry">
          {% assign excerpt_length = site.excerpt_length | default: 50 %}
          {{ post.excerpt | strip_html | truncatewords: excerpt_length }}
        </div>
        {% endunless %}

        {% if site.feed_show_tags != false and post.tags.size > 0 %}
        <div class="blog-tags">
          <span>Tags:</span>
          <!-- role="list" needed so that `list-style: none` in Safari doesn't remove the list semantics -->
          <ul class="d-inline list-inline" role="list">
            {% for tag in post.tags %}
            <li class="list-inline-item">
              <a href="{{ '/topics' | absolute_url }}/{{- tag -}}">{{- tag -}}</a>
            </li>
            {% endfor %}
          </ul>
        </div>
        {% endif %}
      </div>

      <!-- Featured Image Column - Right side on desktop -->
      {% if post.featured-image %}
      <div class="post-image-column">
        <div class="post-featured-image">
          <a href="{{ post.url | absolute_url }}" aria-label="Featured image for {{ post.title }}">
            <img src="{{ post.featured-image | absolute_url }}" alt="Featured image for {{ post.title }}">
          </a>
        </div>
      </div>
      {% endif %}

    </article>
  </li>
  {% endfor %}
</ul>

{% if paginator.total_pages > 1 %}
<ul class="pagination main-pager">
  {% if paginator.previous_page %}
  <li class="page-item previous">
    <a class="page-link" href="{{ paginator.previous_page_path | absolute_url }}">
      <i class="fas fa-arrow-left" alt="Newer Posts"></i>
      <span class="d-none d-sm-inline-block">Newer Posts</span>
    </a>
  </li>
  {% endif %}
  {% if paginator.next_page %}
  <li class="page-item next">
    <a class="page-link" href="{{ paginator.next_page_path | absolute_url }}">
      <span class="d-none d-sm-inline-block">Older Posts</span>
      <i class="fas fa-arrow-right" alt="Older Posts"></i>
    </a>
  </li>
  {% endif %}
</ul>
{% endif %}