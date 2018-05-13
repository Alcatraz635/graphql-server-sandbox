const app = require('./app');

app.listen(3000, () => {
  console.log('Express server starting at http://localhost:3000');
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});
