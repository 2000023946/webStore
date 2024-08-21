import { showContent } from "./welcome_page_js.js";
window.addEventListener('DOMContentLoaded', function(){
    const page = document.querySelector('.identifier');
    console.log(page);
    if(page !== null){
        showContent(page.innerHTML);
    }
})