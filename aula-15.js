process.stdin.setEncoding('utf8');

console.log('digite algo');

process.stdin.on('data', function(data) {
    console.log('Você digitou:' + data);
    console.log('Digite novamente:');

    if(data == 0) {
        process.stdin.pause();
    }
})