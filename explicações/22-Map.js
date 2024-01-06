/*
    MAP => Mapear o nosso array.
        -Cria um novo array, a partir do array percorrido (array original)
        -Cria um novo array, com a mesma quantidade de itens do array original
        -Aceita 3 parâmetros
            -Item do Array
            -Index
            -Array Completo
*/
const number = [1, 2, 3, 4, 5, 6, 7]
const double = number.map((item) => item * 2) //SEMPRE USAR O RETURN

console.log(number)
console.log(double)


const list = [
    {name: 'rodolfo' , vip: true},
    {name: 'maria' , vip: false},
    {name: 'joão' , vip: true},
    {name: 'Bruno' , vip: true},
    {name: 'Carla' , vip: false},
    {name: 'natalia' , vip: true},
    {name: 'julio' , vip: false}
]

const newList = list.map(item =>{
    const newUsers={
        name:item.name,
        braceletColor: item.vip ? 'black' : 'green'
    }
    return newUsers
})
console.log(newList)

const students =[
    {name: 'Rodolfo', testGade:7 },
    {name: 'Maria', testGade:5 },
    {name: 'João', testGade:8 },
    {name: 'Bruno', testGade:9 },
    {name: 'Carla', testGade:3 },
    {name: 'Natalia', testGade:2 },
    {name: 'Julio', testGade:10 },
]

const studentsAtt = students.map(user=>{
    const studentsAproved = {
        Name: user.name,
        Aproved: user.testGade >=5 ? 'aprovado' : 'reprovado'
    }
    return studentsAproved
})
console.log(studentsAtt)