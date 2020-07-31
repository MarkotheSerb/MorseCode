var input = document.querySelector('.input');
var button = document.querySelector('.button');
var output = document.querySelector('.output');

button.addEventListener('click', function() {

    var inputValue = input.value;
    var morseCodeText = ' ';

    var i;

    for (i = 0; i < inputValue.length; i++) {
        if (inputValue[i] == 'a') {
            morseCodeText += '.- ';
        } else if (inputValue[i] == 'b') {
            morseCodeText += '-... ';
        } else if (inputValue[i] == 'c') {
            morseCodeText += '-.-. ';
        } else if (inputValue[i] == 'd') {
            morseCodeText += '-.. ';
        } else if (inputValue[i] == 'e') {
            morseCodeText += '. ';
        } else if (inputValue[i] == 'f') {
            morseCodeText += '..-. ';
        } else if (inputValue[i] == 'g') {
            morseCodeText += '--. ';
        } else if (inputValue[i] == 'h') {
            morseCodeText += '.... ';
        } else if (inputValue[i] == 'i') {
            morseCodeText += '.. ';
        } else if (inputValue[i] == 'j') {
            morseCodeText += '.--- ';
        } else if (inputValue[i] == 'k') {
            morseCodeText += '-.- ';
        } else if (inputValue[i] == 'l') {
            morseCodeText += '.-.. ';
        } else if (inputValue[i] == 'm') {
            morseCodeText += '-- ';
        } else if (inputValue[i] == 'n') {
            morseCodeText += '-. ';
        } else if (inputValue[i] == 'o') {
            morseCodeText += '--- ';
        } else if (inputValue[i] == 'p') {
            morseCodeText += '.--. ';
        } else if (inputValue[i] == 'q') {
            morseCodeText += '--.- ';
        } else if (inputValue[i] == 'r') {
            morseCodeText += '.-. ';
        } else if (inputValue[i] == 's') {
            morseCodeText += '... ';
        } else if (inputValue[i] == 't') {
            morseCodeText += '- ';
        } else if (inputValue[i] == 'u') {
            morseCodeText += '..- ';
        } else if (inputValue[i] == 'v') {
            morseCodeText += '...- ';
        } else if (inputValue[i] == 'w') {
            morseCodeText += '.-- ';
        } else if (inputValue[i] == 'x') {
            morseCodeText += '-..- ';
        } else if (inputValue[i] == 'y') {
            morseCodeText += '-.-- ';
        } else if (inputValue[i] == 'z') {
            morseCodeText += '--.. ';
        } else if (inputValue[i] == '1') {
            morseCodeText += '.---- ';
        } else if (inputValue[i] == '2') {
            morseCodeText += '..--- ';
        } else if (inputValue[i] == '3') {
            morseCodeText += '...-- ';
        } else if (inputValue[i] == '4') {
            morseCodeText += '....- ';
        } else if (inputValue[i] == '5') {
            morseCodeText += '..... ';
        } else if (inputValue[i] == '6') {
            morseCodeText += '-.... ';
        } else if (inputValue[i] == '7') {
            morseCodeText += '--... ';
        } else if (inputValue[i] == '8') {
            morseCodeText += '---.. ';
        } else if (inputValue[i] == '9') {
            morseCodeText += '----. ';
        } else if (inputValue[i] == ' ') {
            morseCodeText += '  ';
        }
    }

    output.value = morseCodeText;


});











