const buttons = document.querySelectorAll('[data-id]');
console.log(buttons);
const allContentElements = document.querySelectorAll('.booking');

buttons.forEach(function(button){
    button.addEventListener('click', changeContent)
})

function changeContent(event){
    const clickedButton = event.currentTarget;
    
    const contentId = clickedButton.dataset.id;
    allContentElements.forEach(function(contentElement){
        if (contentElement.getAttribute('id') === contentId) {
          contentElement.style.display='block';
        } else {
            contentElement.style.display='none'; 
        }
    })
}