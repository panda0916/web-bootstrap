document.querySelector('button').addEventListener('click', function(evt){
    alert('click')
})
const input = document.querySelector('input')
input.addEventListener('keydown', function(e){
    console.log(e)
})
input.addEventListener('keyup', function(){
    console.log("KEYUP")
})