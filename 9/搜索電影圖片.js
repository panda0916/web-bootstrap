// 找到form id
const form = document.querySelector('#searchForm')
// 新增事件 submit 提交, async函數
form.addEventListener('submit', async function (e) {
    // 防止預設
    e.preventDefault()
    // 找到網址里 元素數值
    const searchTerm = form.elements.query.value
    // 把蒐集到數值 變成常數
    const config =  { params: {q: searchTerm } }
    // 等等網址找到的數值 帶入 變成常數
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    // 製作圖像 數據
    makeImages(res.data)
    // form清空內容
    form.elements.query.value = '';
})
// 製作一個按鈕函數
const makeImages = (shows) => {
// 製作result變數 代入shows值
    for (let result of shows) {
        // result.show.image 如果獲得照片
        if(result.show.image){
        // 創建一個元素圖片變成常數img
        const img = document.createElement('IMG')
        // img的網址 =result.show.image.medium
        img.src = result.show.image.medium
        // 附加在html body 裡面 圖片
        document.body.append(img)
        }
    }
}
// ================html======================
// axios.get 要用的網址
<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>

<h1>TV Show Search</h1>
<form id="searchForm">
    <input type="text" placeholder="TV Show Title" name="query">
    <button>Search</button>
</form>