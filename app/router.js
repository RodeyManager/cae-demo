'use strict';

module.exports = app => {
  return [
    { path: 'error/404', action: 'error.action404' },
    { path: '/', redirect: '/home' },
    { path: '/home', action: 'home.index' },
  ];

  // const {
  //   router
  // } = app;

  // router.get('error/404', 'error.action404');
  // router.get('/', 'home.index');
  // router.get('/home', 'home.index');
};
