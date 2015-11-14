# omxobj
Object oriented omxplayer wrapper for Raspberry PI. This will allow multiple videos playing at the same time. This wrapper has the ability to track the progress as well.


Installation
-------
```
npm install omxjob
```

Create an object
---------
```javascript
omxobj.create(options);
```

Available options:
----------
layer<br/>
hardwareAudioDecoding<br/>
enable3D<br/>
refresh<br/>
startPosition<br/>
win<br/>
orientation<br/>
alpha<br/>
info<br/>
audioOut<br/>
audioPassThrough<br/>
<br/>
Refer to <a href="https://github.com/huceke/omxplayer">omxplayer</a> for more information.

Example
-------
```javascript
var omxPlayer1 = omxobj.create({layer: 1});
```

Methods
-------
  .play(filename)<br/>
  .stop()<br/>
  .pause()<br/>
  .volumeUp()<br/>
  .volumeDown()<br/>

Example
-------
```javascript
var omxobj = require('omxPlayer');

var omxOverlay = omxobj.create({layer: 2}),
	omxVideo = omxobj.create({layer: 1});
	
omxOverlay.on('stop', function() {
	console.log("stop");
	omxVideo.stop();
	process.exit();
});

setTimeout(function(){
	omxOverlay.play("video1.mp4");
}, 1000);

omxVideo.on("progress", function(progress) {
	console.log("Progress: %d\%", progress);
});

omxVideo.play("video2.mp4");

```