document.onclick = function (event) {
    const elemShowDsk = event.target;
    if (!elemShowDsk.classList.contains('show_description')) {
        return;
    }
    //to hide not the button, but the description - we are looking for the parent element
    //get a parent element
    const parent = elemShowDsk.parentElement;
    //looking for description_item in the parent element
    const descriptionItem = parent.querySelector('.description_item');
    if (!descriptionItem) {
        return;
    }
    descriptionItem.style.display = descriptionItem.style.display === 'block' ? 'none' : 'block';
}