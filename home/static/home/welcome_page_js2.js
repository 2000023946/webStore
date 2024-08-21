const backgroundHeight = document.querySelector('.background').offsetHeight;
    const moveToTopButton =  document.querySelector('.move-to-top-button-container');

    class ScrollDistance{
        constructor(){
            let distance = 0;
        }
        set distanceLength(distance){
            this.distance = distance;
            if(this.distance >= backgroundHeight){
                moveToTopButton.style.transition = 'opacity 0.5s ease-in-out, transform 1s ease-in-out';
                moveToTopButton.style.transform = 'translateY(-180px)';
                moveToTopButton.style.opacity = '1';
            }else{
                moveToTopButton.style.transition = 'opacity 0.5s ease-in-out, transform 1s ease-in-out';
                moveToTopButton.style.transform = 'translateY(180px)';
                moveToTopButton.style.opacity = '0';
            }
        }
        get distanceLength(){
            return this.distance;
        }
    }
    const tracker = new ScrollDistance();
    window.addEventListener('scroll', () =>{
        tracker.distanceLength = window.scrollY;
    })
    //action of clicking button to move to the top
    moveToTopButton.addEventListener('click', () =>{
        document.querySelector('.body-header').scrollIntoView({behavior: 'smooth'});
    })



    //meat and grocery buton click to slide down the screen
    const meatButton = document.querySelector('#meat-button');
    const groceryButton = document.querySelector('#grocery-button');
    meatButton.addEventListener('click', () =>{
        document.querySelector('.meat-section-title').scrollIntoView({behavior: 'smooth'});
        console.log(tracker.distanceLength);
    })
    groceryButton.addEventListener('click', () =>{
        document.querySelector('.grocery-section-title').scrollIntoView({behavior: 'smooth'});
    })


    //scroll animation on titile

    //scroll animation on products


    //scroll animation on grocery product

    //JS for menu option
    const image = document.querySelector('.menu-pic');
    const menu = document.querySelector(".menu-section-header");
    const dropDownMenu = document.querySelector('.menu-section');
    function displayDropDown(image){
        if(image.classList.contains("closed")){
            dropDownMenu.style.display = "none";
        }else{
            dropDownMenu.style.display = "flex";
        }
    }
    function checkMedia(x){
        if(!x.matches){
            dropDownMenu.style.display = "none";
            menu.innerHTML = `
                <img class = "menu-pic closed" src="../../static/home/closed-menu.png" alt="">
            `;
        }
    }
    let x = window.matchMedia("(max-width: 720px)");
    checkMedia(x);
    x.addEventListener('change', ()=>{
        checkMedia(this);
    })

    displayDropDown(image);
    menu.addEventListener('click', function(){
        const image = document.querySelector('.menu-pic');
        if(image.classList.contains('closed')){
            dropDownMenu.classList.remove('hidden');
            menu.innerHTML = `
                <img class = "menu-pic open" src="../../static/home/open-menu.png" alt="">
            `;
            const image = document.querySelector('.menu-pic');
            displayDropDown(image);
        }else{
            dropDownMenu.classList.add('hidden');
            menu.innerHTML = `
                <img class = "menu-pic closed" src="../../static/home/closed-menu.png" alt="">
            `;
            const image = document.querySelector('.menu-pic');
            displayDropDown(image);
        }
    })

    //end of JS for menu option

    //search button animation
    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-button')
    searchButton.addEventListener('mouseover', function(){
        this.classList.add("search-button-hover");
        searchBar.classList.add("search-bar-hover");
    })

    //end of search button animation