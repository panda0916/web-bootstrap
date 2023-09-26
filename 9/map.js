const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function(t){
    return t.toLowerCase();
})
console.log(caps)
texts;['rofl', 'lol', 'omg', 'ttyl']
caps;['ROFL', 'LOL', 'OMG', 'TTYL']

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// 可以代入數字全部X2
const doubles = numbers.map(function(num){
    return num * 2;
})
// titles自己一個命名
// movies 一個字串名稱

const titles = movies.map(function(movie){
    // movie.title 字串裡面的其中一項
    return movie.title.toUpperCase();
})