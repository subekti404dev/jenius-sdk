const { pinService } = require('./src/utils/pin');
const { 
  AccountService,
  AwardService,
  BankService,
  CardService,
  ContactService,
  HistoryService,
  SetupService, 
  StepupService,
  ThresholdService,
  TransferService,
  UserService
 } = require('./src/services');
const Device = require('./src/utils/device')

class JeniusSDK {
  _userId = null;
  _device = null;
  _token = {
    accessToken: null,
    refreshToken: null,
    idToken: null
  }
  constructor(userId = null, deviceId = null) {
    this._userId = userId;
    this._device = deviceId;
  }

  get setup() {
    return new SetupService();
  }
  
  async refreshToken() {
    const token = await pinService.login(this._userId, this._device);
    this._token = token;
  }
  
  get accountService() {
    return new AccountService(this._token);
  }

  get awardService() {
    return new AwardService(this._token);
  }

  get bankService() {
    return new BankService(this._token);
  }

  get cardService() {
    return new CardService(this._token);
  }

  get contactService() {
    return new ContactService(this._token);
  }

  get historyService() {
    return new HistoryService(this._token);
  }

  get stepupService() {
    return new StepupService(this._token);
  }

  get thresholdService() {
    return new ThresholdService(this._token);
  }

  get transferService() {
    return new TransferService(this._token);
  }

  get userService() {
    return new UserService(this._token);
  }
}

module.exports = JeniusSDK;
