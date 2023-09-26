const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; 1 < 10; i++) {
    const newImg = document.createElement('img')
    newImg.src = `${baseURL}${i}.png`
    container.appendChild(newImg)
}
