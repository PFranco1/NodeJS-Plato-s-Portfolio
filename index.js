console.log(process.env.USER);

//const { EventEmitter } = require('events');
//const eventEmitter = new EventEmitter();

//eventEmitter.on('lunch', () => {
    //do something!
    //console.log('test123')
//});

//eventEmitter.emit('lunch');
//eventEmitter.emit('lunch');

//const { readFile, readFileSync } = require('fs');
//const { readFile } = require('fs').promises;

//const txt = readFileSync('./test.txt', 'utf8');

//readFile('./test.txt', 'utf8', (err, txt) => {
    //console.log(txt);
//});


//async function test(){
    //const file = await readFile('./test.txt', 'utf8');
//}

//console.log('do this first');

const { readFile } = require('fs').promises;
const express = require('express');
const app = express();

app.get('/', async (request, response) => {
    try {
        const html = await readFile('./home.html', 'utf-8');
        response.send(html);
    } catch (error) {
        console.error(error);
        response.status(500).send('Sorry, the server encountered an error.');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is available on http://localhost:${PORT}`));


