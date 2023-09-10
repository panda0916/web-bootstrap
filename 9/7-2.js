// parseInt 是 JavaScript 中的一个内置函数，用于将字符串解析为整数
// 猜數字遊戲

let maximun = parseInt(prompt("輸入你最大數字!"));
// 不等於數字會叫你重新輸入
while (!maximun) {
    maximun = parseInt(prompt("請輸入數字!"));
}


// 輸入的隨機數字*10 +1 去掉小數點
const tagerNum = Math.floor(Math.random() * maximun) + 1;
// 開始猜
let guess = parseInt(prompt("輸入你的猜測!"));
// 猜測次數
let attempts = 1;
// 在while迴圈判斷是否是數字
while (parseInt(guess) !== tagerNum) {
    // 輸入q退出
    if (guess === "q") break;
    // 只對猜數字時增加猜測次數
    if (guess > tagerNum) {
        guess = prompt("數字太大了:");
        attempts++;
    } else if (guess < tagerNum) {
        guess = prompt("數字太小了:");
        attempts++;
    }else {
        guess = prompt('請輸入數字 也可以輸入"q"退出遊戲')
    }
}
// 輸入q退出顯示
if (guess === 'q') {
    console.log('退出')
} else {
    // 打印猜對
    console.log('恭喜你贏了')
    // 打印猜對花幾次次數
    console.log(`賓果! 你猜${attempts}次`)
}