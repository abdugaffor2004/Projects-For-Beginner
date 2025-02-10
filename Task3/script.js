const date = new Date();
let options = {
  year: "numeric",
  month: "long",
};
console.log(new Intl.DateTimeFormat("de-DE", options).format(date));
document.querySelector('.month').textContent = new Intl.DateTimeFormat("de-DE", options).format(date)

const selectElement = document.querySelector('.operetion');
const nameProduct = document.querySelector('.name-product');
const cost = document.querySelector('.cost');
const button = document.querySelector('.enter-button');
let value = 0;
let income = 0;
let expenses = 0;


let masForChangeBorder = [selectElement,nameProduct,cost]
selectElement.addEventListener('change', () => {
    if(selectElement.value !== "1") {
        masForChangeBorder.forEach( el => {el.setAttribute('data-border', 'red')});
        button.setAttribute('data-background', 'red');
    }
    else{
        masForChangeBorder.forEach( el => {el.setAttribute('data-border', 'blue')});
        button.setAttribute('data-background', 'blue');
    }
});

function changeProcent(){
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
        for (let i = 0; i < procent.length; i++) {
            procent[i].textContent = "---";
        }
        document.querySelector('h2').textContent = "---";
    }
}

function totalValueChange(){
    (value >=0 ? document.querySelector('.total-value').textContent = "+ " + value.toFixed(2) : 
    document.querySelector('.total-value').textContent = "- " + Math.abs(value).toFixed(2))
}

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
        document.querySelector('.income-count').textContent = "+" + income.toFixed(2);
        changeProcent()
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
        document.querySelector('.expenses-count').textContent = "-" + expenses.toFixed(2);
       changeProcent()
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
    if(cost.value !=='' && math.evaluate(cost.value)){
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
        changeProcent()
    }
}

nameProduct.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        enterData()
    }
});