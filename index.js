var spawn = require('child_process').spawn;
var events = require('events').EventEmitter;

function omxPlayer(options) {
	this.args = [];
	this.omxProcess = null;
	var that = this;
	
	events.EventEmitter.call(this);
	
	this.play = function(filename) {
		
		var newArgs = this.args.slice(0);
		newArgs.push(filename);
		this.omxProcess = spawn('omxplayer', newArgs, {
			stdio: ['pipe', null, null]
		});

		this.omxProcess.once('exit', function() {
			this.omxProcess = null;
			that.emit('stop');
		});
	};
	
	this.stop = function() {
		sendAction('q');
	};
	
	this.pause = function() {
		sendAction('p');
	};
	
	this.volumeUp = function() {
		sendAction('+');
	};
	
	this.volumeDown = function() {
		sendAction('-');
	};
	
	if (!options)
		return;
		
	if (options.layer)
		this.args.push('--layer', options.layer);
	
	if (options.hardwareAudioDecoding)
		this.args.push('--hw');
	
	if (options.enable3D)
		this.args.push('-3');
	
	if (options.refresh)
		this.args.push('-r');
		
	if (options.startPosition)
		this.args.push('--pos', options.startPosition);
		
	if (options.win)
		this.args.push('--win', options.win);
		
	if (options.orientation)
		this.args.push('--orientation', options.orientation);
		
	if (options.alpha)
		this.args.push('--alpha', options.alpha);
		
	if (options.info)
		this.args.push('-i');
		
	if (options.withInfo)
		this.args.push('-I');
		
	if (options.audioOut)
		this.args.push('-o', options.audioOut);
		
	if (options.audioPassThrough)
		this.args.push('-p');
	
	function sendAction(action){
		if (that.omxProcess) {
			try {
				that.omxProcess.stdin.write(action, function(err){
					console.log(err);
				});
			} catch(exception){
				console.log(exception);
			}
		}
	}
	
}

omxPlayer.prototype.__proto__ = events.EventEmitter.prototype;

exports.create = function(options){
	return new omxPlayer(options);
};