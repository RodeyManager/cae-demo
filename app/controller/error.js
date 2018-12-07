'use strict';

const {
  BaseController
} = require('cae');

class ErrorController extends BaseController {

  async index(query) {
    this.render('error/404');
  }

}

module.exports = ErrorController;
