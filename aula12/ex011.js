var idade = 19
console.log(`Você tem ${idade} anos.`)
if (16 > idade) {
    console.log('Não vota!')
} else if (18 > idade || 65 < idade) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatorio')
}