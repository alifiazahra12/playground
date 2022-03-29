function hitung(number) {

    for (let i = 1; i < number; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log(i + " merupakan kelipatan 3 dan 5");
        }
        else if (i % 5 === 0){
            console.log(i + " merupakan kelipatan 5");
        }
        else if (i % 3 === 0){
            console.log(i + " merupakan kelipatan 3");
        }
        else{
            console.log(i);
        }
    }
}

const counter = parseInt(prompt("Masukan jumlah bilangan yang ingin dicek: "));

const result = hitung(counter);
console.log(result);