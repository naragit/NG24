
const express = require('express');
const app = express();
const port = 8181;

app.get('/', (req, res) => {
  res.send({message: 'alive'})
});

app.get('/summary', (req, res) => {
  res.send(
    {
       source: 'https://en.wikipedia.org/wiki/HTTP',
       summary: `HTTP, or Hypertext Transfer Protocol, is an application layer protocol.`
    }
 );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

