// Mengembalikan teks yang berkebalikan
//
// contoh: 
// teks = hello world
// hasil:
// dlrow olleh

function reverseString(str) {
    let newString = "";

    for (i = str.length - 1; i >= 0; i--) { 
        newString += str[i];}
    return newString;
}

const string = prompt('Masukan teks: ');

const result = reverseString(string);
console.log(result);