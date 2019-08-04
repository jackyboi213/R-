module.exports = (client, message) => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix))return;
    if (message.content === ('!R')){
      message.reply
      ('不好意思，我正屬於測試階段，更多資料請找我的主人。');return}

      
 else if (message.content ===('!唐詩')) {message.reply
  ('在唐詩三百首裏，你希望我為你顯示哪一首呢？（請在唐詩後面加上"第(1至300)"/隨機）');return}

  // this ain't working at all below
  else if (message.content === '!唐詩'+(number)) {
  
    if (isNaN(amount)) {
     message.reply('你需要輸入一到三百的數字');return
    }
  }

var poems = [TANG1,TANG2,TANG3,TANG4,TANG5,TANG6,TANG7,TANG8,TANG9];
var random_poems = poems[Math.floor(Math.random()*poems.length)];
if (message.content ===('!唐詩隨機')) {message.channel.send(random_poems).then().catch(console.error);return}

  else message.channel.send
    (
        '對不起，那個指令我的主人還沒有加入我的程式内，有更多問題請找我的主人。')};

  
