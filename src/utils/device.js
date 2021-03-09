const hex = require('./hex');

class Device {
  devicePin = '5c435d84d54f233f5189b8830ffd66baa4ac5c22db4f13a78118196a19c806eb77a062750778f4d952d18a5c3bbff40c3a344f3114494eec017a82ad92d75b98';
  deviceId = hex.generate(16);
  deviceName = 'The Real of Me';
  deviceType = 'ginkgo';
  deviceOSType = 'Android';
  deviceOSVersion = '10';
  notificationChannelId = 0;
  
  constructor(deviceName = null) {
    if (deviceName) this.deviceName = deviceName;
  }
}

module.exports = Device;