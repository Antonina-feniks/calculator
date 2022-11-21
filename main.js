// комментарий 1
document.calc = { 
    outputControl: undefined,
    output: 0,
    value: 0,
    method: undefined
}
// 
function fnBtn(event) {
    if (document.calc.output == 0){
        document.calc.output = event.target.dataset.value;
        document.calc.value = parseInt(event.target.dataset.value)
    } else {
        document.calc.output = document.calc.output + event.target.dataset.value;
        document.calc.value = parseInt(event.target.dataset.value)
    }
   

    document.calc.outputControl.value = document.calc.output;
}
//    
function fnMath(event) {
    const method = event.currentTarget.dataset.value; // plus || minus
    
    
    
    switch (method) {
        case 'plus':
            document.calc.output = document.calc.output + '+';
            document.calc.outputControl.value = document.calc.output;
            document.calc.method = method;
            break;
        case 'minus':
            document.calc.output = document.calc.output + '-';
            document.calc.outputControl.value = document.calc.output;
            document.calc.method = method;
            break;
        case 'finall': 
        document.calc.method = undefined;

        break;
    }
}


function ready() {
    var output = document.querySelector('[data-id="output"]');
    if (output) {
        document.calc.outputControl=output
       }
   // присваивание переменной для кнопок от 0-9
    var btnList = document.querySelectorAll('.btn-number')

    btnList.forEach((element, index) => {
        element?.addEventListener("click", fnBtn);    
    })

    var btnMathList = document.querySelectorAll('.btn-math')

    btnMathList.forEach((element, index) => {
        element?.addEventListener("click", fnMath);    
    })

  }


document.addEventListener("DOMContentLoaded", ready);


