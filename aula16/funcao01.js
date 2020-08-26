function parImpar(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

function parimpar2(n) {
    return n % 2 == 0 ? 'par' : 'impar'
}

console.log(parImpar(2))
console.log(parImpar(3))

console.log(parimpar2(2))
console.log(parimpar2(3))