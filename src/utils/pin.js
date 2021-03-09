const _ = require('lodash');
const axios = require('axios');
const config = require('../../config.json');
const { PinQuery } = require('../queries');

class PinService {
  async login(userId, device) {
    const data = PinQuery;
    data['variables'] = {
      userId,
      device
    }
    const headers = {
      'btpn-apikey': config.apiKey,
      'version': config.appVersion,
      'User-Agent': 'okhttp/3.12.1'
    }
    const result = await axios.post(config.baseUrl, data, { headers });
    const accessToken = _.get(result, 'data.data.loginWithPin.access_token');
    const refreshToken = _.get(result, 'data.data.loginWithPin.refresh_token');
    const idToken = _.get(result, 'data.data.loginWithPin.id_token');
    return { accessToken, refreshToken, idToken }
  }
}

const pinService = new PinService();

module.exports = { pinService }
