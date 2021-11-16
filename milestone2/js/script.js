const container = document.querySelector('.container');
for (let i = 1; i <= 100; i++) {
    const newElement = document.createElement('div');
    // se multiplo di 5 e 3 inserisco come fizzbuzz
    if ((i % 3)===0 && (i % 5)===0) {
        newElement.innerHTML = 'fizzbuzz';
    }
    // se multiplo di 3 inserisco come fizz
    else if ((i % 3)===0) {
        newElement.innerHTML = 'fizz';
    }
    // se multiplo di 5 inserisco come buzz
    else if ((i % 5)===0) {
        newElement.innerHTML = 'buzz';
    }
    // se multiplo non è multiplo di nessuno dei due inserisco come numero
    else {
        newElement.innerHTML = i;
    }
    container.append(newElement);
}