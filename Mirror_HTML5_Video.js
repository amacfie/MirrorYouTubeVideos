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

