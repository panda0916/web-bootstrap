const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// 寫一個function 打印數字
function print(element){
    console.log(elenent)
}
// forEach(填寫function)直接幫你打印全部數字
numbers.forEach(print)

// 另一種簡短寫法
numbers.forEach(function(el){
    console.log(el)
})
// 可以打印雙數
numbers.forEach(function(el){
    if(el % 2 === 0){
        console.log(el)
    }
})

