'use strict';

module.exports = app => {
  return [{
      path: '/error/404',
      action: 'error.index'
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      action: 'home.index',
      title: 'Home page'
    },
  ];
};
