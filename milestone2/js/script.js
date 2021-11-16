const container = document.querySelector('.container');
for (let i = 1; i <= 100; i++) {
    // se multiplo di 5 e 3 inserisco come fizzbuzz
    if ((i % 3)===0 && (i % 5)===0) {
        const newElement = document.createElement('div');
        newElement.innerHTML = 'fizzbuzz';
        container.append(newElement);
    }
    // se multiplo di 3 inserisco come fizz
    else if ((i % 3)===0) {
        const newElement = document.createElement('div');
        newElement.innerHTML = 'fizz';
        container.append(newElement);
    }
    // se multiplo di 5 inserisco come buzz
    else if ((i % 5)===0) {
        const newElement = document.createElement('div');
        newElement.innerHTML = 'buzz';
        container.append(newElement);
    }
    // se multiplo non è multiplo di nessuno dei due inserisco come numero
    else {
        const newElement = document.createElement('div');
        newElement.innerHTML = i;
        container.append(newElement);
    }
}