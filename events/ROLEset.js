module.exports = (client, message) => {


let ROLE1 = message.guild.roles.find(r => r.name === "香港");
let ROLE2 = message.guild.roles.find(r => r.name === "台灣");


if (message.content ===('!身份組')) {message.reply
    ('你得在那個指令後面加上你要的身份組的名字。');return}

    var ROLEA = [roleA1,roleA2,roleA3];
    var random_ROLEA = ROLA[Math.floor(Math.random()*ROLEA.length)];

    if (message.content ===('!身份組 香港')){message.author.addRole(ROLE1).then(console.log)
      .catch(console.error);
      message.reply
      (random_ROLEA).then().catch(console.error);return}
  
      var ROLEB = [roleB1,roleB2,roleB3];
      var random_ROLEB = ROLEB[Math.floor(Math.random()*ROLEB.length)];

  if (message.content ===('!身份組 台灣')){message.author.addRole(ROLE2).then(console.log)
    .catch(console.error);

}
}