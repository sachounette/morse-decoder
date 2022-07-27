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
 const	re =/(.{10}|.)/g;
 let myarr = expr.match(re);
 const zeros = /00/gi;
 const dash = /11/gi;
 const dot = /10/g;
 let arrWithoutPadding = myarr.map(el => el.replace(zeros, ''));
 let arrDots = arrWithoutPadding.map(el => el.replace((dash), '-'));
 arrDots = arrDots.map(el => el.replace((dot), '.'));
 const undefinedPart = /undefined/g;
 let newString = '';
 let i = arrDots.map(el => newString += MORSE_TABLE[el]);
 return (i[i.length-1].replace(undefinedPart, ' '));
}

module.exports = {
    decode
}