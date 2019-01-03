---
layout: null
---

$(function(){
  if ($("#rss-feeds").length) {
    $("#rss-feeds").rss("{{ site.data.blog.blog_rss }}", {
      limit: 1000,
      layoutTemplate: '<div class="row">{entries}</div>',
      entryTemplate: '<div class="item"><h3><a href="{url}" target="_blank">{title}</a></h3><p>[{author}@{date}]</p><p>{bodyPlain}</p></div>',
      dateFormat: 'YYYYMMDD',
      ssl: true,
      success: function(){
        $('#pagination-container').pagination({
          dataSource: $('#rss-feeds .item').toArray(),
          pageSize: 5,
          callback: function(data, pagination) {
            var html = simpleTemplating(data);
            $('#rss-feeds').html(html);
            var w = $('.paginationjs-pages ul').width();
            $('.paginationjs-pages').addClass('mx-auto').width(w);
          }
        })
      }
    });
  }
});

function simpleTemplating(data) {
  var html = '<ul class="list-unstyled">';
  $.each(data, function(index, item){
    html += '<li class="mb-5">'+ item.outerHTML +'</li>';
  });
  html += '</ul>';
  return html;
}
