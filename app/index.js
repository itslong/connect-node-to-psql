
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({ 
    extended: true, 
  })
);

// route
app.get('/', (request, response) => {
  response.json({ 
    info: 'Node.js, Express and Postgres API'
  });
});

// set app to listen on the port
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

