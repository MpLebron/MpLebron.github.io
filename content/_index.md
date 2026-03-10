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
                <div class="pm-news-copy">Received the Best Paper award at the 32nd International Conference on Geoinformatics and CPGIS Annual Conference for the <a href="/event/cpgis-2025/">PyGeoModel</a> presentation.</div>
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
        <div class="pm-home-section">
          <div class="pm-section-label pm-section-label-sand">Selected Publications</div>
          <div class="pm-board pm-board-sand">
            <div class="pm-publication-list">
              <article class="pm-publication-card">
                <div class="pm-publication-rail">
                  <div>
                    <div class="pm-publication-year">2025</div>
                    <div class="pm-publication-type">Journal Article</div>
                  </div>
                  <div class="pm-publication-venue">J. Hydrology</div>
                  <div class="pm-publication-role">First author</div>
                </div>
                <div class="pm-publication-main">
                  <h3><a href="/publication/hydrological-sensitivity-analysis/">Facilitating sensitivity analysis of hydrological models through knowledge-driven configuration and distributed online model services</a></h3>
                  <p class="pm-publication-authors"><strong>Peilong Ma</strong>, Min Chen, Shuo Zhang, Zhiyi Zhu, Zhen Qian, Zaiyang Ma, Fengyuan Zhang, Wenwen Li, Songshan Yue, Yongning Wen</p>
                  <p class="pm-publication-venue-line"><em>Journal of Hydrology</em>, 660, 133406</p>
                  <p class="pm-publication-summary">A knowledge-driven workflow for configuring hydrological models and connecting them with distributed online model services, making sensitivity analysis more reusable and easier to execute in service-based environments.</p>
                  <div class="pm-chip-row">
                    <a class="pm-chip" href="/publication/hydrological-sensitivity-analysis/">Details</a>
                    <a class="pm-chip" href="https://www.sciencedirect.com/science/article/abs/pii/S0022169425007449">Article</a>
                  </div>
                </div>
              </article>

              <article class="pm-publication-card">
                <div class="pm-publication-rail">
                  <div>
                    <div class="pm-publication-year">2024</div>
                    <div class="pm-publication-type">Journal Article</div>
                  </div>
                  <div class="pm-publication-venue">Trans. in GIS</div>
                  <div class="pm-publication-role">Co-author</div>
                </div>
                <div class="pm-publication-main">
                  <h3><a href="/publication/open-knowledge-framework/">Construction of an open knowledge framework for geoscientific models</a></h3>
                  <p class="pm-publication-authors">Kai Xu, Songshan Yue, Qingbin Chen, Jin Wang, Fengyuan Zhang, Yijie Wang, <strong>Peilong Ma</strong>, Yongning Wen, Min Chen, Guonian Lu</p>
                  <p class="pm-publication-venue-line"><em>Transactions in GIS</em>, 28(2), 154-175</p>
                  <p class="pm-publication-summary">Introduces a three-level framework for organizing model resources, linked materials, and reusable application knowledge, with OpenGMS as the implementation case.</p>
                  <div class="pm-chip-row">
                    <a class="pm-chip" href="/publication/open-knowledge-framework/">Details</a>
                    <a class="pm-chip" href="https://onlinelibrary.wiley.com/doi/pdf/10.1111/tgis.13134">PDF</a>
                    <a class="pm-chip" href="https://onlinelibrary.wiley.com/doi/10.1111/tgis.13134">Article</a>
                  </div>
                </div>
              </article>

              <article class="pm-publication-card">
                <div class="pm-publication-rail">
                  <div>
                    <div class="pm-publication-year">2022</div>
                    <div class="pm-publication-type">Journal Article</div>
                  </div>
                  <div class="pm-publication-venue">Remote Sensing</div>
                  <div class="pm-publication-role">First author</div>
                </div>
                <div class="pm-publication-main">
                  <h3><a href="/publication/pm25-ml-models/">Retrieval of Fine-Grained PM2.5 Spatiotemporal Resolution Based on Multiple Machine Learning Models</a></h3>
                  <p class="pm-publication-authors"><strong>Peilong Ma</strong>, Fei Tao, Lina Gao, Shaijie Leng, Ke Yang, Tong Zhou</p>
                  <p class="pm-publication-venue-line"><em>Remote Sensing</em>, 14(3), 599</p>
                  <p class="pm-publication-summary">Combines remote sensing, monitoring, and socioeconomic data with multiple machine learning models to retrieve fine-grained PM2.5 concentrations at high spatiotemporal resolution.</p>
                  <div class="pm-chip-row">
                    <a class="pm-chip" href="/publication/pm25-ml-models/">Details</a>
                    <a class="pm-chip" href="https://www.mdpi.com/2072-4292/14/3/599/pdf">PDF</a>
                    <a class="pm-chip" href="https://www.mdpi.com/2072-4292/14/3/599">Article</a>
                  </div>
                </div>
              </article>

              <article class="pm-publication-card">
                <div class="pm-publication-rail">
                  <div>
                    <div class="pm-publication-year">2026</div>
                    <div class="pm-publication-type">Under review</div>
                  </div>
                  <div class="pm-publication-venue">Preprint</div>
                  <div class="pm-publication-role">Co-first author</div>
                </div>
                <div class="pm-publication-main">
                  <h3><a href="/publication/opengeolab-under-review/">OpenGeoLab: Synergizing service-oriented resources and reproducible workflows for geographic modeling</a></h3>
                  <p class="pm-publication-authors"><strong>Peilong Ma</strong>, Minshuo Zhou, Wanhao Li, Wei Xie, Tianyu Sheng, Yongning Wen, Songshan Yue, Guonian Lu, Min Chen</p>
                  <p class="pm-publication-venue-line"><em>Preprint, under review</em></p>
                  <p class="pm-publication-summary">Proposes OpenGeoLab as a unified infrastructure pattern that combines service-oriented resource orchestration with reproducible, container-based workflows for geographic modeling.</p>
                  <div class="pm-chip-row">
                    <a class="pm-chip" href="/publication/opengeolab-under-review/">Details</a>
                    <a class="pm-chip" href="/uploads/opengeolab-under-review.pdf">PDF</a>
                    <span class="pm-chip pm-chip-static">Reproducible workflows</span>
                  </div>
                </div>
              </article>

              <article class="pm-publication-card">
                <div class="pm-publication-rail">
                  <div>
                    <div class="pm-publication-year">2026</div>
                    <div class="pm-publication-type">Under review</div>
                  </div>
                  <div class="pm-publication-venue">SSRN</div>
                  <div class="pm-publication-role">Co-author</div>
                </div>
                <div class="pm-publication-main">
                  <h3><a href="/publication/ai-geo-simulation-scheduling-under-review/">Optimizing AI-driven Geographic Simulation Task Scheduling through Intelligent Runtime Estimation for Distributed Heterogeneous Clusters</a></h3>
                  <p class="pm-publication-authors">Wanhao Li, Min Chen, Fengyuan Zhang, <strong>Peilong Ma</strong>, Zaiyang Ma, Yongning Wen, Songshan Yue, Guonian Lu</p>
                  <p class="pm-publication-venue-line"><em>SSRN preprint, under review</em></p>
                  <p class="pm-publication-summary">Studies how intelligent runtime estimation, historical task knowledge, and LLM-assisted scheduling can improve throughput and balance for AI-driven geo-simulation tasks on distributed heterogeneous clusters.</p>
                  <div class="pm-chip-row">
                    <a class="pm-chip" href="/publication/ai-geo-simulation-scheduling-under-review/">Details</a>
                    <a class="pm-chip" href="/uploads/ai-geo-simulation-scheduling-under-review.pdf">PDF</a>
                    <a class="pm-chip" href="https://ssrn.com/abstract=6049746">SSRN</a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
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
        <div class="pm-home-section">
          <div class="pm-section-label pm-section-label-sky">Open-Source Projects</div>
          <div class="pm-board pm-board-sky">
            <div class="pm-project-grid">
              <article class="pm-project-card">
                <div class="pm-project-mark pm-project-mark-jupyter">PGM</div>
                <div class="pm-project-main">
                  <h3><a href="https://github.com/MpLebron/PyGeoModel">PyGeoModel</a></h3>
                  <p>An intelligent Python package for urban and geographic modeling within Jupyter environments, integrating model recommendation, interactive configuration, question answering, and service-based execution.</p>
                  <div class="pm-chip-row">
                    <a class="pm-chip" href="https://github.com/MpLebron/PyGeoModel">Code</a>
                    <a class="pm-chip" href="https://pypi.org/project/PyGeoModel/">PyPI</a>
                    <span class="pm-chip pm-chip-static">Jupyter</span>
                    <span class="pm-chip pm-chip-static">GeoModeling</span>
                  </div>
                </div>
              </article>

              <article class="pm-project-card">
                <div class="pm-project-mark pm-project-mark-mcp">MCP</div>
                <div class="pm-project-main">
                  <h3><a href="https://github.com/MpLebron/GeoDataProcessor-MCP">GeoDataProcessor-MCP</a></h3>
                  <p>An MCP server for geospatial data processing tools, exposing WhiteBox and SAGA GIS style capabilities through a standardized interface for language-model-based agents and desktop assistants.</p>
                  <div class="pm-chip-row">
                    <a class="pm-chip" href="https://github.com/MpLebron/GeoDataProcessor-MCP">Code</a>
                    <span class="pm-chip pm-chip-static">MCP server</span>
                    <span class="pm-chip pm-chip-static">GIS tools</span>
                  </div>
                </div>
              </article>

              <article class="pm-project-card">
                <div class="pm-project-mark pm-project-mark-sam">SAM</div>
                <div class="pm-project-main">
                  <h3><a href="https://github.com/MpLebron/RS_Segmentation">RS_Segmentation</a></h3>
                  <p>An intelligent segmentation system for remote sensing and GIS imagery, supporting text-prompt segmentation, point-based refinement, GeoTIFF overlay browsing, Shapefile export, and optional voice interaction.</p>
                  <div class="pm-chip-row">
                    <a class="pm-chip" href="https://github.com/MpLebron/RS_Segmentation">Code</a>
                    <a class="pm-chip" href="https://sam-agent.gagogroup.cn">Demo</a>
                    <span class="pm-chip pm-chip-static">Geospatial AI</span>
                    <span class="pm-chip pm-chip-static">SAM/SAM3</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
    design:
      columns: '1'
      spacing:
        padding: [0, 0, 0, 0]
---
