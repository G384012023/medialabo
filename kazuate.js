// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  kaisu = kaisu + 1;

  let a = document.querySelector('span#kaisu')
  let p1 = document.createElement('p1')
  p1.textContent = kaisu
  a.insertAdjacentElement('beforeend', p1)

  let b = document.querySelector('span#answer')
  let p2 = document.createElement('p2')
  p2.textContent = yoso
  b.insertAdjacentElement('beforeend', p2)
  
  let p3 = document.createElement('p3')
  let c = document.querySelector('p#result')

  if(kaisu < 3){
    if(kotae === yoso){
        p3.textContent = ("正解です、おめでとう")
        kaisu = kaisu + 3
    } else if (kotae > yoso){
        p3.textContent = ("まちがい、答えはもっと大きいですよ")
    } else if (kotae < yoso){
        p3.textContent = ("まちがい、こたえは　もっと小さいですよ")
    }
  } else if (kaisu === 3){
    if(kotae === yoso){
        p3.textContent = ("正解です。おめでとう")
    } else {
        p3.textContent = ("まちがい、残念でした答えは" + kotae + "です。")
    }
  } else {
        p3.textContent = ("答えは" + kotae + "でした。すでにゲームは終わってます。")
  }
  c.insertAdjacentElement('beforeend', p3)
}
