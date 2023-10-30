const gearman = require('abraxas');
const worker = gearman.Client.connect({ host: '127.0.0.1', port: 4730, encoding: 'utf8' });

worker.registerWorker('twoSum', function (task) {
    try {
        const numbers = JSON.parse(task.payload);
        if (!Array.isArray(numbers) || numbers.length !== 2) {
            throw new Error('Payload is not valid for twoSum operation');
        }
        const sum = numbers[0] + numbers[1];
        task.end(sum);
    } catch (error) {
        task.error('Error: ' + error.message);
    }
});

