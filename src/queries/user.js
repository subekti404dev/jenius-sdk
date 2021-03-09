const query = "query userStatusQuery {\n  viewer {\n    id\n    nickname\n    fullName\n    avatarUrl\n    businessAvatarUrl\n    businessAccountNumber\n    accounts(filter: {types: [PRIMARY]}) {\n      ... on PrimaryAccount {\n        id\n        status\n        type\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n";
const operationName = "userStatusQuery"

module.exports = { query, operationName }