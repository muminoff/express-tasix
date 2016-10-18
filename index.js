var is_tasix_member = require('./lib');

function tasix_middleware(req, res, next) {
  if(is_tasix_member(req.ip))
    next();
  else
    res.status(403).end('forbidden');
}

module.exports = tasix_middleware;
