export default {
  'paymentorder': {
    'operation': 'Purchase',
    'intent': 'Authorization',
    'currency': 'SEK',
    'description': 'Test Purchase',
    'urls': {
      'hostUrls': ['https://example.com']
    },
    'payer': {
      'email': 'olivia.nyhuus@payex.com',
      'msisdn': '+4798765432',
      'workPhoneNumber': '+4787654321',
      'homePhoneNumber': '+4776543210',
      'shippingAddress': {
        'addressee': 'Olivia Nyhuus',
        'streetAddress': 'Saltnestoppen 43',
        'coAddress': '',
        'city': 'Saltnes',
        'zipCode': '1642',
        'countryCode': 'NO'
      }
    },
    'riskIndicator': {
      'deliveryEmailAddress': 'olivia.nyhuus@payex.com',
      'deliveryTimeFrameIndicator': '01',
      'preOrderDate': '19801231',
      'preOrderPurchaseIndicator': '01',
      'shipIndicator': '01',
      'giftCardPurchase': false,
      'reOrderPurchaseIndicator': '01'
    }
  }
}