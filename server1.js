const http = require('http');

const server = http.createServer((req, res) => {
  console.log('アクセスされました',req)
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write("<title>おみくじ</title>");
  res.write("<script>let randomnumber = Math.random();</script>");
  res.write("<script>let randomNumber = Math.floor(randomnumber * 8);</script>");
  res.write("<h1>おみくじ</h1>")
  res.write("<h2>おみくじ風のゲームです。<br>ぜひよかったら遊んでみてください。<br>ルールを説明します。</h2>")
  res.write("<h3>・大吉、中吉、吉、小吉、末吉、凶、大凶が出ます。<br>・下の「はじめる」ボタンを押したら開始されます。<br>・これは完全にランダムです。</h3>")
  res.write("<script>if (randomNumber == 1){var om = '吉'}</script>")
  res.write("<script>if (randomNumber == 2){var om = '小吉'}</script>")
  res.write("<script>if (randomNumber == 3){var om = '中吉'}</script>")
  res.write("<script>if (randomNumber == 4){var om = '大吉'}</script>")
  res.write("<script>if (randomNumber == 5){var om = '末吉'}</script>")
  res.write("<script>if (randomNumber == 6){var om = '凶'}</script>")
  res.write("<script>if (randomNumber == 7){var om = '大凶'}</script>")
  res.write("<script>function buttonClick(){alert(om);}</script>")
  res.write("<input type='button' value='はじめる' onclick=buttonClick()>")
  res.end();
});

const port = 8080;
server.listen(port);