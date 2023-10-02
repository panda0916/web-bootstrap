const btn = document.querySelector('#v2')
// onclick滑鼠點擊顯示
btn.onclick = function(){
    console.log('123')
    console.log('44654')
}

function scream(){
    console.log('aaaaaa')
    console.log('別碰我')
}
// once true指觸發一次
btn.addEventListener('click', 函數,{once: true})
btn.addEventListener('click', 函數,{once: true})


// onmouseenter 滑鼠滑過去顯示
btn.onmouseenter = scream
// 不只在button按鈕點擊效果
document.querySelector('h1').onclick = () =>{
    alert('別碰我')
}
// addEventListener 新增事件 click單點擊 dblclick雙點擊
const btn3 = document.querySelector('#v3')
btn3.addEventListener('click', function(){
    alert('注意')
})

// html ----------------
<button onclick="alert('你點擊我')">點我</button>
<button id ="v2">點擊2</button>
<button id ="v3">點擊3</button>