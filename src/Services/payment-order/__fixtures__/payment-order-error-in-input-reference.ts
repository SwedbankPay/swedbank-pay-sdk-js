export const payment_order_error_in_input_reference = {
  type: 'https://api.payex.com/psp/errordetail/<resource>/inputerror',
  title: 'There was an input error',
  detail: 'Please correct the errors and retry the request',
  instance: 'ec2a9b09-601a-42ae-8e33-a5737e1cf177',
  status: 400,
  action: 'RetryNewData',
  problems: [
    {
      name: 'CreditCardParameters.Issuer',
      description: 'minimum one issuer must be enabled',
    },
  ],
};
