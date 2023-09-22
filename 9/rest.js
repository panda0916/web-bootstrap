
// ...=把其餘陣列加進去不像原本(nums)只接收一個值
function sum(...nums){
    return nums.reduce((total, el) => total + el)
}