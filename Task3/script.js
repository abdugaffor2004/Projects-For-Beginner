//Сделал без библиотеки как ты и говорил. Я просто не знал что такие функции есть
const date = new Date();
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const monthName = months[date.getMonth()];
const year = date.getFullYear();
document.querySelector('.month').textContent = monthName + " " + year;
const selectElement = document.querySelector('.operetion');
const nameProduct = document.querySelector('.name-product');
const cost = document.querySelector('.cost');
const button = document.querySelector('.enter-button');
let value = 0;
let income = 0;
let expenses = 0;
//Функция изменения обводки полей ввода и выпадающего окна

//Написал покроче но не через дата атрибуты, тк не понял это вроде параметры блока и че с ними делать чтобы компано написать непонятно
//наверное можно было еще через общий класс это сделать и достать все объекты класса и так же через мап сделать 
let masForChangeBorder = [selectElement,nameProduct,cost]
selectElement.addEventListener('change', () => {
    if(selectElement.value !== "1") {
        masForChangeBorder.forEach( el => {el.classList.add('changed'); el.classList.remove('default')});
        button.classList.add('enter-button-changed');
        button.classList.remove('enter-button-default');
    }
    else{
        masForChangeBorder.forEach( el => {el.classList.remove('changed'); el.classList.add('default')});
        button.classList.remove('enter-button-changed');
        button.classList.add('enter-button-default');
    }
});

//Функция изменения глобальной переменной в хедере
function totalValueChange(){
    (value >=0 ? document.querySelector('.total-value').textContent = "+ " + value.toFixed(2) : 
    document.querySelector('.total-value').textContent = "- " + Math.abs(value).toFixed(2))
}

//Фукнция добовления нового блока дохода
function addNewIncome(style) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(style ? 'new-div' : 'new-div-gray');

    const tableText = document.createElement('p');
    tableText.classList.add('table-text');
    tableText.textContent = nameProduct.value;

    const blueText = document.createElement('p');
    blueText.classList.add('blue-text');
    blueText.textContent = "+ " + parseInt(cost.value).toFixed(2);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-income');
    deleteButton.onclick = () =>{
        let newDiv = deleteButton.closest('.new-div')
        let newDivGray = deleteButton.closest('.new-div-gray')
        value -= math.evaluate(blueText.textContent)
        income -= math.evaluate(blueText.textContent)  
        if (newDiv) {
            newDiv.remove();
        }
        if (newDivGray) {
            newDivGray.remove();
        }
        totalValueChange();
        let procent = document.getElementsByClassName('procent');
        document.querySelector('.income-count').textContent = "+" + income.toFixed(2);
        if(math.evaluate(document.querySelector('.income-count').textContent)!== 0 ){
            for (let i = 0; i < procent.length; i++) {
                procent[i].textContent = (-math.evaluate(document.getElementsByClassName('red-text')[i].textContent)/
                math.evaluate(document.querySelector('.income-count').textContent)*100).toFixed(0) + "%";
            }
            document.querySelector('h2').textContent = (-math.evaluate(document.querySelector('.expenses-count').textContent)
            /math.evaluate(document.querySelector('.income-count').textContent)*100).toFixed(0) + "%";
        }
        else{
            for (let i = 0; i < procent.length; i++) {
                procent[i].textContent = "---";
            }
            document.querySelector('h2').textContent = "---";
        }
    }


    const buttonImage = document.createElement('img');
    buttonImage.src = 'img/free-icon-recycle-bin-3156999.png';
    buttonImage.classList.add('button-image');
    deleteButton.appendChild(buttonImage);

    const procentAndText = document.createElement('div');
    procentAndText.classList.add('procent-and-text');

    procentAndText.appendChild(blueText);
    procentAndText.appendChild(deleteButton);
    newDiv.appendChild(tableText);
    newDiv.appendChild(procentAndText);
    document.querySelector('.table-income').appendChild(newDiv);
}

