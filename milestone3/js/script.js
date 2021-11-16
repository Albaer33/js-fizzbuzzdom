const boxesContainer = document.querySelector('.container');
for (let i = 1; i <= 100; i++) {
    // se multiplo di 5 e 3 inserisco come fizzbuzz
    if ((i % 3)===0 && (i % 5)===0) {
        const newBox = ` <div class="box fizzbuzz">fizzbuzz</div> `;
        boxesContainer.innerHTML += newBox;
    }
    // se multiplo di 3 inserisco come fizz
    else if ((i % 3)===0) {
        const newBox = ` <div class="box fizz">fizz</div> `;
        boxesContainer.innerHTML += newBox;
    }
    // se multiplo di 5 inserisco come buzz
    else if ((i % 5)===0) {
        const newBox = ` <div class="box buzz">buzz</div> `;
        boxesContainer.innerHTML += newBox;
    }
    // se multiplo non è multiplo di nessuno dei due inserisco come numero
    else {
        const newBox = ` <div class="box">${i}</div> `;
        boxesContainer.innerHTML += newBox;
    }
}