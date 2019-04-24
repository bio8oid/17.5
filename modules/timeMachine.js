var os = require('os');
var colors = require('colors');

function timeMachine() {
    var uptime = os.uptime();
    console.log('Uptime: '.green, (Math.floor(uptime / 3600)) + 'h ' + (Math.floor(uptime % 3600 / 60)) + 'm ' + (Math.floor(uptime % 3600 % 60)) + 's ');   
}

exports.print = timeMachine;
