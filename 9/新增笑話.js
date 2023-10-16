// 使用Promise 搜尋一個笑話製造按鈕 按下去隨機跑出一個笑話
const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')
// asyns 函數 才能接受Promise互聯網
const addNewJoke = async () => {
    // 等待接受getDadJoke互聯網笑話
    const jokeText = await getDadJoke()
    // 新增一個LI
    const newLI = document.createElement('LI')
    // 新增的LI 新增jokeText內容
    newLI.append(jokeText)
    
    jokes.append(newLI)
}
const getDadJoke = async () => {
    // try防止互聯網壞掉
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke
    } catch(e){
        // 壞掉跟看到的人說sorry
        return "NO JOKES AVAILABLE! SORRY :("
    }

}
// 新增點擊 套用內容
button.addEventListener('click', addNewJoke)

// =============================html===================
<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
<h1>Click to get new jokes!</h1>
<button>Click me!</button>
<ul id="jokes"></ul>