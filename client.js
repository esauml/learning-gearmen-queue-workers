var gearman = require('abraxas');
var client = gearman.Client.connect({ host: '127.0.0.1', port: 4730, encoding: 'utf8' });


client.echo('Server Alive!', function (err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log(result.toString());
    }
    echo.end();
});


client.submitJob('heavyMock', 'mock payload', (error, result) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Job result:', result.toString());
    }
});
client.submitJob('heavyMock', 'mock payload', (error, result) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Job result:', result.toString());
    }
});

client.submitJob('helloWorld', 'mock payload', (error, result) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Job result:', result.toString());
    }
});
client.submitJob('helloWorld', 'mock payload', (error, result) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Job result:', result.toString());
    }
});
client.submitJob('helloWorld', 'mock payload', (error, result) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Job result:', result.toString());
    }
});

// execute twoSum job
client.submitJob('twoSum', JSON.stringify([1, 2]), function (err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log('1 + 2 = ' + result.toString());
    }
});
client.submitJob('twoSum', JSON.stringify([3, 2]), function (err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log('3 + 2 = ' + result.toString());
    }
});
client.submitJob('twoSum', JSON.stringify([4, 2]), function (err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log('4 + 2 = ' + result.toString());
    }
});



// it automatically ends connection when there is no active job