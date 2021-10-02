const listEl = document.querySelector('.todo__list');

listEl.addEventListener('click', function(e) {
    let clickedEl = e.target;

    if(clickedEl.tagName == 'LI') {
        clickedEl.classList.toggle('done');
    }
})