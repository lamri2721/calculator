let outputscreen = document.getElementById("outputscreen");

function display(num){
    if (num === '.') {
        const current = outputscreen.value;
        const lastNumber = current.split(/[\+\-\*\/\%]/).pop();
        if (lastNumber.includes('.')) return;
        if (lastNumber === '') {
            outputscreen.value += '0.';
            return;
        }
    }
    outputscreen.value += num;
}

function calculate(){
    try {
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err){
       outputscreen.value="Error";
    }
}

function clear(){
    outputscreen.value = "";
}

function del(){
    outputscreen.value = outputscreen.value.slice(0, -1);
}
