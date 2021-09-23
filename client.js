const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:'135.23.223.133',
    port: 50542
  });

  conn.on("connect",()=>{
    console.log("Succesfully connected to game server");
    conn.write("Name: CAJ");
    conn.write("Move:left");
    conn.write("Move:left");
    setTimeout(() => {
      conn.write("Move: up");
    }, 1000);
    setTimeout(() => {
      conn.write("Move: up");
    }, 2000);
    setTimeout(() => {
      conn.write("Move: up");
    }, 3000);
    setTimeout(() => {
      conn.write("Move: left");
    }, 4000);
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data",(data)=>{
    console.log("Server says: ",data)
  });
  
  return conn;
};

module.exports = {connect};