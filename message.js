module.exports = (client, message) => {
  if(message.author.bot) return;
  var fathers = [father1,father2,father3,father4,father5]
  var poems = [TANG1,TANG2,TANG3,TANG4,TANG5,TANG6,TANG7,TANG8,TANG9]
  if (message.content.includes(fathers)){setTimeout(function(){ 
    message.channel.send('NNNOOOOOOOOOOOOOOOOOOO!!!!!!');return
   } , 1680).then(d_msg => {d_msg.delete(8300); })
  }
  prefix = "!"
  var poems = [TANG1,TANG2,TANG3,TANG4,TANG5,TANG6,TANG7,TANG8,TANG9];
  const args = message.content.slice(prefix.length).split(/ +/g);
  const command = args.shift();

 // command area
  if(!message.content.startsWith(prefix))return;

  if (command === ('R')) {message.channel.send
      ('不好意思，我正屬於測試階段，更多資料請找我的主人。');return}

    
  // the above one dont work but the one below? hmmm
  else if (command ===('詩人')) {message.send
  ('在唐詩三百首裏，你希望我為你顯示哪一首呢？（請在!唐詩後面加上"第(1至300)"/隨機）');return}

 else if (command === ('唐詩')) { 
    const amount = parseInt(args);
  
    if (isNaN(amount)) {
      message.channel.send('你需要在‘!唐詩’後輸入有效的數字');return

    }
    else if (amount <= 0 || amount > 300) {
       message.channel.send('你得輸入1到300的數字!(現在只有1到9可用)');return}
 // this is the one which has issues functioning

 
  message.channel.send(poems[Math.floor(amount*poems.length)]);return}

var random_poems = poems[Math.floor(Math.random()*poems.length)];
 if (command === ('唐詩隨機')) {message.channel.send(random_poems).then().catch(console.error);return}

// role stuff

let ROLE1 = message.guild.roles.find(role => role.name === "香港");
let ROLE2 = message.guild.roles.find(role => role.name === "台灣");

  var ROLEA = [roleA1,roleA2,roleA3];
  var random_ROLEA = ROLEA[Math.floor(Math.random()*ROLEA.length)];

  var ROLEB = [roleB1,roleB2,roleB3,roleB3,roleB3];
  var random_ROLEB = ROLEB[Math.floor(Math.random()*ROLEB.length)];
 
 if (command === ('身份組')){
 const RoleName = (args);

 if (RoleName.content.includes('香港')){message.member.addRole(ROLE1);
  setTimeout(function(){message.member.send
  (random_ROLEA).then().catch(console.error)}
  , 10000);return}

 else if (RoleName.content.includes('台灣','臺灣')){message.member.addRole(ROLE2);
   setTimeout(function(){message.member.send
  (random_ROLEB).then().catch(console.error)}
  , 10000);return}

 else message.channel.send
  ('你得在那個指令後面加上你要並有效的身份組的名字。');return}
 
// time control
  else message.channel.send
  (
      '對不起，那個指令我的主人還沒有幫我打程式，有更多問題請找我的主人。')
    .then(d_msg => {d_msg.delete(4000); })
    };

