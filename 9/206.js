// 輸入內容
let input = prompt('what would you like to do?')
// 創建一個字串列表
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
// 不等於'quit' 和 'q'繼續執行
while (input !== 'quit' && input !== 'q') {
    // 輸入'list'顯示****** 當分隔
    if (input === 'list') {
        console.log('**************')
        // 顯示出列表 
        for (let i = 0; i < todos.length; i++) {
            // 打印出 [i]列表索引 跟todos內容
            console.log(`${i}: ${todos[i]}`)
        }
        // 尾巴分隔
        console.log('**************')
        // 輸入'new'執行輸入內容插入陣列裡面
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is new todo?')
        // push = 推送到最後一列
        todos.push(newTodo);
        // 推送後顯示出內容
        console.log(`${newTodo} added to the list!`)
        // 輸入'delete'刪除內容
    } else if (input === 'delete') {
        // parseInt 拿來解析數字
        const index = parseInt(prompt('Ok, enter an index to delete!:'));
        // 如果Number.isNaN(index)=index等於數字  index要回傳NaN才可以NAN=不是數字 所以前面加! 要等於數字
        if (!Number.isNaN(index)) {
            // 刪除列表第幾個
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        }else{
            console.log('Unknown index')
        }
    }
    input = prompt('what would you like to do?')
}
console.log('OK QUIT THE APP')