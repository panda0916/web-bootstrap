// 從頭開始找學生, 找到分數80以上的第一個優等生, 挑選出來參加比賽(console.log(student))
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
        "score": 95,
        "isExtra": true,
        "lateTimes": 3
    }
];
// for (let i = 0; i < studentsData.length; i++) {
//     const student = studentsData[i]
//     if (student.score > 90 ) {
//         console.log(student)
//         break;
//     }
// }
// let i = 0
// while(i < studentsData.length){
//     const student = studentsData[i]
//     i++;
//     if(student.score > 90){
//         console.log(student)
//         break;
//     }
// }

// let i = 0
// let no = false
// while (i < studentsData.length && !no) {
//     const student = studentsData[i]
//     if (student.score > 90) {
//         console.log(student)
//         no = true
//     }
//     i++;
// }

// for (let num = 1; num <= 20000; num+=num){
//     console.log(num);
// }
let num = 1;
for ( ; num <= 20000; num+=num) { }
console.log(num)

// let num = 1
// while (num <= 20000) {
//     num+=num;
// }
// console.log(num);
console.log("姓名"+studentsData[1].name+"分數"+studentsData[1].score)
console.log(`姓名${studentsData[1].name}分數${studentsData[1].score}`)
