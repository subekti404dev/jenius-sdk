module.exports = {
  Forecast: {
    query: "query forecastPayment($bankId: Int!, $accountNumber: String!, $isBusiness: Boolean, $sourceAccountId: ID, $amount: Float, $schedule: PaymentScheduleInput) {\n  forecastPayment(bankCode: $bankId, accountNumber: $accountNumber, isBusiness: $isBusiness, sourceAccountId: $sourceAccountId, amount: $amount, schedule: $schedule) {\n    accountHolderName\n    checksum\n    fee\n    ...PaymentOptionsFragment\n    __typename\n  }\n}\n\nfragment PaymentOptionsFragment on ForecastPaymentResult {\n  methods {\n    method\n    fee\n    requiredFields {\n      key\n      ... on Dropdown {\n        options\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n",
    operationName: "forecastPayment"
  },
  Sendit: {
    query: "mutation createSendIt($input: CreatePaymentInput!) {\n  createPayment(input: $input) {\n    ... on CreateImmediatePaymentResult {\n      id: transactionReferenceId\n      __typename\n    }\n    ... on CreateScheduledPaymentResult {\n      id\n      __typename\n    }\n    __typename\n  }\n}\n",
    operationName: "createSendIt"
  }
}
