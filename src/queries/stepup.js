module.exports = {
  query:
    "mutation stepUpWithPassword($password: String!, $deviceId: String!) {\n  stepUpWithPassword(input: {password: $password, deviceId: $deviceId}) {\n    access_token\n    id_token\n    __typename\n  }\n}\n",
  operationName: "stepUpWithPassword",
};

