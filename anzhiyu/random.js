var posts=["2025/09/10/常用数据结构/","2025/09/10/数据结构导论笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };