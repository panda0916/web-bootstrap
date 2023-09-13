const subreddits = ['cringe', 'books', 'chichens', 'funny', 'pics', 'soccer']
// 舊版寫法
for (let i = 0; i < subreddits.length; i++){
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}
// sub=創建的變數 新寫法
for (let subreddit of subreddits){
    console.log(`Visit reddit.com/r/${subreddit}`)
}

 //印出數字平方
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 只能印出大誇號
// 我的寫法
for (let num of numbers) {
    while (num) { 
        let i =  num
        let a = num * i
        console.log(a)
        break;
    }
}
// 正確新版寫法
for (let num of numbers) {
    console.log(num * num);
  }


const testScores ={
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn:91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnin: 60
}
// 使用in 顯示花誇號裡面內容 
for (let person in testScores){
// 第一段只拿出裡面人名 第二段拿出裡面的分數
    console.log(`${person} scored ${testScores[person]}`)
}
// 只拿出數值

for(let score of Object.values(testScores)){
    console.log(score);
}
// 計算數值平均
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)


