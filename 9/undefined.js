
// 寫一個函數擲骰子可以在()裡面新增數字
function rollDie(numSides){
    // undefined 確認數字
    if(numSides === undefined){
        // 代表沒輸入默認六面骰子
        numSides = 6
    }
    return Math.floor(Math.random() * numSides) + 1
}
// 更簡短的新寫法
function rollDie(numSides = 6){
    return Math.floor(Math.random() * numSides) + 1
}

