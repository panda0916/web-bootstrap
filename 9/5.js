// 陣列 使用[0]=red
let colors = ['red', 'orange' , 'yellow' , 'green']
// 可以直接改變[0]裡面的red變成123
colors[0] = 123
// 可以直接增加[4] 後面新的東西
colors[4] = 123
// 直接增加到最後面一個
colors.push('123')
//刪除最後一個併回傳
colors.pop()
// 刪除第一個併回傳
colors.shift()
// 將一個()插入最前面把其他往後推
colors.unshift('vip')
// 判斷是否有此陣列
colors.includes('red');
// 前後對調
colors.reverse()
// 從第幾個索引開始複製陣列()數字 負數從尾巴開始數
let a = colors.slice()
// 複製陣列頭到尾但是不包含尾
colors.slice(1,2)


// 陣列組合
const A =['a','b','c'];
const D =['d','e','f'];
const AD = A.concat(D);
console.log(AD);
['a','b','c','d','e','f'];

