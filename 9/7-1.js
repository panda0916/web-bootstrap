// // 循環公式
for(let i= 1; i<=10; i++){
    console.log(i);
}
// // 偶數增加
for(let i= 0; i<=20; i += 2){
    console.log(i);
}
// // 一個一個打印出自串索引內容
for(let i = 0; i<字串.length; i ++){
    console.log(i,字串[i])
}
// // 反過來呈現
for(let i = 字串.length; i >= 0; i --){
    console.log(i,字串[i])
// }
// 索引字串
const seatingChart =[
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]
// 一個一個人名顯示出來
for(let i =0; i < seatingChart.length; i++){
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for(let j = 0; j < row.length; j++){
        console.log(row[j])
    }
}
// 新寫法
for(let row of seatingChart){
    for(let student of row){
        console.log(student)
    }
}
// while 0-9
let count = 0
while(count < 10){
    console.log(count)
    count ++;
// }
// 0-10
let count = 0
while(count < 10){
    count ++;
    console.log(count)
// }
// prompt通常用來收集數據 
const pss = "baby"
let pasd = prompt("輸入密碼");
while(pasd != pss){
    pasd = prompt('密碼錯誤重新輸入');
}
    console.log("密碼正確")


//     您是一位學校教師，您想要根據學生的分數將其分為五個等級：A, B, C, D, 和 F。
//     但是，您也想要給予特定情境下的加分或扣分，運算後新增學生屬性 grade 為計算後等級。

// 規則如下：

// 如果學生參加了額外的課外活動，加 5 分。
// 如果學生有三次以上遲到，扣 5 分。
// 根據調整後的分數，給予學生成績等級。
// 分數對照等級：

// 90 分以上為 A
// 80 到 89 為 B
// 70 到 79 為 C
// 60 到 69 為 D
// 59 分以下為 F


// 在studentsData資料中，每個學生物件都有以下屬性：

// name: 名字。
// score: 原始分數。
// isExtra: 代表有沒有參加課外活動
// lateTimes: 遲到的次數。

const studentsData = [
    {
        "name": "學生A",
        "score": 88,
        "isExtra": true,
        "lateTimes": 1
    },
    {
        "name": "學生B",
        "score": 75,
        "isExtra": false,
        "lateTimes": 4
    },
    {
        "name": "學生C",
        "score": 92,
        "isExtra": true,
        "lateTimes": 0
    },
    {
        "name": "學生D",
        "score": 64,
        "isExtra": false,
        "lateTimes": 2
    },
    {
        "name": "學生E",
        "score": 58,
        "isExtra": true,
        "lateTimes": 3
    }
];
function calculateStudentScore(data) {
    for (let i = 0; i < data.length; i++) {
        let student = data[i]
        if (student['isExtra']) {
            student['score'] += 5
        }
        if (student['lateTimes'] >= 3) {
            student['score'] -= 5
        }
        switch (true) {
            case student['score'] >= 90:
                student['grade'] = 'A';
                break;
            case student.score < 90 && student.score >= 80:
                student['grade'] = 'B';
                break;
            case student.score < 80 && student.score >= 70:
                student['grade'] = 'C';
                break;
            case student.score < 70 && student.score >= 60:
                student['grade'] = 'D';
                break;
            case student.score < 60 :
                student['grade'] = 'F';
                break;
        }
        console.log(data[i])
    }
}

// use
calculateStudentScore(studentsData);
console.log(studentsData);


