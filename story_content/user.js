function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6f7rpj5Gfpl":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="backsound.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

