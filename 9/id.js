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
// 先尋找img再利用搜尋到的個別改兩個屬性
const eggImg = document.querySelector('img');
eggImg.src = 'https://devsprouthosting.com/images/chicken.jpg';
eggImg.alt = 'chicken';
// 更改樣式
h1.style.color = 'green'
h1.style.fontSize = '3em'
// 取得屬性
h1.getAttribute('class')
// 設定屬性
h1.setAttribute('class', 'purple')
// 可以直接新增屬性不用擔心前面做甚麼
h1.classList.add('purple')
// 去除這個屬性
h1.classList.remove('purple')
// 是否有這屬性
h1.classList.contains('purple')
// 有這個屬性刪除 沒這個屬性添加
h1.classList.toggle('purple')
// 變更方法
const lis = document.querySelectorAll('li')
for(let li of lis){
    li.classList.toggle("highlight")
}
// 找尋一個元素 parentElement 再往上找一個他的父元素
const p = document.querySelector('p')
const pa = p.parentElement
// 找小孩有幾個 也可以[0]找第一個
pa.children[0]
// 下一個節點
p.nextElementSibling
// 上一個節點
p.previousElementSibling
// 新增元素
const newImg = document.createElement('img')
console.dir(newImg)
// 後面新增圖片網址新增
newImg.src = 
// 插入在body內
document.body.appendChild(newImg)
// 改變圖片屬性
newImg.classList.add('square')
// 新增h3元素
const newH3 = document.createElement('h3')
// 在h3裡面新增文字
newH3.innerText = '11234'
// 在body裡面插入
document.body.appendChild(newH3)

// 可以插入多個元素 在結尾
const p = document.querySelector('p')
// 將創建元素新增文字
p.append('1235')
// 插入首
pa.prepend(p)
// 插入相鄰元素\ createElement 創建
const h2 = document.createElement('h2')
h2.append('12354')
// 尋找h1元素 儲存
const h1 = document.querySelector('h1')
// 插入h1之前 
h1.inserAdjacentElement('beforebegin', h2)
// 插入h1在它的第一個孩子之前
h1.inserAdjacentElement('afterbegin', h2)
// afterend 插入h1之後  
h1.inserAdjacentElement('afterend', h2)
// afterend 插入h1在它的最後一個孩子之後。
h1.inserAdjacentElement('beforeend', h2)
// 直接移除元素
const img = document.querySelector('img')
img.remove()
// 移除子元素
const firstLi = document.querySelector('li')
firstLi.removeChild()
const ul = firstLi.parentElement
ul.removeChild(firstLi)
// 選定移除
const b = document.querySelector('b')
b.parentElement.removeChild(b)




