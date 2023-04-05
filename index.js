const vmess2config = require('./src/vmess2config.js');
const findDefaultConfig = require('./src/utils/findDefaultConfig');

module.exports = {
    vmess2config({
        url,
        port,
        listen,
        base,
    }) {
        return vmess2config({
            base: base || findDefaultConfig(),
            url, port, listen,
        });
    },
    outbound(url) {
        const config = vmess2config({
            base: findDefaultConfig(),
            url,
            port: 1080,
            listen: 1080,
        });
        return config.outbounds[0];
    }
};