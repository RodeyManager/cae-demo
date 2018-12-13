'use strict';

const {
  BaseService
} = require('cae');

class HomeService extends BaseService {

  async getCities() {
    let res;
    try {
      res = await this.P.sojson.get('_city.json');
    } catch (e) {
      console.error('Fetch get [_city.json]: ', e.message);
    }
    return res && res.body && res.body.slice(0, 100).filter(item => item.city_code) || [];
  }

}

module.exports = HomeService;
