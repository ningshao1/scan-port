const scanPorts = require('./sm');

scanPorts('ss.cmtracker.com', 1, 65535, (ports) => {
    console.log('open ports:', ports);
});