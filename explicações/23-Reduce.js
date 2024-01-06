/*
    REDUCE
        -Retorna um valor ( pode ser um novo array, um objeto , string , number , etc.)
        -Aceita 4 parâmetros
            -acumulador
            -valor atural
            -index
            -array completo

*/

const list = [1, 2, 3, 4, 5];

const newList = list.reduce((acumulador, valorAtual) => {

    const multList = acumulador + valorAtual
    return multList
}, 0)
console.log(newList)

const companies = [
    { name: 'Samsung', 
    marketValue: 50, 
    CEO: 'Kim Hyun Suk', 
    foundedOn: 1938, 
    },

    {
        name: 'Microsoft',
        marketValue: 415,
        CEO: 'Satya Nadella',
        foundedOn: 1975,
    },

    {
        name: 'Intel',
        marketValue: 117,
        CEO: 'Brian Krzanich',
        foundedOn: 1968,
    },
    {
        name: 'Facebook',
        marketValue: 383,
        CEO: 'Mark Zukerberg',
        foundedOn: 2004,
    },
    {
        name: 'Spotify',
        marketValue: 30,
        CEO: 'Daniel Ek',
        foundedOn: 2006,
    },
    {
        name: 'Aplle',
        marketValue: 845,
        CEO: 'Tim cook',
        foundedOn: 1976,
    },
]
const marketValue =  companies.reduce((acc ,value) =>{
     
    const sumMarket = acc + value.marketValue
    return sumMarket
},0)
console.log(marketValue)


const cart =[
    {productName: 'Abobora' , pricePerKg:5, kg: 1},
    {productName: 'pepino' , pricePerKg:3.55, kg: 1.3},
    {productName: 'Limao' , pricePerKg:1.2, kg: 2},
    {productName: 'Abacate' , pricePerKg:5.4, kg: 1.67},
    {productName: 'Morango' , pricePerKg:11.9, kg: 3},
]

const sumCart = cart.reduce((acc,item)=>{
    const calc = item.pricePerKg * item.kg
    return acc + calc
},0)
console.log(` O valor da compra foi de : ${sumCart.toFixed(2)}`)
