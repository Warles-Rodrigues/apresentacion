const list = document.querySelector("ul")
const buttonShowAll = document.querySelector('.showAll')
const buttonMapAll = document.querySelector('.mapAll')
const buttonsumAll = document.querySelector('.sumAll')
const buttonfilterAll = document.querySelector('.filterAll')

const formatCurrency = (value) => value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });


const showAllClick = (productsArray) => {
    let myLi = ''
    productsArray.forEach(item => {

        myLi += `
            <li>
                    <img src=${item.src} alt=${item.name}>
                    <p>${item.name} </p>
                    <p class="value"> ${formatCurrency(item.price)} </p>
            </li>
            `
        list.innerHTML = myLi
    })

}
const mapAllClick = () => {
    const newList = menuOptions.map(item => ({
        ...item,
        price: item.price * 0.9

    }))
    showAllClick(newList)
}

const sumAllClick = () => {
    const sum = menuOptions.reduce((acc, item) => {
        return acc + item.price
    }, 0)

    list.innerHTML = ` 
        <li>
                <p>A Soma De Todos os Itens Seria De : ${formatCurrency(sum)} </p>
        </li>
        `
}
const filterAllClick = () =>{
    const filteroptions = menuOptions.filter(item =>{
            
        if(item.vegan ===true){
            return true}else{return false}
            
    })
     
    showAllClick(filteroptions)
}











buttonShowAll.addEventListener('click', () => showAllClick(menuOptions))
buttonMapAll.addEventListener('click', mapAllClick)
buttonsumAll.addEventListener('click', sumAllClick)
buttonfilterAll.addEventListener('click',filterAllClick)








