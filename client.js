const net = require("net");
// establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
      host: "165.227.47.243",
      port:50541
    });
    conn.on("connect", () => {
        console.log("Successfully connected to game server");
        conn.write("Name: ELI");
    });
  
  conn.write("Name: ELI");

  // to see what the passed in data
  conn.on("data", (data) => {
    console.log("data: ", data);
  });


  conn.on("connect", () => {
    conn.write("Name: ELI");
  });

// // sending move up command
//     conn.on("connect", () => {
//       conn.write("Move: up");

//       // setInterval to move up snake every 50ms
//       setInterval(() => {
//         conn.write("Move: up");
//       }, 50);

//       // successive msgs once moving up
//       console.log("Moving up");
//       console.log("Moving up in the world");

//       // delayed msgs once moving up
//       setTimeout(() => {
//         console.log("Moving up");
//       }, 50);

//       setTimeout(() => {
//         console.log("Moving up in the world");
//       }, 100);
//     });


    // interpret incoming data as text
    conn.setEncoding("utf8");
  
    return conn;
};

  module.exports = {connect};