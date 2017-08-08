/**
 * Created by xiaobxia on 2017/8/8.
 */
module.exports = function getIp() {
  let os = require('os'),
    iptable = {},
    ifaces = os.networkInterfaces();
  for (let dev in ifaces) {
    if (ifaces.hasOwnProperty(dev)) {
      let temp = ifaces[dev];
      for (let k = 0, len = temp.length; k < len; k++) {
        let details = temp[k];
        if ((details.family === 'IPv4') && (details.internal === false)) {
          iptable['localIP'] = details.address;
        }
      }
    }
  }
  return iptable.localIP;
};
