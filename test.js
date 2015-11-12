var omxobj = require('omxPlayer');

var omxOverlay = omxobj.create({layer: 2}),
	omxVideo = omxobj.create({layer: 1});
	
omxOverlay.on('stop', function(){
	console.log("stop");
	omxVideo.stop();
	process.exit();
});

setTimeout(function(){
	omxOverlay.play("video1.mp4");
}, 1000);

omxVideo.play("video2.mp4");