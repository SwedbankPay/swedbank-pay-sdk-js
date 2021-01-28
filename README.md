![Swedbank Pay Javascript / Typescript SDK][banner]

![Build & Deploy][build-deploy]
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/bjerkio/swedbank-pay-js.svg?logo=lgtm&logoWidth=18)][language-grade]
[![codecov](https://codecov.io/gh/bjerkio/swedbank-pay-js/branch/master/graph/badge.svg)][code-coverage]
[![Maintainability](https://api.codeclimate.com/v1/badges/04b50822a61583ccdb5f/maintainability)][maintainability]
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=bjerkio/swedbank-pay-js&identifier=253005089)][dependabot](https://dependabot.com)
![Build & Deploy][build-badge]
[![NPM version][npm-badge]][npm]
[![Language grade: JavaScript][lgtm-badge]][lgtm]
[![codecov][codecov-badge]][codecov]
[![Maintainability][codeclimate-badge]][codeclimate]
[![Dependabot Status][dependabot-badge]][dependabot]
[![CLA assistant][cla-badge]][cla]
[![Contributor Covenant][coc-badge]][coc]

## About

**IMPORTANT**: This SDK is at an early stage and not yet used in production.
We do not offer support for this version, but will release supported versions
in the future. Feel free to play around, but for full functionality and support,
please wait for the supported, stable release.

The Swedbank Pay SDK for Node.js simplifies integrations against [Swedbank Pay's
API Platform][developer-portal] by providing native Node.js interface towards
the REST API.

This SDK includes the following payments options:

* Credit and debit cards (Visa, Mastercard, Visa Electron, Maestro etc).

## Quickstart

```shell
npm install @swedbank-pay/sdk
```

# Documentation

Apart from this README, you can find details and examples of using the SDK in
the following places:  

- [Tutorials][tutorials]
- [SDK Documentation][sdk-doc]
- [API Documentation][developer-portal]
- [Examples][examples]

## Contributing

We love contributions! 🙏 This SDK is still under heavy development and needs
help from the community 🎉

We have a [milestone for v1.0.0][milestone-1.0.0] where you can find issues that
you would like to help resolve.

Bug reports and pull requests are welcome on [GitHub][github]. This project is
intended to be a safe, welcoming space for collaboration, and contributors are
expected to adhere to the [code of conduct][coc] and sign the
[contributor's license agreement][cla].

## License

The code within this repository is available as open source under the terms of
the [Apache 2.0 License][license] and the [contributor's license
agreement][cla].

[banner]:               https://repository-images.githubusercontent.com/253005089/71a47e00-b15a-11ea-837e-bd2edf92c6ea
[build-badge]:          https://github.com/SwedbankPay/swedbank-pay-sdk-js/workflows/Build%20&%20Deploy/badge.svg
[build-deploy]:         https://github.com/bjerkio/swedbank-pay-js/workflows/Build%20&%20Deploy/badge.svg
[cla-badge]:            https://cla-assistant.io/readme/badge/SwedbankPay/jekyll-plantuml-docker
[cla]:                  https://cla-assistant.io/SwedbankPay/swedbank-pay-sdk-js
[coc-badge]:            https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg
[coc]:                  ./CODE_OF_CONDUCT.md
[code-coverage]:        https://codecov.io/gh/bjerkio/swedbank-pay-js
[codeclimate-badge]:    https://api.codeclimate.com/v1/badges/26db1d69e388b2f03bc0/maintainability
[codeclimate]:          https://codeclimate.com/github/SwedbankPay/swedbank-pay-sdk-js/maintainability
[codecov-badge]:        https://codecov.io/gh/SwedbankPay/swedbank-pay-sdk-js/branch/master/graph/badge.svg
[codecov]:              https://codecov.io/gh/SwedbankPay/swedbank-pay-sdk-js
[dependabot-badge]:     https://api.dependabot.com/badges/status?host=github&repo=SwedbankPay/swedbank-pay-sdk-js&identifier=253005089
[dependabot]:           https://dependabot.com
[dependabot]:           https://dependabot.com
[developer-portal]:     https://developer.swedbankpay.com/
[examples]:             ./examples/
[github]:               https://github.com/SwedbankPay/swedbank-pay-sdk-js
[language-grade]:       https://lgtm.com/projects/g/bjerkio/swedbank-pay-js/context:javascript
[lgtm-badge]:           https://img.shields.io/lgtm/grade/javascript/g/SwedbankPay/swedbank-pay-sdk-js.svg?logo=lgtm&logoWidth=18
[lgtm]:                 https://lgtm.com/projects/g/SwedbankPay/swedbank-pay-sdk-js/context:javascript
[license]:              https://opensource.org/licenses/Apache-2.0
[maintainability]:      https://codeclimate.com/github/bjerkio/swedbank-pay-js/maintainability
[milestone-1.0.0]:      https://github.com/SwedbankPay/swedbank-pay-sdk-js/milestone/1
[npm-badge]:            https://img.shields.io/npm/v/@swedbank-pay/sdk
[npm]:                  https://www.npmjs.com/package/@swedbank-pay/sdk
[sdk-doc]:              ./docs/README.md
[tutorials]:            ./tutorials/README.md
