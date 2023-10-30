var gearman = require('abraxas');
var worker = gearman.Client.connect({ host: '127.0.0.1', port: 4730, encoding: 'utf8' });

// set up worker helloWorld
worker.registerWorker('helloWorld', function (task) {
    task.end('Hello World!');
});

