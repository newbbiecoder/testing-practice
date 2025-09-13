function capitalise(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function reverseString(word) {
    return word.split('').reverse().join('');
}

const calculator = {
    add(num1, num2) {
        return num1 + num2;
    },
    sub(num1, num2) {
        return num1 - num2;
    },
    div(num1, num2) {
        return num1 / num2;
    },
    mult(num1, num2) {
        return num1 * num2;
    }
}

// idk why this this logic always turning out to be incorrect but I'm gonna keep it here to look into 
// for future
// let newShiftedLetterIndex = (alphabet.length - 1) - index;
//             while((alphabet.length - 1) >= index) {
//                 newShiftedLetterIndex--;
//                 index++
//             }
//             let shiftedLetter = alphabet[newShiftedLetterIndex];
//             decryptedString += shiftedLetter;

function caesarCipher(string, shift) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let decryptedString = '';

    let stringList = string.split('');

    for(let i = 0; i < stringList.length; i++) {
        let index = alphabet.indexOf(string[i].toLowerCase());

        let shiftedLetterIndex = index + shift;

        let isAlphabet = /^[A-Za-z]+$/.test(stringList[i])
        
        if(!isAlphabet){
            decryptedString += stringList[i];
            continue;
        }

        if(shiftedLetterIndex > alphabet.length - 1) {
            for(let arr in alphabet) {
                alphabet.push(alphabet[arr]);
            }
            let shiftedLetter = alphabet[shiftedLetterIndex];
            
            if(stringList[i] === stringList[i].toUpperCase()){
                decryptedString += shiftedLetter.toUpperCase();
            }
            else{
                decryptedString += shiftedLetter;
            }        
        }
        else {
            let shiftedLetter = alphabet[shiftedLetterIndex];
            if(stringList[i] === stringList[i].toUpperCase()){
                decryptedString += shiftedLetter.toUpperCase();
            }
            else{
                decryptedString += shiftedLetter;
            }  
        }
    }

    return decryptedString;
}

function analyze(arr) {
    const sum = arr.reduce((start, current) => start + current, 0);
    let average = sum / arr.length;

    const min = arr.reduce((min, curr) => Math.min(min, curr));
    const max = arr.reduce((max, curr) => Math.max(max, curr));
    const length = arr.length;

    return {
        "average": average,
        "min": min,
        "max": max,
        "length": length
    }
}

export {capitalise, reverseString, calculator, caesarCipher, analyze};