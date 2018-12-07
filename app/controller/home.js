'use strict';

const {
  BaseController
} = require('cae');
class HomeController extends BaseController {

  async index(query) {

    const cities = await this.service.getCities();

    this.render('home/index', {
      message: 'Welcome use Cae.js',
      cities
    });

  }

}

module.exports = HomeController;
