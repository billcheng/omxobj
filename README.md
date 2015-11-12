# omxobj
Object oriented omxplayer wrapper for Raspberry PI. This will allow multiple videos playing at the same time.


<h2>Installation</h2>
npm install omxjob

<h2>Create an object</h2>
omxobj.create(options);

<h4>Available options:</h4>
layer<br/>
hardwareAudioDecoding<br/>
enable3D<br/>
refresh<br/>
startPosition<br/>
win<br/>
orientation<br/>
alpha<br/>
info<br/>
withInfo<br/>
audioOut<br/>
audioPassThrough<br/>
<br/>
Refer to <a href="https://github.com/huceke/omxplayer">omxplayer</a> for more information.

<h4>Example</h4>
var omxPlayer1 = omxobj.create({layer: 1});

<h2>Methods</h2>
  .play(filename)<br/>
  .stop()<br/>
  .pause()<br/>
  .volumeUp()<br/>
  .volumeDown()<br/>

<h1>Example</h1>
var omxobj = require('omxobj');<br/>
<br/>
var omxOverlay = omxobj.create({layer: 2, alpha: 200}),<br/>
	omxVideo = omxobj.create({layer: 1});<br/>
<br/>
omxOverlay.on('stop', function(){<br/>
	console.log("stop");<br/>
	omxVideo.stop();<br/>
	process.exit();<br/>
});<br/>
<br/>
setTimeout(function(){<br/>
	omxOverlay.play("video2.mp4");<br/>
}, 1000);<br/>
<br/>
omxVideo.play("video1.mp4");<br/>
