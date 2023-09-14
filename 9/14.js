// 製作一個文黨 重複幾次
function repeat(str, numTimes) {
    // 創建一個空字符串 儲存文字
    let result = '';
    // i=0 < 輸入數字 就在執行
    for(let i = 0; i < numTimes; i++){
        // result 儲存文字+ str(輸入文字)
        result += str;
    }
    console.log(result);
}