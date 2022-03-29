// Masukan 3 bilangan bulat menggunakan if condition
const num1 = parseInt(prompt("Masukan bilangan pertama: "));
const num2 = parseInt(prompt("Masukan bilangan kedua: "));
const num3 = parseInt(prompt("Masukan bilangan ketiga: "));

let largest;

// TODO: answer here

var bilanganbulat;
bilanganbulat = [num1, num2, num3];
largest = 0;

for( i = 0; i < bilanganbulat.length; i++ ){
    if(bilanganbulat[i] > largest ){
      largest = bilanganbulat[i];
    }
}

// Menampilkan hasil
console.log("Bilangan terbesar adalah " + largest);