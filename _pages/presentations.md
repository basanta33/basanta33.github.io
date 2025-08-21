---
layout: page
title: Presentations
permalink: /presentations/
description: Scientific Talks and Posters
nav: true
nav_order: 3
display_categories: [work, fun]
horizontal: false
---

## Conference Presentations

<div class="presentations d-flex flex-wrap flex-column">

{% for item in site.data.presentations.presentations %}
  <div class="card p-3 mb-3 shadow-sm">
    <h4>{{ item.title }}</h4>
    <p><strong>Conference:</strong> {{ item.conference }}<br>
       <strong>Date:</strong> {{ item.date }}<br>
       <strong>Type:</strong> {{ item.type }}</p>
    <a href="{{ item.link }}" class="btn btn-primary" target="_blank">View PDF</a>
  </div>
{% endfor %}

</div>
