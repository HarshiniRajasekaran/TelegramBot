import Zazzle_Bot from "node-telegram-bot-api";

const TOKEN = '6334937786:AAHepiTdmZxI9CYCPqFhvn14JR85zJd_7Gc' ;
console.log("Hello");

const bot =new Zazzle_Bot(TOKEN,{polling:true});

bot.on('message',(msg) => {
  console.log(msg);
  const chatID = msg.chat.id;
  const text = msg.text.toLowerCase();
  if(text=="hello"){
    bot.sendMessage(chatID,"Hello!! How may I help you?");
  }
  if(text=="your name?"){
    bot.sendMessage(chatID,"My name is zazzle, May I know your sweet name?");
  }
  if(text=="google"){
    bot.sendPhoto(chatID,"google.png");
  }
  else{
    bot.sendMessage(chatID,msg.text);
  }
});