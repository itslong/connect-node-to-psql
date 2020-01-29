
const db = require('../db/connections');


module.exports = (app) => {
  app.get('/', (request, response) => {
    response.json({ 
      info: 'Node.js, Express and Postgres API'
    });
  });

  app.get('/api/users', db.getUsers);
  app.get('/api/users/:id', db.getUserById);
  app.post('/api/users', db.createUser);
  app.put('/api/users/:id', db.updateUser);
  app.delete('/api/users/:id', db.deleteUser);
};
