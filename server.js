const http = require('http');

const server = http.createServer((req, res) => {
  console.log('アクセスされました', req.url);
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write(`<!DOCTYPE html>
  <html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>おみくじ</title>
    <script>
      let randomnumber = Math.random();
      let randomNumber = Math.floor(randomnumber * 8);
      let om = '';
      if (randomNumber == 1){ om = '吉'; }
      if (randomNumber == 2){ om = '小吉'; }
      if (randomNumber == 3){ om = '中吉'; }
      if (randomNumber == 4){ om = '大吉'; }
      if (randomNumber == 5){ om = '末吉'; }
      if (randomNumber == 6){ om = '凶'; }
      if (randomNumber == 7){ om = '大凶'; }
      function buttonClick(){ alert(om); }
    </script>
  </head>
  <body>
    <h1>おみくじ</h1>
    <h2>おみくじ風のゲームです。<br>ぜひよかったら遊んでみてください。<br>ルールを説明します。</h2>
    <h3>・大吉、中吉、吉、小吉、末吉、凶、大凶が出ます。<br>・下の「はじめる」ボタンを押したら開始されます。<br>・これは完全にランダムです。</h3>
    <input type='button' value='はじめる' onclick='buttonClick()'>
  </body>
  </html>`);
  res.end();
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`サーバーがポート${port}で起動しました`);
});
