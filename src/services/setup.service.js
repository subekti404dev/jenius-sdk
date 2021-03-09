const _ = require('lodash');
const axios = require('axios');
const { SetupQuery } = require('../queries');
const config = require('../../config.json');
const Device = require('../utils/device');
const { Base64 } = require('js-base64');

class SetupService {
  async login(email, password) {
    try {
      const payload = SetupQuery.Login;
      payload['variables'] = { email, password }
      const headers = { 'btpn-apikey': config.apiKey, 'version': config.appVersion }
      const res = await axios.post(config.baseUrl, payload, { headers });
      return _.get(res, 'data.data.loginWithEmailPasswordOnDevice');
    } catch (error) {
      throw (
        _.get(error, "response.data") ||
        _.get(error, "response") ||
        _.get(error, "message") ||
        error
      );
    }
  }

  async otp(authId, otp, deviceName = null) {
    try {
      const headers = { 'btpn-apikey': config.apiKey, 'version': config.appVersion }

      const payloadOTP = SetupQuery.OTP;
      payloadOTP['variables'] = { authId, otp }
      const otpRes = await axios.post(config.baseUrl, payloadOTP, { headers });
      const otpData = _.get(otpRes, 'data.data.deviceLoginVerifyOTP');

      const payloadAddDevice = SetupQuery.AddDevice;
      const device = new Device(deviceName);
      payloadAddDevice['variables'] = { authId: otpData.authId, device };
      const addDeviceRes = await axios.post(config.baseUrl, payloadAddDevice, { headers });
      const addDeviceData = _.get(addDeviceRes, 'data.data.deviceLoginRegisterDevice');

      let userId;
      if (addDeviceData.id_token) {
        const data = JSON.parse(Base64.decode(addDeviceData.id_token.split('.')[1]));
        if (data['uid']) userId = data['uid'];
      }

      return {
        userId,
        device,
        accessToken: addDeviceData.access_token,
        refreshToken: addDeviceData.refresh_token,
        idToken: addDeviceData.id_token,
      }
    } catch (error) {
      throw (
        _.get(error, "response.data") ||
        _.get(error, "response") ||
        _.get(error, "message") ||
        error
      );
    }
  }

}

module.exports = { SetupService }

