var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

var indexRouter = require('./routes/index');
var alunosRouter = require('./routes/controllers/alunos');
var usersRouter = require('./routes/users');

var apiAlunosRouter = require('./routes/apis/api-alunos');

var httpMethodOverrider = require('./middlewares/http-method-overrider');

var app = express();

// Use CORS middleware
app.use(cors());

// https://github.com/expressjs/method-override?tab=readme-ov-file#custom-logic
app.use(bodyParser.urlencoded());

// Custom Middlewares
app.use(httpMethodOverrider);  // TODO: Criar testes para este middleware

// View engine Setup
// https://github.com/ericf/express-handlebars?tab=readme-ov-file#extnamehandlebars
var hbs = require('./config/config_handlebars');
app.engine('hbs', hbs.engine);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/alunos', alunosRouter);
app.use('/api/v1/alunos', apiAlunosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;