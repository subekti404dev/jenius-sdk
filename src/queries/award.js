const query = "query awardsWidgetQuery {\n  viewer {\n    id\n    awards {\n      regular {\n        ...AwardsFragment\n        __typename\n      }\n      bonus {\n        ...AwardsFragment\n        __typename\n      }\n      __typename\n    }\n    lastMonthAvgBalance\n    __typename\n  }\n}\n\nfragment AwardsFragment on Award {\n  withdrawals\n  transactions\n  expiresAt\n  __typename\n}\n";
const operationName = "awardsWidgetQuery";

module.exports = { query, operationName }