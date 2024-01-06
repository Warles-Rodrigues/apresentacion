const companies = [
    {name: 'Samsung',marketValue: 50,CEO: 'Kim Hyun Suk',foundedOn: 1938,},
    {name: 'Microsoft',marketValue: 415,CEO: 'Satya Nadella',foundedOn: 1975,},
    {name: 'Intel',marketValue: 117,CEO: 'Brian Krzanich',foundedOn: 1968,},
    {name: 'Facebook',marketValue: 383,CEO: 'Mark Zukerberg',foundedOn: 2004,},
    {name: 'Spotify',marketValue: 30,CEO: 'Daniel Ek',foundedOn: 2006,},
    {name: 'Aplle',marketValue: 845,CEO: 'Tim cook',foundedOn: 1976,},
]


// Adicionar 10% de valor de mercado a todas as companhias -> MAP
// Filtrar somente companhias fundadas abaixo de 1990 -> FILTER
// Somar o valor de mercado das restantes -> REDUCE



const addMarketValue = companies.map((item)=>{
      item.marketValue  = item.marketValue + item.marketValue / 10
    return  item
  
}).filter(company => company.foundedOn < 1990).reduce((acc,company)=>{
    return acc + company.marketValue
},0)

//console.log(addMarketValue)   <--


//Subtrair 10% de valor de mercado a todas as companhias
//Filtrar somente companhias fundadas depois de 1980
//Somar o valor de mercado das restantes




const sumMerketValue = companies.map(company=>{
    company.marketValue = company.marketValue - company.marketValue / 10
    return company
}).filter(company => company.foundedOn > 1980).reduce((acc , company)=>{
    return acc + company.marketValue
},0)
console.log(sumMerketValue)
