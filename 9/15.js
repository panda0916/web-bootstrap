// 製作一個函數讓他執行兩次callTwice(rollDie)讓他丟兩次骰子
function callTwice(func){
    func();
    func();
}
// callTenTimes(rollDie)讓她執行10次
function callTenTimes(f){
    for(let i = 0; i < 10; i++){
        f();
    }
}
// 製作一個骰子
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}


const myMath = {
    PI: 3.14159,
    square(num){
        return num * num;
    },
    cube(num){
        return num ** 3;
    }
}