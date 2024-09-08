import { showContent, displayHomeHtml } from "./welcome_page_js.js";
window.addEventListener('DOMContentLoaded', function(){
    const page = document.querySelector('.identifier');
    console.log(page)
    document.querySelectorAll('.menu-child').forEach(button => {
        button.addEventListener('click', function(){
            const name = button.dataset.name
            showContent(name)
        })
    });
    console.log(page);
    removeSearch();
    if(page !== null){
        showContent(page.innerHTML);
        if(page.innerHTML === 'contact-us'){
            countChars();
        }
    }else{
        displayHomeHtml();
    }
})

function countChars(){
    window.addEventListener('keyup',()=>{
        console.log('round1')
        const msg = document.querySelector('#msg-box');
        const countText = document.querySelector('.max-chars');
        if(msg && countText){
            console.log('round2')
            msg.addEventListener('keyup', function(event){
                console.log('round3');
                if(event.key !== 'Enter'){
                    countText.innerHTML = ` ${this.value.trim().length} out of 600 characters used`;
                    console.log(this.value.length)
                }
            })
        }
    })
}

function removeSearch(){
    document.querySelector('.search-bar').addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            this.value = '';
        }
    })
    document.querySelector('.search-button').addEventListener('click', function(event){
        if(event.key === 'Enter'){
            document.querySelector('.search-bar').value = '';
        }
    })
}