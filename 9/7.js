// 如何訪問
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
// 訪問用法
const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;
// 更改訪問內容
restaurant.zipcode = '11200';
restaurant['zipcode'] = '11200';
// 新增問內容
restaurant.abc = '11111';
restaurant['abc'] = '1111';
// 如何訪問其中一行
const comments =[
    {username: 'Tammy' , text: 'lololo' , votes: 9 },
    {username: 'Fishboy' , text: 'glub glub' , votes: 1235 }
]
// 輸入索引
comments[1] 會跑出 username: 'Fishboy' , text: 'glub glub' , votes: 1235
comments[1].text 會跑出 'glub glub'