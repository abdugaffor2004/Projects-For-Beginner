var display = document.querySelector("#display");
var result = document.querySelector("#result");
result.value += "=";
const operation = ["*","/","%","+","-"];
const opforswap = ["*","/","%"];

function show(char){
    if(display.value == "" && operation.includes(char)){
    }
    else if(display.value == ""){
        display.value += char
    }
    else{
        if (operation.includes(char) && operation.includes(display.value[display.value.length-1])) {
            display.value = display.value.slice(0, display.value.length - 1) + char;
        }
        else{
            display.value += char;
        }
    }
    if(!operation.includes(char))
        result.value = "=" + math.evaluate(display.value).toFixed(2)
}

function findDot(){
    let inexOp = 0;
    let countDot = 0;
    for(let i = 0; i < display.value.length; i++){
        if(operation.includes(display.value[i]))
            inexOp = i;
    }
    for(let i = inexOp; i < display.value.length; i++){
        if(display.value[i] == ".")
            countDot++;
    }
    return !countDot==0;
}

function dot(){
    if(display.value == "")
        display.value += "0.";
    else{
        if (operation.includes(display.value[display.value.length-1])) {
            display.value += "0.";
        }
        else if(!findDot(display.value)){
            display.value += ".";
        }
    }
    result.value = "=" + math.evaluate(display.value).toFixed(2)
}

function backspace(){
    if(display.value !== ""){
        display.value = display.value.slice(0, display.value.length - 1);
    }
    result.value = "=" + math.evaluate(display.value).toFixed(2)
}

function clean(){
    display.value = "";
    result.value = ""
}
function calculate(){
    display.value = math.evaluate(display.value).toFixed(2)
}
function swap(){
    let indexOp = 0;
    let countOp = 0;
    if(display.value == ""){
        display.value+= "-";
    }
    else{
        for(let i = 0; i < display.value.length; i++){
            if(opforswap.includes(display.value[i]))
                countOp++; 
        }
        if(countOp == 0){
            display.value = -math.evaluate(display.value)
        }
        else{
            if(!opforswap.includes(display.value[display.value.length-1])){
                for(let i = 0; i < display.value.length; i++){
                    if(opforswap.includes(display.value[i]))
                        indexOp = i; 
                }
                display.value = display.value.slice(0, indexOp+1) + math.evaluate("-"+display.value.slice(indexOp+1, display.value.length))
            }
        }
    }
    if(!opforswap.includes(display.value[display.value.length-1])){
        result.value = "=" + math.evaluate(display.value).toFixed(2)
    }
}
