const query = `mutation loginWithPin($userId: String!, $device: DeviceInput!) {\n  loginWithPin(input: {userId: $userId, device: $device}) {\n    access_token\n    refresh_token\n    id_token\n    mustChangePassword\n    __typename\n  }\n}\n`;
const operationName = `loginWithPin`;

module.exports = { query, operationName }