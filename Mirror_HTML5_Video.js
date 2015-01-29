//Toggle:
(function(){
  var node = document.createElement('style');
  document.body.appendChild(node);
  window.addStyleString = function(str) {
    node.innerHTML = str;
  }

  cssText = ".xflip { \
      -moz-transform: scale(-1, 1) !important;\
      -webkit-transform: scale(-1, 1) !important;\
      -o-transform: scale(-1, 1) !important;\
      transform: scale(-1, 1) !important;\
      filter: FlipH !important;\
    }";

  addStyleString(cssText);

  var numberOfVideos = document.getElementsByTagName("video").length;

  if(numberOfVideos >= 1)
  {
    var video;
    for(var i = 0; i < numberOfVideos; ++i)
    {
        if(document.getElementsByTagName("video")[i].videoHeight > 100)
      {
          video = document.getElementsByTagName("video")[i];
          video.classList.toggle('xflip');
        break;
      }
    }
  };
})();
