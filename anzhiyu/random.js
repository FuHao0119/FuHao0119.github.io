var posts=["2025/09/10/数据结构导论笔记/","2025/09/10/常用数据结构/","2025/09/11/解决hyprland环境下pacman-Syu-后-gestures-workspace-swipe配置问题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };