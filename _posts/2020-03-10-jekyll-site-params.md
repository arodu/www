---
layout: post
title: Example paths
category: blog
tags:
  - example
  - paths
image: /media/screenshot_example_1.min.jpg
date: 2020-03-12 14:24
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<!--more-->

### Site
- site.url <code>{{ site.url | inspect }}</code>
- site.baseurl <code>{{ site.baseurl | default: '/' | inspect  }}</code>
- site.baseurl <code>{{ site.baseurl | inspect  }}</code>
- site.time <code>{{ site.time | inspect  }}</code>


### Page
- page.url <code>{{ page.url | inspect  }}</code>
- page.path <code>{{ page.path | inspect  }}</code>
- page.relative_path <code>{{ page.relative_path | inspect  }}</code>
- page.date <code>{{ page.date | inspect  }}</code>

<pre>
{{ page | inspect }}
</pre>
