const form =document.querySelector("#shelterForm")
const input = document.querySelector("#catName")
const list = document.querySelector("#cats")
form.addEventListener("submit", function(e){
    e.preventDefault()
    // 收集輸入框內的輸入的值value
    const catName = input.value
    // 創建一個newlI空殼 接收輸入的值
    const newLI = document.createElement("LI");
    newLI.innerText = catName
    // 創建一個li輸入客戶輸入的值
    list.append(newLI)
    input.value = "";
})
// ===============html============
<form action="/shelter" id="shelterForm">
<input type="text" id="catName">
<button>送出</button>
</form>
<h2>Available Cats</h2>
<ul id="cats"></ul>
