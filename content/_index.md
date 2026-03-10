---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

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
    content:
      title: Research Overview
      subtitle: ''
      text: |-
        I work on intelligent geographic modeling at the intersection of geospatial information services, AI for Science, and open science infrastructure. My research focuses on how knowledge, data, and model services can be organized into reusable workflows for geospatial analysis, simulation, and decision support.

        Recent work includes knowledge-driven hydrological sensitivity analysis, open knowledge frameworks for geoscientific models, and interactive Jupyter-based tools such as PyGeoModel. I am interested in building research software and service infrastructures that make geographic modeling more open, reproducible, and easier to use.

        My broader goal is to connect scientific knowledge, computational models, and human-AI interaction into practical systems for geographic problem solving.
    design:
      columns: '1'
  - block: collection
    id: papers
    content:
      title: Publications
      filters:
        folders:
          - publication
    design:
      view: citation
  - block: collection
    id: talks
    content:
      title: Talks & Presentations
      filters:
        folders:
          - event
    design:
      view: date-title-summary
      columns: 1
  - block: collection
    id: projects
    content:
      title: Open-Source Projects
      text: ""
      filters:
        folders:
          - project
    design:
      view: article-grid
      fill_image: false
      columns: 3
---
