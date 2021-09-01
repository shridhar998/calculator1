let number = document.getElementById('number');
buttons = document.querySelectorAll('button');
let numval = '';
for (item of buttons) {

    item.addEventListener('click', (b) => {

        buttontext = b.target.innerText;
        if (buttontext == '=') {
            number.value = eval(numval);


        } else if (buttontext == 'C') {
            numval = "";
            number.value = numval;
        } else if (buttontext == 'X') {
            numval = number.value;
            numval = numval.substring(0, numval.length - 1);
            number.value = numval;
        } else {
            numval += buttontext;
            number.value = numval;
        }
    })

}