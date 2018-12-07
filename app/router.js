'use strict';

module.exports = app => {

  const {
    router
  } = app;

  router.get('error/404', 'error.action404');
  router.get('/', 'home.index');
  router.get('/home', 'home.index');

};
