const Discord = require('discord.js');
const Bot = new Discord.Client();
Bot.login(process.env.TOKEN);

Bot.on("message", message => {
  //if ()
});

// Website \\

const express = require("express");
const app = express();

app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
