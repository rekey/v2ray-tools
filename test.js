const v2ray = require('./index.js');

console.log(JSON.stringify(v2ray.outbound(
    'vmess://xxxxx'
), null, 4));