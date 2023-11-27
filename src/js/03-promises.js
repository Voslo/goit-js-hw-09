const form = document.querySelector('.form');
function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        setTimeout(() => {
            if (shouldResolve) {
                resolve({ position, delay });
            } else {
                reject({ position, delay });
            }
        }, delay);
    });
}

form.addEventListener('submit', event => {
    event.preventDefault();

    let delay = Number(form.delay.value);
    const step = Number(form.step.value);
    const amount = Number(form.amount.value);

    for (let i = 1; i <= amount; i++) {
        createPromise(i, delay)
            .then(({ position, delay }) => {
                console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
            })
            .catch(({ position, delay }) => {
                console.log(`❌ Rejected promise ${position} in ${delay}ms`);
            });
        delay += step;
    }
});