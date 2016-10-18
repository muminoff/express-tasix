var ipaddr = require('ipaddr.js');
var network = require('./network');

function is_tasix_member(addr) {

  var ip_is_in_range = false;
  while(network.length) {
    var range = network.pop();
    if (addr_belongs_to_cidr(addr, range)) {
      ip_is_in_range = true;
      break
    }
  }

  return ip_is_in_range;

  // for (var i = 0; i < network.length; i++) {
  //   if (addr_belongs_to_cidr(addr, network[i])) {
  //     ip_is_in_range = true;
  //     break
  //   }
  // }
  // return ip_is_in_range;
}

function addr_belongs_to_cidr(addr, cidr) {
  try {
    var parsed_addr = ipaddr.process(addr);
    if (cidr.indexOf('/') === -1) {
      var parsed_cidr_as_ip = ipaddr.process(cidr);
      return (parsed_addr.toString() == parsed_cidr_as_ip.toString())
    }
    else {
      var parsed_range = ipaddr.parseCIDR(cidr);
      return parsed_addr.match(parsed_range)
    }
  }
  catch (e) {
    return false
  }
}

module.exports = is_tasix_member;
