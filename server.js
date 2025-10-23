document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const title = document.createElement("h1");
  title.textContent = "おみくじ";
  body.appendChild(title);

  const desc = document.createElement("h2");
  desc.innerHTML = "おみくじ風のゲームです。<br>ぜひよかったら遊んでみてください。<br>ルールを説明します。";
  body.appendChild(desc);

  const rules = document.createElement("h3");
  rules.innerHTML = "・大吉、中吉、吉、小吉、末吉、凶、大凶が出ます。<br>・下の「はじめる」ボタンを押したら開始されます。<br>・これは完全にランダムです。";
  body.appendChild(rules);

  const button = document.createElement("input");
  button.type = "button";
  button.value = "はじめる";
  button.onclick = () => {
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
    alert(om);
  };
  body.appendChild(button);
});
