var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (12 > hora) {
    console.log('Bom dia!')
} else if (18 >= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}