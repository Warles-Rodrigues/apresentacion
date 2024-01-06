/*
    FILTER
        -Cria um novo array, a partir do array percorrido (array original)
        -Cria um novo array APENAS com elementos filtrados
        -Aceita 3 parâmetros 
            -Item do Array
            -Index
            -Array Completo
            
            return true -> Item atual passa pro novo array
            return flase -> Item atual NÃO passa pro novo array 
*/

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter(number => {
    if (number > 10) { return true } else {
        return false
    }
})
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


const valueFilter = companies.filter(value=>{
    if(value.marketValue <200 && value.foundedOn <1990){
        return true
    }else return false
})
console.log(valueFilter)

