
function composition() {
const numbers = [2, 0, 5, 3, 0, 8, 4];
let product = 1;

for (let number of numbers) {
    if (number !== 0) {
        product *= number;
    }
}

alert("Произведение ненулевых элементов массива [2, 0, 5, 3, 0, 8, 4] равно: " + product);
}