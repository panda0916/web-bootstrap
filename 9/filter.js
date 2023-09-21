const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// 可以打印10以下字串
numbers.filter(n => {
    return n < 10
})
// m.scroe 裡面分數高於80分數的字串 全部打印出來
const goodMovies = movies.filter(m => m.score > 80)
const badMovies = movies.filter(m => m.score < 70)