---
layout: tutorials
title: Tutorials
slug: tutorials
js_asset: "tutorials"
---

<ul class="tutorials-list">
{% for tutorials_item in site.tutorials %}
  {% if tutorials_item.level == 'basic' %}
    <li>
      <div class="tutorials-meta">
        <em class="tutorials-time"><i class="icon-clock"></i> {{ tutorials_item.time_needed }}</em>
        <em class="tutorials-level {{ tutorials_item.level }}">{{ tutorials_item.level }}</em>
      </div>

      <h2 id="{{ tutorials_item.title | downcase | replace: ' ', '-' | replace: ',', '' | replace: '.', '' }}"><a href="{{ tutorials_item.url }}">{{ tutorials_item.title }}</a></h2>
      <p class="light">{{ tutorials_item.short_description }}</p>
    </li>
  {% endif %}
{% endfor %}

{% for tutorials_item in site.tutorials %}
  {% if tutorials_item.level == 'medium' %}
    <li>
      <div class="tutorials-meta">
        <em class="tutorials-time"><i class="icon-clock"></i> {{ tutorials_item.time_needed }}</em>
        <em class="tutorials-level {{ tutorials_item.level }}">{{ tutorials_item.level }}</em>
      </div>

      <h2 id="{{ tutorials_item.title | downcase | replace: ' ', '-' | replace: ',', '' | replace: '.', '' }}"><a href="{{ tutorials_item.url }}">{{ tutorials_item.title }}</a></h2>
      <p class="light">{{ tutorials_item.short_description }}</p>
    </li>
  {% endif %}
{% endfor %}

{% for tutorials_item in site.tutorials %}
  {% if tutorials_item.level == 'hard' %}
    <li>
      <div class="tutorials-meta">
        <em class="tutorials-time"><i class="icon-clock"></i> {{ tutorials_item.time_needed }}</em>
        <em class="tutorials-level {{ tutorials_item.level }}">{{ tutorials_item.level }}</em>
      </div>

      <h2 id="{{ tutorials_item.title | downcase | replace: ' ', '-' | replace: ',', '' | replace: '.', '' }}"><a href="{{ tutorials_item.url }}">{{ tutorials_item.title }}</a></h2>
      <p class="light">{{ tutorials_item.short_description }}</p>
    </li>
  {% endif %}
{% endfor %}
</ul>
