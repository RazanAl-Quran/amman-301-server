'use strict';

const express = require('express');

const server = express();

const PORT = process.env.PORT || 3000;

// to access any files inside the public folder
server.use(express.static('./public'));

server.get('/test', (request,response) => {
  response.send('Your test worked');
});

server.get('/data', (request, response) => {
  let family = [
    {name: "John"},
    {name: "Cathy"},
    {name: "Zach"},
    {name: "Allie"}
  ];

  response.json(family);
});

let str = "hello";
const appendTheEnd = (str) => {
    return `${str} The end.`
};
appendTheEnd(str);
server.listen( PORT, () => console.log('Listening on port', PORT));

