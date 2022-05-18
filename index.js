const getDigit = parseInt(prompt('wprowadź cyfrę od 0 do 10'));
const random = Math.floor(Math.random() * 11);

if (Number.isInteger(getDigit)) {
    if ((0<getDigit) && (getDigit<11)) {
        if (random === getDigit) {
            console.log("udało się");
        } else {
            console.log("Spróbuj ponownie");
        }
    } else {
        console.log("liczba nie znajduje się w zakresie od 1 do 10");
    }
} else {
    console.log("podany znak nie jest liczbą");
}

