# express-tasix

[![Build Status](https://travis-ci.org/muminoff/express-tasix.svg?branch=master)](https://travis-ci.org/muminoff/express-tasix)

[![NPM](https://nodei.co/npm/express-tasix.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/express-tasix.png?downloads=true&downloadRank=true&stars=true)

Node.js Express middleware for Tas-IX network

## What is Tas-IX?
Data exchange network in Uzbekistan, where many domestic ISP providers give access to resources within the network to their subscribers for free.

## What is `express-tasix`?
`express-tasix` is a simple NodeJS/ExpressJS middleware which detects ip adresses/ranges of coming HTTP requests in middleware layer.

## Installation
```
$ npm install express-tasix --save
```

# Example

```
...
var tasix_middleware = require('express-tasix');
...
app.use(tasix_middleware);
...
```

## Contribution
To run the tests:

```
npm test
```

## Disclaimer
Network range is being fetched manually from `http://tasix.sarkor.uz/full`, meaning correctness is based on 3rd party ISP provider which releases network information periodically.

## License
BSD
