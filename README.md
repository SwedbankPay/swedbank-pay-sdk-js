![Build & Deploy][build-badge]
[![Language grade: JavaScript][lgtm-badge]][lgtm]
[![codecov][codecov-badge]][codecov]
[![Maintainability][codeclimate-badge]][codeclimate]
[![Dependabot Status][dependabot-badge]][dependabot]


![Swedbank Pay Javascript / Typescript SDK][banner]

## About

**IMPORTANT**: This SDK is at an early stage and not yet used in production.
We do not offer support for this version, but will release supported versions
in the future. Feel free to play around, but for full functionality and support,
please wait for the supported, stable release.

The Swedbank Pay SDK for Node.js simplifies integrations against
[Swedbank Pay's API Platform][developer-portal] by providing native Node.js interface towards
the REST API.

This SDK includes the following payments options:

* Credit and debit cards (Visa, Mastercard, Visa Electron, Maestro etc).

## Quickstart

```
npm install @swedbank-pay/sdk
```

# Documentation
Apart from this README, you can find details and examples of using the SDK in the following places:  

- [Tutorials][tutorials]
- [SDK Documentation][sdk-doc]
- [API Documentation][developer-portal]
- [Examples][examples]

## Contribute & Disclaimer

We love to get help 🙏 This package and repository are not connected to Swedbank Pay.

### Project: v1

This SDK is still under heavy development and needs help from the community 🎉

We have a project for the release of **version 1**, follow the [link][milestone-1.0.0] and look for issues that you'd like to help with!

[banner]:               assets/logo.png
[build-badge]:          https://github.com/bjerkio/swedbank-pay-js/workflows/Build%20&%20Deploy/badge.svg
[codeclimate-badge]:    https://api.codeclimate.com/v1/badges/04b50822a61583ccdb5f/maintainability
[codeclimate]:          https://codeclimate.com/github/bjerkio/swedbank-pay-js/maintainability
[codecov-badge]:        https://codecov.io/gh/bjerkio/swedbank-pay-js/branch/master/graph/badge.svg
[codecov]:              https://codecov.io/gh/bjerkio/swedbank-pay-js
[dependabot-badge]:     https://api.dependabot.com/badges/status?host=github&repo=bjerkio/swedbank-pay-js&identifier=253005089
[dependabot]:           https://dependabot.com
[developer-portal]:     https://developer.swedbankpay.com/payments/
[examples]:             examples/
[lgtm-badge]:           https://img.shields.io/lgtm/grade/javascript/g/bjerkio/swedbank-pay-js.svg?logo=lgtm&logoWidth=18
[lgtm]:                 https://lgtm.com/projects/g/bjerkio/swedbank-pay-js/context:javascript
[milestone-1.0.0]:      https://github.com/bjerkio/swedbank-pay-js/projects/1
[sdk-doc]:              ./docs/README.md
[tutorials]:            tutorials/README.md