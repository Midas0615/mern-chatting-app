if (process.env.NODE_ENV === 'development') {
  require('babel-register');
  require('babel-polyfill');

  require('./server');
}
