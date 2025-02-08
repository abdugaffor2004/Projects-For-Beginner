document.querySelector('.month').textContent = moment().format('MMMM YYYY')
const selectElement = document.querySelector('.operetion');
// const selectElement = document.getElementsByClassName('.operetion')[0];
// const selectElement = document.getElementById('#operetion');
const nameProduct = document.querySelector('.name-product');
const cost = document.querySelector('.cost');
let value = 0;
let income = 0;
let expenses = 0;
selectElement.addEventListener('change',function changeBorder() {
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
})
function totalValueChange(value){
    if(value>=0)
        document.querySelector('.total-value').textContent = "+ " + value.toFixed(2);
    else
        document.querySelector('.total-value').textContent = "- " + Math.abs(value).toFixed(2);

}
nameProduct.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if(selectElement.value == "1"){
            income += parseInt(cost.value);
            document.querySelector('.income-count').textContent = "+ " + income.toFixed(2);
            value += parseInt(cost.value);
        }
        else{
            expenses += parseInt(cost.value);
            document.querySelector('.expenses-count').textContent = "- " + expenses.toFixed(2);
            value -= parseInt(cost.value);
        }
        totalValueChange(value)
    }
});


