var readline = require("readline");
var net = require("net");

//Create interface defining and input and output
var rlInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// question takes in two arguments a string and function
rlInterface.question("Enter a sentence: ", function(name){
  var client = new net.Socket();

  client.on("data", function(data){
    console.log("From Server: " + data);
    process.exit()
  });

  client.connect(5000, "127.0.0.1", function(){
    client.write(name);
  });
});
