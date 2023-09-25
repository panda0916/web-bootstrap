// 只能指定ID 只能做一件事情
const id = document.getElementsByid('id')
console.dir(id)
// 不分大小寫 拿來集合 按照名稱 tag
const allImages = document.getElementsByTagName('img')
// 顯示ING網址
for(let img of allImages){
    console.log(img.src)
}
// 按照類別 class 貼上網址圖片等
const squareImages = document.getElementsByclassName('square');
for(let img of squareImages){
    img.src = '網址'
}
// 新方法 找尋標記 只找到第一個
document.querySelector('p')
// 找id
document.querySelector('#id')
// 找種類
document.querySelector('.big')
// 同時找兩個屬性
document.querySelector('p[title = "Java"]')
// 找到所有的P
document.querySelectorAll('p')
// 找type
document.querySelector('input[type="checkbox"]')
// 更改第一個P的內容
const allLinks = document.querySelector('a')
for(let link of allLinks){
    link.innerText = '12345'
}
// innerHTML會包含HTML裡面元素標籤 可以更改粗體等
const t = document.querySelector('h1')
for(let link of t){
    link.innerHTML = '<i>12315<i>'
}