// 製造p1字串
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
// 製造p2字串
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}
// 找到reset playto
const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto')
// 預設勝利分數3
let winningScore = 3;
// 製造遊戲結束
let isGameOver = false;
// 做一個函數接收p1 and p2
function updateScores(player, opponent) {
    // 不等於遊戲結束就加一分
    if (!isGameOver) {
        player.score += 1;
        // 玩家分數等於勝利分數就結束
        if (player.score === winningScore) {
            isGameOver = true;
            // 勝利分數數字綠色
            player.display.classList.add('has-text-success')
            // 輸掉分數紅色
            opponent.display.classList.add('has-text-danger')
            // 如果勝利或結束按鈕禁止按
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        // 把數字顯示在分數表上
        player.display.textContent = player.score;
    }
}
// 接受函數如果p1勝利
p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
// 接受函數如果p2勝利
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})
// 函數接受勝利分數
winningScoreSelect.addEventListener('change', function () {
    // 勝利分數 = parseInt(解析整數)this.value(這個數值)
    winningScore = parseInt(this.value);
    // 執行重置函數
    reset();
})

// 製造重置按紐
resetButton.addEventListener('click', reset)
// 製作重置函數
function reset() {
    // 執行重置按紐 讓遊戲結束變回重啟遊戲
    isGameOver = false;
    // let p of p1 p2 製造一個P變數 執行p1,p2字串
    for(let p of [p1,p2]){
        // 重置後兩個分數為0
        p.score = 0;
        // 重置後兩個面板上數字為0
        p.display.textContent = 0;
        // 移除分數上的勝利跟輸掉顏色
        p.display.classList.remove('has-text-success', 'has-text-danger')
        // 把按鈕禁用
        p.button.disabled = false;
    }
}