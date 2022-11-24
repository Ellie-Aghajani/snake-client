
const { connect } = require("./client");

const setupInput = (conn) => {
    connection = conn;
  
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
  
    // event listener for stdin.on
    stdin.on("data", handleUserInput);
  
    return stdin;
  };
  
  // function determining what key presses do
  const handleUserInput = function (key) {
    // recognizes ctrl c and displayes msg before exiting
    if (key === "\u0003") {
      console.log("Thanks for using me, ciao!");
      process.exit();
    }
  
    // if key press is w
    if (key === "w") {
      connection.write("Move: up");
    }
  
    // if key press is a
    if (key === "a") {
      connection.write("Move: left");
    }
  
    // if key press is s
    if (key === "s") {
      connection.write("Move: down");
    }
  
    // if key press is d
    if (key === "d") {
      connection.write("Move: right");
    }
  
    if (key === "z") {
      connection.write("Say: Move out da way!");
    }
  
    if (key === "x") {
      connection.write("Say: Collision incoming!");
    }
  };
  module.exports = { setupInput, handleUserInput };