//Toggle:
(function() {
  var node = document.createElement('style');
  node.type = "text/css";

  cssText = ".xflip { \
      -moz-transform: scale(-1, 1) !important;\
      -webkit-transform: scale(-1, 1) !important;\
      -o-transform: scale(-1, 1) !important;\
      transform: scale(-1, 1) !important;\
      filter: FlipH !important;\
    }";

  node.appendChild(document.createTextNode(cssText));

  document.body.appendChild(node);

  var video = Array.from(document.getElementsByTagName("video"))
    .find(v => v.videoHeight > 100);
  if (video) {
    video.classList.toggle('xflip');
  }
})();
