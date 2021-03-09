const Login = {
  query: "mutation loginWithEmailPasswordOnDevice($email: String!, $password: String!) {\n  loginWithEmailPasswordOnDevice(input: {email: $email, password: $password}) {\n    authId\n    phone\n    __typename\n  }\n}\n",
  operationName: "loginWithEmailPasswordOnDevice"
}

const OTP = {
  query: "mutation deviceLoginVerifyOTP($authId: String!, $otp: String!) {\n  deviceLoginVerifyOTP(input: {authId: $authId, otp: $otp}) {\n    authId\n    __typename\n  }\n}\n",
  operationName: "deviceLoginVerifyOTP"
}

const AddDevice = {
  query: "mutation deviceLoginRegisterDevice($authId: String!, $device: DeviceInput!) {\n  deviceLoginRegisterDevice(input: {authId: $authId, device: $device}) {\n    access_token\n    refresh_token\n    id_token\n    mustChangePassword\n    __typename\n  }\n}\n",
  operationName: "deviceLoginRegisterDevice"
}

module.exports = { Login, OTP, AddDevice }