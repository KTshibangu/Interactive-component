const ratings = document.querySelectorAll('.numbers');
const submitBtn = document.getElementById('submit');

const container = document.querySelector('.container');
const submittedContainer = document.querySelector('.submitted');

const rateEl = document.querySelector('.rate-el');

let rate = null;


ratings.forEach((rating) => {
    rating.addEventListener('click', (e) => {
        const active = document.querySelector('.clicked');
        if(active){
            active.classList.remove('clicked');
        }
        const number = e.target;
        number.classList.add('clicked');
        rate = e.target.innerText;
    })
})

submitBtn.addEventListener('click', () => {
    container.classList.add('success');
    submittedContainer.classList.add('success');
    rateEl.textContent = rate;
})
