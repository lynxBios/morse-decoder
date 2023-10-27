const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letters = [];
  for (let i = 0; i < expr.length; i += 10) {
    let letterCode = expr.substring(i, i + 10);
    if (letterCode === '**********') {
      letters.push(' ');
    } else {
      let morseCode = '';
      for (let j = 0; j < 10; j += 2) {
        let code = letterCode.substring(j, j + 2);
        if (code === '10') {
          morseCode += '.';
        } else if (code === '11') {
          morseCode += '-';
        }
      }
      let letter = MORSE_TABLE[morseCode];
      letters.push(letter);
    }
  }
  return letters.join('');
}

module.exports = {
    decode
}