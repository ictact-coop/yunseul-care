---
title: 공지사항
layout: default
permalink: /notice/
---
{% include header.html %}

<h2>공지사항 페이지 입니다.</h2>

<h4>글 목록</h4>
<h2>
  <ul>
    {% for notice in site.notice %}
    <li>
      <a href="{{ notice.url }}"> {{ notice.title }} </a>
    </li>
    {% endfor %}
  </ul>
</h2>

{% include footer.html %}
