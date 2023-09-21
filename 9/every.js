const exams =[80, 98, 92, 78, 77, 90, 89, 84, 81, 77]
// true
exams.every(score => score >= 75) 

// 一個函數計算偶數
function allEvens(arr) {
    return arr.every(function (num) {
      return num % 2 === 0;
    });
  }