//Фукнция добовления нового блока расходов
function addNewExpenses(style) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(style ? 'new-div' : 'new-div-gray');

    const tableText = document.createElement('p');
    tableText.classList.add('table-text');
    tableText.textContent = nameProduct.value;

    const procent = document.createElement('p');
    procent.classList.add('procent');
    procent.textContent = "---";

    const redText = document.createElement('p');
    redText.classList.add('red-text');
    redText.textContent = "- " + parseInt(cost.value).toFixed(2);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-expenses');
    deleteButton.onclick = () =>{
        let newDiv = deleteButton.closest('.new-div')
        let newDivGray = deleteButton.closest('.new-div-gray')
        value -= math.evaluate(redText.textContent)
        expenses += math.evaluate(redText.textContent)  
        if (newDiv) {
            newDiv.remove();
        }
        if (newDivGray) {
            newDivGray.remove();
        }
        totalValueChange();
        let procent = document.getElementsByClassName('procent');
        document.querySelector('.expenses-count').textContent = "-" + expenses.toFixed(2);
        if(math.evaluate(document.querySelector('.income-count').textContent)!== 0 ){
            for (let i = 0; i < procent.length; i++) {
                procent[i].textContent = (-math.evaluate(document.getElementsByClassName('red-text')[i].textContent)/
                math.evaluate(document.querySelector('.income-count').textContent)*100).toFixed(0) + "%";
            }
            document.querySelector('h2').textContent = (-math.evaluate(document.querySelector('.expenses-count').textContent)
            /math.evaluate(document.querySelector('.income-count').textContent)*100).toFixed(0) + "%";
        }
        else{
            for (let i = 0; i < procent.length; i++) {
                procent[i].textContent = "---";
            }
            document.querySelector('h2').textContent = "---";
        }
    }

    const buttonImage = document.createElement('img');
    buttonImage.src = 'img/free-icon-recycle-bin-3156999.png';
    buttonImage.classList.add('button-image');
    deleteButton.appendChild(buttonImage);

    const procentAndText = document.createElement('div');
    procentAndText.classList.add('procent-and-text');
    newDiv.appendChild(tableText);
    procentAndText.appendChild(procent);
    procentAndText.appendChild(deleteButton);
    procentAndText.appendChild(redText);
    newDiv.appendChild(procentAndText);
    document.querySelector('.table-expenses').appendChild(newDiv);
}

let styleExpenses = true;
let styleIncome = true;
function enterData(){
    if(cost.value !=='' && math.evaluate(cost.value)>=0){
        if (selectElement.value == "1") {
            income += parseInt(cost.value);
            document.querySelector('.income-count').textContent = "+" + income.toFixed(2);
            value += parseInt(cost.value);
            addNewIncome(styleIncome);
            styleIncome = !styleIncome;
        } else {
            expenses += parseInt(cost.value);
            document.querySelector('.expenses-count').textContent = "-" + expenses.toFixed(2);
            value -= parseInt(cost.value);
            addNewExpenses(styleExpenses);
            styleExpenses = !styleExpenses;
        }
        totalValueChange();
        let procent = document.getElementsByClassName('procent');
        if(math.evaluate(document.querySelector('.income-count').textContent)!== 0 ){
            for (let i = 0; i < procent.length; i++) {
                procent[i].textContent = (-math.evaluate(document.getElementsByClassName('red-text')[i].textContent)/
                math.evaluate(document.querySelector('.income-count').textContent)*100).toFixed(0) + "%";
            }
            document.querySelector('h2').textContent = (-math.evaluate(document.querySelector('.expenses-count').textContent)
            /math.evaluate(document.querySelector('.income-count').textContent)*100).toFixed(0) + "%";
        }
        else{
            procent[i].textContent = "---";
            document.querySelector('h2').textContent = "---";
        }
    }
}
//функция в которой происходят все изменеия при нажатии enter
nameProduct.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        enterData()
    }
});

function deleteDiv(button){
    let newDiv = button.closest('.new-div')
    if (newDiv) {
        newDiv.remove();
    }
}