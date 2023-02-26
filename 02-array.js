let array = [1,5,4,9,7,8,36,4,9,984,4,1,3519,6,84,6,97974,981,98484,498,849,489,48]
let maior = array.indexOf(Math.max(...array));
let menor = array.indexOf(Math.min(...array));

console.log(maior)
console.log(menor)

module.exports = {maior,menor}