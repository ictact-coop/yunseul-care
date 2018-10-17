---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---
{% include header.html %}
</div>
  <div class="slide_banner">
    슬라이드 배너 들어가는 곳입니다
    <br/>
    <br/>
    이미지가 들어가게 됩니다만 어느정도 크기로 해야할지 감이 안오네요
  </div>
<div class="container">
  <div class="front_box">
      <div class="notice_block">
        <div class="block_title">
          <p>공지사항</p>
        </div>
        <div class="notice_title">
          <ul>
            {% for notice in site.notice %}
            <li>
              <a href="{{ notice.url }}">{{ notice.title }}</a>
            </li>
            {% endfor %}
          </ul>
        </div>
      </div>
      <div class="welfare_block">
        <div class="block_title">
          <p>사회공헌</p>
        </div>
        <div class="welfare_title">
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
      </div>
  </div>
{% include footer.html %}
