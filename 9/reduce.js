const prices = [100, 200, 500, 600, 32434, 13]
// 總和計算
let total = 0
for (let price of prices){
    total += price
}
console.log(total)
// 兩者答案一樣
// reduce 陣列數字 total 100+ price 200
// 下一次會在加 300兩者總和+ 下一個陣列數字500
// 依此類推
const total= prices.reduce((total, price) =>{
    return total + price
})
// 上下兩者一樣意思
const total = prices.reduce((total, price) => total + price)

// 找出最小數字
const minPrice = prices.reduce((min, price) => {
    if(price < min){
        return price;
    }
    return min;
})


const number = [1, 2, 4, 6, 7, 8]
// 後面的100代表可以寫在那邊從這個數字開始加總
evens.reduce((sum, num) => sum + num, 100)