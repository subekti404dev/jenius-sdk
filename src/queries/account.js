module.exports = {
  Check: {
    query: "query externalAccount($bankCode: Int!, $number: String!) {\n  externalAccount(bankCode: $bankCode, number: $number) {\n    ownerName\n    __typename\n  }\n}\n",
    operationName: "externalAccount"
  }
}
