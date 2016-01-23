var readline = require("readline");
var net = require("net");

var rlInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rlInterface.question("Enter a list of numbers: ", function(numbers){
  var client = new net.Socket() // Create a new socket

  client.on("data", function(data){
    console.log("The largest number you entered was: " + data)
    process.exit();
    
  });

  // Connect to server using this socket and send data
  client.connect(5000, "127.0.0.1", function(){
    client.write(numbers);
  });
});
