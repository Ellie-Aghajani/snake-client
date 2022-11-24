const { MOVE_UP, MOVE_LEFT, MOVE_DOWN, MOVE_RIGHT, MESSAGES } = require('./constants');
// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = key => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === MOVE_UP) {
      conn.write('Move: up');
    } else if (key === MOVE_LEFT) {
      conn.write('Move: left');
    } else if (key === MOVE_DOWN) {
      conn.write('Move: down');
    } else if (key === MOVE_RIGHT) {
      conn.write('Move: right');
    } else if (MESSAGES[key]) {
      conn.write(MESSAGES[key]);
    }
  };
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  return stdin;
};

module.exports = { setupInput };