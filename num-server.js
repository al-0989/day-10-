var net = require("net")

var largestNum = function(num){
  var arr = num.split(",").map(Number);
  return Math.max(...arr).toString();
};

var server = net.createServer(function(socket){
  socket.on("data", function(num){
    console.log("Data received: " + num) // just so we can see the data that came in
    // now do stuff with the data and return it
    socket.write(largestNum(num.toString()));
  });
});

server.listen(5000, "127.0.0.1");
