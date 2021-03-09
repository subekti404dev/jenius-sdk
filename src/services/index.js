const { BankService } = require("./bank.service");
const { ContactService } = require("./contact.service");
const { HistoryService } = require("./history.service");
const { UserService } = require("./user.service");
const { CardService } = require("./card.service");
const { AwardService } = require("./award.service");
const { ThresholdService } = require("./threshold.service");
const { AccountService } = require("./account.service");
const { TransferService } = require("./transfer.service");
const { StepupService } = require("./stepup.service");
const { SetupService } = require('./setup.service')

module.exports = {
  AccountService,
  SetupService,
  AwardService,
  BankService,
  ContactService,
  HistoryService,
  UserService,
  CardService,
  ThresholdService,
  TransferService,
  StepupService,
};
