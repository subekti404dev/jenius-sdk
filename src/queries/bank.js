const query = "query banks {\n  resources {\n    banks {\n      items {\n        bankCode\n        displayName\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n";
const operationName = "banks";

module.exports = { query, operationName }