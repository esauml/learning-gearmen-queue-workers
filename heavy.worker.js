var gearman = require('abraxas');
var worker = gearman.Client.connect({ host: '127.0.0.1', port: 4730, encoding: 'utf8' });

// set up worker helloWorld
worker.registerWorker('heavyMock', function (task) {
    // wait for 5 seconds then return
    setTimeout(() => {
        task.end('heavy load handled!');
    }, 5000);
});

