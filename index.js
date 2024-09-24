const display = document.getElementById('display');

function adjustFontSize() {
    const maxFontSize = 5; // rem
    const minFontSize = 2; // rem
    const maxLength = 10; // characters before reducing font size

    const currentLength = display.value.length;
    let newFontSize = maxFontSize;

    if (currentLength > maxLength) {
        newFontSize = Math.max(minFontSize, maxFontSize - (currentLength - maxLength) * 0.3);
    }

    display.style.fontSize = newFontSize + "rem";
}

function appendToDisplay(input) {
    display.value += input;
    adjustFontSize();
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
    adjustFontSize();
}

function clearDisplay() {
    display.value = '';
    adjustFontSize();
}