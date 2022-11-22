// комментарий 1
document.calc = { 
    outputControl: undefined,
    display: '', //5
    value: 0, //5
    value2: '', //5
    method: undefined // undefined
}

function handleFinally() {
    switch (document.calc.method) {
        case 'plus':
            const resultPlus = document.calc.value + parseInt(document.calc.value2);
            document.calc.display = resultPlus.toString();
            document.calc.value = resultPlus;
            document.calc.value2 = ''
            break;
        case 'minus':
            const resultMinus = document.calc.value - parseInt(document.calc.value2);
            document.calc.display = resultMinus.toString();
            document.calc.value = resultMinus;
            document.calc.value2 = ''
            break;
        case 'umnogenie':
            const resultUmnogenie = document.calc.value * parseInt(document.calc.value2);
            document.calc.display = resultUmnogenie.toString();
            document.calc.value = resultUmnogenie;
            document.calc.value2 = ''
            break;
        case 'delenie':
            const resultDelenie = document.calc.value / parseInt(document.calc.value2);
            document.calc.display = resultDelenie.toString();
            document.calc.value = resultDelenie;
            document.calc.value2 = ''
            break;
    }

    document.calc.method = undefined;
}

function fnBtnNumber(event) {
    if (document.calc.method === undefined) {
        document.calc.display = document.calc.display + event.target.dataset.value;
        document.calc.value = parseInt(document.calc.display)
    } else {
        document.calc.display = document.calc.display + event.target.dataset.value;
        document.calc.value2 = document.calc.value2 + event.target.dataset.value
    }

    document.calc.outputControl.value = document.calc.display;
}

function handleRemoval(){
    const {calc} = document;
    // нечего не введено
    // введено число и метод


    if (calc.value === 0 && calc.method === undefined){
        return;
    }
    // введено 1 число
    if (calc.value !== 0 && calc.method === undefined){
        calc.display=calc.display.substring(0,calc.display.length-1);
        calc.value=parseInt(calc.display);
        if (isNaN(calc.value)){
            calc.value = 0;
        }
        if (calc.display === ''){
            calc.display = '0'
        }
    }
    // введено число и метод
    if (calc.value !== 0 && calc.method !== undefined){
        calc.method = undefined;
        calc.display=calc.display.substring(0,calc.display.length-1)
    }
    // введено число и метод и второе число
    if (calc.value !== 0 && calc.method !== undefined && calc.value2 !== ''){
        calc.display=calc.display.substring(0,calc.display.length-1);
        calc.value2=calc.value2.substring(0,calc.value2.length-1);
    }


}
function handleRemovalAll(){
    const {calc} = document;
   calc.display = '0';
   calc.value = 0;
   calc.value2 = '0';
   calc.method = undefined;

}
/**
 * @description  обработчик математических функций
 * @param event
 */
function fnMath(event) {
    const method = event.currentTarget.dataset.value; // plus || minus

    switch (method) {
        case 'plus':
            document.calc.display = document.calc.display + '+';
            document.calc.method = method;
            break;
        case 'minus':
            document.calc.display = document.calc.display + '-';
            document.calc.method = method;
            break;
        case 'umnogenie':
            document.calc.display = document.calc.display + '*';
            document.calc.method = method;
        break;
        case 'delenie':
            document.calc.display = document.calc.display + '/';
            document.calc.method = method;
        break;
        case 'finally':
            handleFinally()
        break;
        case 'removalAll':
            handleRemovalAll()
        break;
        case 'removal':
            handleRemoval()
         break;
    }

    document.calc.outputControl.value = document.calc.display;
}


function ready() {
    var output = document.querySelector('[data-id="output"]');
    if (output) {
        document.calc.outputControl=output
       }
   // присваивание переменной для кнопок от 0-9
    var btnList = document.querySelectorAll('.btn-number')

    btnList.forEach((element, index) => {
        element?.addEventListener("click", fnBtnNumber);
    })

    var btnMathList = document.querySelectorAll('.btn-math')

    btnMathList.forEach((element, index) => {
        element?.addEventListener("click", fnMath);    
    })

  }


document.addEventListener("DOMContentLoaded", ready);


