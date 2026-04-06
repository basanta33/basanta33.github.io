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

<div class="row">

{% assign sorted_presentations = site.data.presentations.presentations | sort: "date" | reverse %}
{% for item in sorted_presentations %}

  <div class="col-lg-6 mb-4">
    
    <div class="card p-3 shadow-sm h-100 d-flex flex-column">

      <h4>{{ item.title }}</h4>
      <p>
        <strong>Conference:</strong> {{ item.conference }}<br>
        <strong>Date:</strong> {{ item.date }}<br>
        <strong>Type:</strong> {{ item.type }}
      </p>

      <a href="{{ item.link }}" class="btn btn-primary mt-auto" target="_blank">View PDF</a>

    </div>

  </div>

{% endfor %}

</div>
