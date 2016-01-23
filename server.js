var net = require("net")

var reverse = function(word){
  // var revWord = word.split("");
  // return revWord.reverse().join("")
  var arr = word.split(",").map(Number);
  return Math.max(...arr);
}

var server = net.createServer(function(socket){
  socket.on("data", function(name){
    console.log("Data received: " + name);
    socket.write(reverse(name.toString()));
  })
});

server.listen(5000, "127.0.0.1");
