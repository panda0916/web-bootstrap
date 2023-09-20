const square = (x) => {
    return x * x;
}
// 新寫法
const sum = (x, y) => {
    return x + y;
}
// 原本寫法
const add = function(x,y){
    return x + y;
}
// 把=> 後面大誇 改成小誇 可以顯示
// 只有一個值 跟返回才能用簡短式
// 還可以省掉return
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)
const add = (a, b) => a + b