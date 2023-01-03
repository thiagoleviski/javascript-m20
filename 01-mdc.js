let mdc = (a, b) => {
    while (b != 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}

console.log(mdc(5,15))
console.log(mdc(2,2022))
console.log(mdc(42,49))
console.log(mdc(5,3))
console.log(mdc(2022,2))