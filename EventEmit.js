var EventEmitter = require("events").EventEmitter;
var OSinfo = require('./modules/OSinfo');

var emitter = new EventEmitter();
emitter.on("beforeCommand", function (instruction) {
    console.log('You wrote: ' + instruction + ', trying to run command');
});
emitter.on("afterCommand", function () {
    console.log('Finished command');
});



process.stdin.setEncoding('utf-8');

console.log("Please input 'specs' in command line if want to know Node version and system language.");
console.log("Please input '/getOSinfo' if you want to see OS info.");

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		var version = 'specs'
		emitter.emit('beforeCommand', instruction);
		switch(instruction) {
			case '/exit':
			process.stdout.write('Quitting app!\n');
			process.exit();
			break;
			case 'specs':
			console.log('Node version: ' + process.versions.node);
			console.log('System language: ' + process.env.lang);
			break;
			case '/getOSinfo':
			OSinfo.print();
			break;
			default:
			process.stderr.write('Wrong instruction!\n');
			break;
		}
		emitter.emit('afterCommand');
	}


});