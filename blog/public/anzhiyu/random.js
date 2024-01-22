var posts=["2024/01/22/Hello-Hexo/","2024/01/22/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };