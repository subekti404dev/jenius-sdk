
module.exports = {
  Set: {
    query: "mutation setTransactionThreshold($amount: Int!, $clientType: ClientType) {\n  setTransactionThreshold(input: {transactionThreshold: $amount, clientType: $clientType}) {\n    viewer {\n      id\n      preferences {\n        transactionThreshold\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
    operationName: "setTransactionThreshold"
  },
  Get: {
    query: "query getTransactionThreshold {\n  viewer {\n    id\n    preferences {\n      transactionThreshold\n      __typename\n    }\n    __typename\n  }\n}\n",
    operationName: "getTransactionThreshold"
  }
}