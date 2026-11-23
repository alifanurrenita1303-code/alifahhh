function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ipfylvzbKS":
        Script1();
        break;
  }
}

function Script1()
{
  var videos = document.querySelectorAll("video");



videos.forEach(function(video) {
    
       video.loop = true;
    
       video.play();


});
}

