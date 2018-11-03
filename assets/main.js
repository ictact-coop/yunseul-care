---
---

$(function(){
  $("#rss-feeds").rss("{{ site.naver_blog }}", {
    limit: 5,
    layoutTemplate: '<div class="row">{entries}</div>',
    entryTemplate: '<div class="col-md-6 mb-5"><h3><a href="{url}" target="_blank">[{author}@{date}]{title}</a></h3><p>{shortBodyPlain}</p></div>',
  }, function callback(res){
    console.log(res);
  });
});
