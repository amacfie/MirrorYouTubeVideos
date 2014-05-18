//Toggle:
(function(){
    var numberOfVideos = document.getElementsByTagName("video").length;
    
    if(numberOfVideos >= 1)
    {
        var video;
        for(var i = 0; i < numberOfVideos; ++i)
        {
            if(document.getElementsByTagName("video")[i].videoHeight > 100)
            {
                video = document.getElementsByTagName("video")[i];
                break;
            }
        }
        if(video.style.cssText == "")
        {
            window.mirrored=true;
            video.style.cssText = "-moz-transform: scale(-1, 1); -webkit-transform: scale(-1, 1); -o-transform: scale(-1, 1); transform: scale(-1, 1); filter: FlipH;";
            return;
        }
        
        if(window.mirrored)
        {
            video.style.cssText = "-moz-transform: scale(1, 1); -webkit-transform: scale(1, 1); -o-transform: scale(1, 1); transform: scale(1, 1);";
            window.mirrored = false;
        } 
        else if(!window.mirrored)
        {
            video.style.cssText = "-moz-transform: scale(-1, 1); -webkit-transform: scale(-1, 1); -o-transform: scale(-1, 1); transform: scale(-1, 1); filter: FlipH;";
            window.mirrored = true;
        }
    };
})();

//http://chris.zarate.org/projects/bookmarkleter/
//javascript:(function(){var%20numberOfVideos=document.getElementsByTagName(%22video%22).length;if(numberOfVideos%20%3E=1){var%20video;for(var%20i=0;i%20%3C%20numberOfVideos;++i){if(document.getElementsByTagName(%22video%22)[i].videoHeight%20%3E%20100){video=document.getElementsByTagName(%22video%22)[i];break;}}if(video.style.cssText==%22%22){window.mirrored=true;video.style.cssText=%22-moz-transform:%20scale(-1,%201);%20-webkit-transform:%20scale(-1,%201);%20-o-transform:%20scale(-1,%201);%20transform:%20scale(-1,%201);%20filter:%20FlipH;%22;return;}if(window.mirrored){video.style.cssText=%22-moz-transform:%20scale(1,%201);%20-webkit-transform:%20scale(1,%201);%20-o-transform:%20scale(1,%201);%20transform:%20scale(1,%201);%22;window.mirrored=false;}else%20if(!window.mirrored){video.style.cssText=%22-moz-transform:%20scale(-1,%201);%20-webkit-transform:%20scale(-1,%201);%20-o-transform:%20scale(-1,%201);%20transform:%20scale(-1,%201);%20filter:%20FlipH;%22;window.mirrored=true;}};})();
