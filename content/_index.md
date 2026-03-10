---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "4.5rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: View CV
        url: experience/
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: markdown
    id: talks
    content:
      title: ""
      subtitle: ''
      text: |-
        <div class="pm-home-section">
          <div class="pm-section-label pm-section-label-sky">Talks &amp; Updates</div>
          <div class="pm-board pm-board-sky">
            <div class="pm-news-list">
              <div class="pm-news-item">
                <div class="pm-news-date">Mar 2026</div>
                <div class="pm-news-copy">Released the under-review paper <a href="/publication/ai-geo-simulation-scheduling-under-review/">Optimizing AI-driven Geographic Simulation Task Scheduling through Intelligent Runtime Estimation for Distributed Heterogeneous Clusters</a>, focusing on runtime estimation and resource-aware scheduling for distributed heterogeneous clusters.</div>
              </div>
              <div class="pm-news-item">
                <div class="pm-news-date">Jan 2026</div>
                <div class="pm-news-copy">Completed the preprint <a href="/publication/opengeolab-under-review/">OpenGeoLab: Synergizing service-oriented resources and reproducible workflows for geographic modeling</a>, a unified infrastructure pattern for geographic modeling workflows.</div>
              </div>
              <div class="pm-news-item">
                <div class="pm-news-date">Nov 2025</div>
                <div class="pm-news-copy">Presented <a href="/event/opengeolab-2025/">OpenGeoLab</a> at the International Congress on Modelling and Simulation in Adelaide, Australia.</div>
              </div>
              <div class="pm-news-item">
                <div class="pm-news-date">Oct 2025</div>
                <div class="pm-news-copy">Published <a href="/publication/hydrological-sensitivity-analysis/">Facilitating sensitivity analysis of hydrological models through knowledge-driven configuration and distributed online model services</a> in <em>Journal of Hydrology</em>.</div>
              </div>
              <div class="pm-news-item">
                <div class="pm-news-date">Jun 2025</div>
                <div class="pm-news-copy">Received the <a href="https://x.com/cpgis_media/status/1935439054767604062?s=20" target="_blank" rel="noopener">Best Paper award</a> at the 32nd International Conference on Geoinformatics and CPGIS Annual Conference for the <a href="/event/cpgis-2025/">PyGeoModel</a> presentation.</div>
              </div>
            </div>
          </div>
        </div>
    design:
      columns: '1'
      spacing:
        padding: [0, 0, 0, 0]
  - block: markdown
    id: papers
    content:
      title: ""
      subtitle: ''
      text: |-
        {{< pm_publications >}}
    design:
      columns: '1'
      spacing:
        padding: [0, 0, 0, 0]
  - block: markdown
    id: projects
    content:
      title: ""
      subtitle: ''
      text: |-
        {{< pm_projects >}}
    design:
      columns: '1'
      spacing:
        padding: [0, 0, 0, 0]
---
