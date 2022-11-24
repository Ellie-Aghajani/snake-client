const net = require('net');
const {IP, PORT, NAME} = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', (connect) => {
    console.log('Snake Game Server says >>');
  });

  conn.on('connect', () => {
    conn.write(`Name: ${NAME}`);
  });

  conn.on('data', (data) => {
    console.log('You are done!!!');
  });

  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };