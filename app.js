const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');

// Init app
const app = express();

// request timeout middleware
app.use((req, res, next) => {
  req.setTimeout(60 * 1000, () => {
    const err = new Error('Request Timeout');
    err.status = 408;
    next(err);
  });
  res.setTimeout(60 * 1000, () => {
    const err = new Error('Service Unavailable');
    err.status = 503;
    next(err);
  });
  next();
});

// Body parser middleware
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
  }),
);
app.use(
  bodyParser.json({
    limit: '50mb',
    extended: true,
  }),
);

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(path.join(__dirname, 'dist')));

app.use('', require('./routes/root'));

app.use((req, res) => {
  res.status(404).render('404', {});
});

// Start server after carddb is initialized.
http.createServer(app).listen(process.env.PORT || 5000, '127.0.0.1', () => {
  console.log(`Server started on port ${process.env.PORT || 5000}...`);
});
