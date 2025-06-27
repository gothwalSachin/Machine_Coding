const items = document.querySelectorAll('.item');
const answers = document.querySelectorAll('.hide');

items.forEach((item, idx) => {
    item.addEventListener('click', () => {
        // hideClassExcept(idx);
        answers[idx].classList.toggle('hide');
    })
})

const hideClassExcept = (idx) => {
    answers.forEach((ans, i) => {
        if(i !== idx) {
            ans.classList.add('hide');
        }
    })
}