const checkButton = document.getElementById('check-btn');
const checkCalculator = document.getElementById('calculator');
const resultContainter = document.getElementById('result');



const checkValidity = () => {
    const num = Number(checkCalculator.value);
    if (typeof num !== 'number') {
        alert('Please enter an integer greater than 0')
    }
    else {
        return
    }
};

checkButton.addEventListener('click', () => {
    resultContainter.replaceChildren();
    checkValidity();
    let num = Number(checkCalculator.value);
    console.log(num);
    const squareRoot = Math.sqrt(num);
    resultContainter.innerHTML = `The square root is <strong>${squareRoot}</strong>`;
    if (num < 0) {
        resultContainter.innerHTML = 'No square root exists, please enter a number greather than 0!';
    }

    num = '';


});