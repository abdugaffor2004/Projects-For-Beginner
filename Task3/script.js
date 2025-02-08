document.querySelector('.month').textContent = moment().format('MMMM YYYY');
const selectElement = document.querySelector('.operetion');
const nameProduct = document.querySelector('.name-product');
const cost = document.querySelector('.cost');
let value = 0;
let income = 0;
let expenses = 0;

//Функция изменения обводки полей ввода и выпадающего окна
selectElement.addEventListener('change', function changeBorder() {
    if (selectElement.value !== "1") {
        selectElement.classList.add('changed');
        selectElement.classList.remove('default');
        nameProduct.classList.add('changed');
        nameProduct.classList.remove('default');
        cost.classList.add('changed');
        cost.classList.remove('default');
    } else {
        selectElement.classList.add('default');
        selectElement.classList.remove('changed');
        nameProduct.classList.add('default');
        nameProduct.classList.remove('changed');
        cost.classList.add('default');
        cost.classList.remove('changed');
    }
});

//Функция изменения глобальной переменной в хедере
function totalValueChange(value){
    if(value>=0)
        document.querySelector('.total-value').textContent = "+ " + value.toFixed(2);
    else
        document.querySelector('.total-value').textContent = "- " + Math.abs(value).toFixed(2);
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
    newDiv.appendChild(tableText);
    newDiv.appendChild(blueText);
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
    newDiv.appendChild(tableText);
    newDiv.appendChild(procent);
    newDiv.appendChild(redText);
    document.querySelector('.table-expenses').appendChild(newDiv);
}

let styleExpenses = true;
let styleIncome = true;

//функция в которой происходят все изменеия при нажатии enter
nameProduct.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (selectElement.value == "1") {
            income += parseInt(cost.value);
            document.querySelector('.income-count').textContent = "+ " + income.toFixed(2);
            value += parseInt(cost.value);
            addNewIncome(styleIncome);
            styleIncome = !styleIncome;
        } else {
            expenses += parseInt(cost.value);
            document.querySelector('.expenses-count').textContent = "- " + expenses.toFixed(2);
            value -= parseInt(cost.value);
            addNewExpenses(styleExpenses);
            styleExpenses = !styleExpenses;
        }
        totalValueChange(value);

        const costExpenses = document.getElementsByClassName('red-text');
        const procent = document.getElementsByClassName('procent');
        for (let i = 0; i < procent.length; i++) {
            procent[i].textContent = costExpenses[i].textContent;//потом доделаю проценты
        }
    }
});
