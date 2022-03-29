// Menggunakan switch case, petakan nilai ujian di bawah ini ke dalam Nilai A B C D E
// A = 91-100
// B = 71-90
// C = 61-70
// D = 51-60
// E = <= 50

// Masukan suatu angka
const score = parseInt(prompt("Masukan nilai: "));

// TODO: answer here

let condition;

if (score >= 91) {
    condition = 1;
}
else if (score >= 71) {
    condition = 2;
}
else if (score >= 61) {
    condition = 3;
}
else if (score >= 51) {
    condition = 4;
}
else if (score <= 50){
    condition = 5;
}
else {
    condition = 6;
}

switch (condition){
    case 1:
        console.log("Nilai A");
        break;
    case 2:
        console.log("Nilai B");
        break;
    case 3:
        console.log("Nilai C");
        break;
    case 4:
        console.log("Nilai D");
        break;
    case 5:
        console.log("Nilai E");
        break;
    case 6:
        console.log("Bukan bilangan");
        break;
}