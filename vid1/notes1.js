// Hopefully this time it will work
let firms = ['HS','PT','SBLC']
let amount = [10,13,20]


let greeting = (name) => {
    return `Merhaba, ${name}`
}
// greeting'e bir name takma adında bir değişken tanımlandığında
// return ile içindekileri çeviri










/* module.exports = {
    firms,
    amount
}
// notes1'in içindeki firms ve amount nesnelerini
//başka bir dosya ile kullanımını sağlar */

module.exports = {
    firmalar: firms,
    tutar: amount,
    selamlama: greeting
}
// bu şekilde firms'i dışarıya çıkartırken firms => firmalar olarak çıkıyor