// prompt 輸入文黨 .toLowerCase 獲得都是小寫//
const dayofweek = prompt('ENTER A DAY').toLowerCase();
// if 如果 else if 否則如果 else 前面都沒執行到執行else//
if (dayofweek === 'monday'){
    console.log("monday is bad!")
} else if (dayofweek === 'saturday'){
    console.log("saturday is good")
} else if (dayofweek === 'friday'){
    console.log("friday is good")
} else{
    console.log("MEN")
}


const password = prompt("請輸入密碼");
// 密碼長度必須大於等於6
if(password.length >= 6){
    console.log('密碼長度足夠')
}else{
    console.log('請輸入六位數以上')
}
// 密碼不能包含空格 
if (password.indexOf(' ') === -1 ){
    console.log('很棒沒空格')
}else{
    console.log('不能包含空格')
}
&& 左右邊同時正確才執行
const password = prompt("請輸入密碼");
if (password.length >= 6 && password.indexOf(' ') === -1){
    console.log("通過")
} else{
    console.log("密碼長度不夠或是包含空格")
}
0-5歲免費
5-10歲10元
10-65歲20元
65歲以上免費
=或 兩者其中一個達成就列印
const age = 90;
if (age >=0 && age < 5 || age >= 65 ) {
    console.log('免費');
}else if (age>=5 && age < 10){
    console.log('10元');
}else if (age >=10 && age < 65){
    console.log('20元');
}else{
    console.log('輸入錯誤');
}
switch ()裡面數值決定列印 break 執行後中斷 default 沒有輸入case數字
const day = 7;
switch (day) {
    case 1:
        console.log('星期一');
        break;
    case 2:
        console.log('星期二');
        break;
    case 3:
        console.log('星期三');
        break;
    case 4:
        console.log('星期四');
        break;
    case 5:
        console.log('星期五');
        break;
    case 6:
        console.log('星期六');
        break;
    case 7:
        console.log('星期日');
        break;
    default:
        console.log("我不懂")
}
在以下function實作num 是否為偶數, 是的話印出yes, 不是的話印出no
function isEvenorOdd(num) {
    if (num % 2 === 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
// 在以下function實作num1, num2 哪個數字大, 並印出數字
function findLargest(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}
// 在以下function 用switch 實作 num 的區間, 小於33印出small , 大於等於33印出mid , 大於 66 印出large
function impleSwitch(num) {
    switch (true) {
        case num < 33:
            console.log('small');
            break;
        case num >= 33 && num <= 66:
            console.log('mid');
            break;
        case num > 66:
            console.log('Large');
            break;
    }
}
isEvenorOdd(3);
findLargest(1, 2);
impleSwitch(55);