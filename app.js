const bodyParser = require('body-parser'),
      express = require('express'),
      mustache = require('mustache'),
      mustacheExpress = require('mustache-express'),
      sequelize = require('sequelize');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
    res.render("index");
})

app.listen(3000, function() {
    console.log('Express running on http://localhost:3000/.')
});

process.on('SIGINT', function() {
  console.log("\nshutting down");
  const index = require('./models/index')
  index.sequelize.close()

  setTimeout(function() {
    console.log('process exit');
    process.exit(0);
  }, 1000)
});
