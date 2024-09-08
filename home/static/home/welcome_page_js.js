
export async function showContent(content){
    console.log(content);
    if(content === 'meat'){
        html= 
        `
            <div class="background2">
                <div class="background2-image-container">
                    <img src="../../static/home/cow.png">
                    <img src="../../static/home/pair.png">
                    <img src="../../static/home/chicken.png">
                </div>
                <div class="bottom-background2-text-section">
                    <div class="bottom-background2-text-container">
                        Fresh Delicious Meat starts Here <br> <button class="meat-scroll-button"><div class="meat-scroll-text">meat product</div></button>
                    </div>
                </div>
            </div>
        `;
        homePage.innerHTML = html;
        contentSection.innerHTML = meatHtml;


        meatButton.style.setProperty('--scale-length', '1');
        meatButton.style.setProperty('--background-color', 'rgb(228, 228, 228)');

        groceryButton.style.setProperty('--scale-length', '0');
        groceryButton.style.setProperty('--background-color', 'rgb(255, 255, 255)');

        contactButton.style.setProperty('--scale-length', '0');
        contactButton.style.setProperty('--background-color', 'rgb(255, 255, 255)');

        const meatScrollButton = document.querySelector('.meat-scroll-button');
        meatScrollButton.addEventListener('click', function(){
            document.querySelector('.body').scrollIntoView({behavior:'smooth'});
        })
        contentSection.innerHTML = await generateMeatHtml();
        updateMeatSliderContents();
        meatProductJS();
        removeSearchClass();
    }
    else if(content === 'grocery'){
        html = 
        `
            <div class="background2">
                <div class="background2-image-container">
                    <img src="../../static/home/cow.png">
                    <img src="../../static/home/pair.png">
                    <img src="../../static/home/chicken.png">
                </div>
                <div class="bottom-background2-text-section">
                    <div class="bottom-background2-text-container">
                        Groery that make your Favorite dishes <button class="meat-scroll-button"><div class="meat-scroll-text">grocery</div></button>
                    </div>
                </div>
            </div>
        `;
        homePage.innerHTML = html;

        contentSection.innerHTML = groceryHtml;

        groceryButton.style.setProperty('--scale-length', '1');
        groceryButton.style.setProperty('--background-color', 'rgb(228, 228, 228)');

        meatButton.style.setProperty('--scale-length', '0');
        meatButton.style.setProperty('--background-color', 'rgb(255, 255, 255)');

        contactButton.style.setProperty('--scale-length', '0');
        contactButton.style.setProperty('--background-color', 'rgb(255, 255, 255)');


        const meatScrollButton = document.querySelector('.meat-scroll-button');
        meatScrollButton.addEventListener('click', function(){
            document.querySelector('.body').scrollIntoView({behavior:'smooth'});
        })
        contentSection.innerHTML = await generateGroceryHtml();
        groceryProductJS();
        removeSearchClass();
    }
    else if(content === 'contact-us'){
        html = 
        `
            <div class="background2">
                <div class="background2-image-container">
                    <img src="../../static/home/clock2.png">
                    <img src="../../static/home/mail2.png">
                    <img src="../../static/home/phone2.png">
                </div>
                <div class="bottom-background2-text-section">
                    <div class="bottom-background2-text-container">
                        Let us know how you feel 
                        <button class="meat-scroll-button"><div class="meat-scroll-text">form</div></button>
                    </div>
                </div>
            </div>
        `;
        homePage.innerHTML = html;
        
        contentSection.innerHTML = contactHtml;
        const form = document.querySelector('.contact-us-form');

        groceryButton.style.setProperty('--scale-length', '0');
        groceryButton.style.setProperty('--background-color', 'rgb(255, 255, 255)');

        meatButton.style.setProperty('--scale-length', '0');
        meatButton.style.setProperty('--background-color', 'rgb(255, 255, 255)');
        
        contactButton.style.setProperty('--scale-length', '1');
        contactButton.style.setProperty('--background-color', 'rgb(228, 228, 228)');

        const meatScrollButton = document.querySelector('.meat-scroll-button');
        meatScrollButton.addEventListener('click', function(){
            document.querySelector('.body').scrollIntoView({behavior:'smooth'});
        })
        const observer = new IntersectionObserver((entries, observer) =>{
            entries.forEach(entry =>{
                if(entry.isIntersecting){
                    infoObserver(2);
                }
            })
        })
        observer.observe(contentSection);
        removeSearchClass();
    }
    else if(content === 'search'){

        contentSection.innerHTML = '';

        groceryButton.style.setProperty('--scale-length', '0');
        groceryButton.style.setProperty('--background-color', 'rgb(255, 255, 255)');

        meatButton.style.setProperty('--scale-length', '0');
        meatButton.style.setProperty('--background-color', 'rgb(255, 255, 255)');
        
        contactButton.style.setProperty('--scale-length', '0');
        contactButton.style.setProperty('--background-color', 'rgb(255, 255, 255)');

        let item = document.querySelector('.identifier');
        
        let q = '';
        if(item !== null){
            q = item.dataset.query;
        }
        if(q === ''){
            q = document.querySelector('.search-bar').value;
        }
        console.log('q', q)

        displaySearchContent(q);
    }
    
}

export async function displayHomeHtml(){
    contentSection.innerHTML = await generateHomeHtml();
    updateMeatSliderContents();
    meatProductJS();
    groceryProductJS();
}


let contentSection = document.querySelector('.content-section');
const meatButton = document.querySelector('.left-body-header');
const groceryButton = document.querySelector('.middle-body-header');
const contactButton = document.querySelector('.right-body-header');
const navButtons = document.querySelectorAll('.nav-buttons');

const homePage = document.querySelector('.background');
const groceryContent = document.querySelector('.grocery-content');
const meatContent = document.querySelector('.meat-content');
const contactContent = document.querySelector('.contact-content');

let html = '';

let groceryHtml = ``;

function generateGroceryProductHtml(name, image){
    return `
        <div class="grocery-display-product">
            <div class="product-image-container">
                <img class="product-image" src="${image}" alt="">
            </div>
            <div class="product-description">
                ${name}
            </div>
        </div>
    `;
}
const csrfToken = contentSection.dataset.csrfToken;
let contactHtml = `<div class="contact-content ">
            <div class="info-section-container">
                <div class="info-section">
                    Fatma Halal is located 921 Montreal Rd suite 1A Clarkston, GA 30021
                    We are next to the pharmacy, in a desnly packed East African area
                    If you wish to contact us please fill out the
                </div>
            </div>
            <div class="contact-section">
                <form method="post" class="contact-us-form" action="contact-us">
                    <input type="hidden" name="csrfmiddlewaretoken" value="${csrfToken}">
                    <div class="left-right-container">
                        <div class="left-form-section">
                            <h3>Reason <span class="required">(Required)</span> </h3>
                            <div class="select-container">
                                <select name="reason" id="reason">
                                    <option value="product issue">Product issue</option>
                                    <option value="concern">Product concern</option>
                                    <option value="other">other</option>
                                </select>
                                <span class="custom-border"></span>
                            </div>
                            <h3>Name  <span class="required">(Required)</span></h3>
            
                            <div class="name-content">
                                <div class="first-name">
                                    <p class="p-tag">First</p>
                                <input type="text" name="first_name" required>
                                </div>
                                <div class="last-name">
                                    <p class="p-tag">Last</p>
                                    <input type="text" name="last_name" required>
                                </div>
                            </div>
            
                            <div class="email-phone">
                                <div class="email">
                                    <h3>Email</h3>
                                    <input name="email" type="text">
                                </div>
                                <div class="phone">
                                    <h3>Phone</h3>
                                    <input name="phone" type="text">
                                </div>
                            </div>
                        </div>
                        <div class="right-form-section"> 
                            <div class="concern">
                                <h3>What products would you like to discuss  <span class="required">(Required)</span></h3>
                                <input name="product" type="text" required>
                            </div>
                            <div class="message-form">
                                <h3>Message  <span class="required">(Required)</span></h3>
                                <p class="p-tag">Please let us know what you are thinking about. So we can help you out.</p>
                                <textarea name="msg" id="msg-box"></textarea>
                                <div class="max-chars"> 0 out of 600 characters used</div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-form-section">
                        <input id="submit-input" type="submit">
                    </div>

                </form>
            </div>
        </div>`;
let meatDisplayHtml = '';
function generateMeatProductHtml(name, image){
    return `
        <div class="meat-display-product">
            <div class="product-image-container">
                <img class="product-image" src="${image}" alt="">
            </div>
            <div class="product-description">
                ${name}
            </div>
        </div>
    `;
}
let meatHtml = ``;

function updateMeatSliderContents(apiName){
    let name = `${apiName}`;
    document.querySelectorAll('.product').forEach(product =>{
        if(product.classList.contains('middle-product')){
            name = product.dataset.name;
        }
    })
    if (name === 'all'){
        name = 'meat'
    }
    if(name === 'Cow'){
        name = 'beef'
    }
    getAPIData(`search/?q=${name}`).then(raw_data =>{
        const data = raw_data[name]['meat'];
        let html = '';
        data.forEach(element =>{
            html += generateMeatProductHtml(element.name, element.image);
        })
        if(html !== ''){
            const container = document.querySelector('.meat-display-container').innerHTML = html;
            meatProductsOpacity();
        }
    })
}

async function generateMeatHtml(){
    const data = await getAPIData('meat/type');
    console.log(data);
    let middleProduct = `
                <div data-name="all" class="product middle-product">
                    <div class="product-image-container">
                        <img class="product-image" src="../../static/home/meat.png" alt="">
                    </div>
                    <div class="product-description">
                        View all Meat
                    </div>
                </div>
            `;
    let count = 0;
    data.forEach(element =>{
        meatDisplayHtml += 
            `
                <div data-name="${element.name}"class="product">
                    <div class="product-image-container">
                        <img class="product-image" src="${element.image}" alt="">
                    </div>
                    <div class="product-description">
                        ${element.name}
                    </div>
                </div>
            `;
        if(count === 1){
            meatDisplayHtml+=middleProduct;
        }
        count ++;
    })
    meatHtml = 
        `<div class="meat-content">
            <div class="header-section">
                <div class="meat-section-title-container">
                    <div class="meat-section-title">
                        View our Fresh Meat
                    </div>
                </div>
                <div class="info-section-container">
                    <div class="info-section">
                        Our authentic halal meat includes staples like goat, lamb, cow and even chicken.
                        We offer both fresh and frozen alternatives and 
                        We have have many different version of each meat product
                    </div>
                </div>
            </div>
            <div class="view-products-container">
                <div class="products-container"> 
                    <div class="products-slideshow">  
                        ${meatDisplayHtml}
                    </div>
                    <button class="left-button"> <img src="../../static/home/left-arrow.png" alt=""> </button>
                    <button class="right-button"> <img src="../../static/home/right-arrow.png" alt=""> </button>
                </div>
            </div>
        
            <div class="meat-display-section">
                <div class="meat-display-container">

                    <div class="meat-display-product">
                        <div class="product-image-container">
                            <img class="product-image" src="../../static/home/pasta.jpg" alt="">
                        </div>
                        <div class="product-description">
                            goat
                        </div>
                    </div>

                </div>
            </div>
        </div>`;
    return meatHtml;
}

async function generateGroceryHtml(){
    let html = ``;
    const data = await getAPIData('grocery');
    await data.forEach(item =>{
        html += generateGroceryProductHtml(item.name, item.image);
    })
    groceryHtml = `
        <div class="grocery-content">
            <div class="header-section">
                <div class="grocery-section-title-container">
                    <div class="grocery-section-title">
                        View Our Popular Grocery
                    </div>
                </div>
                <div class="info-section-container">
                    <div class="info-section">
                        Fatma Halal has the grocery to make your somali, ethopian, and eritrean entrees
                        We have all the spices that you need to make your meals razzle up
                        Come and shop our authenthic
                    </div>
                </div>
            </div>
        
            <div class="grocery-display-section">
                <div class="grocery-display-container">
                    ${html}
                </div>
            </div>
        
            <div class="button-container">
                <button class="view-grocery">
                    <div class="view-grocery-text-container">Load More</div>
                </button>
            </div>
        </div>
    `;
    return groceryHtml;
}

async function generateHomeHtml(){
    return await generateMeatHtml() + await generateGroceryHtml();
}

function meatProductsOpacity(){
    const meatProducts = document.querySelectorAll('.meat-display-product');
    const meatProductsObserver = new IntersectionObserver((entries, observer) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                meatProducts.forEach(product =>{
                    product.style.setProperty('--meat-products-opacity', '1');
                })
            }
        })
    })
    meatProductsObserver.observe(document.querySelector('.meat-display-container'));
}

function meatProductJS(){
    const meatTitle = document.querySelector('.meat-section-title');
    const observer = new IntersectionObserver((entries, observer) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                meatTitle.style.setProperty('--scaleValue', '1');
                meatTitle.style.setProperty('--opacityValue', '1');
                infoObserver(0);
            }
        })
    })
    observer.observe(meatTitle);

    meatProductsOpacity();

    const slideShow = document.querySelector('.products-slideshow');
    const rightButton = document.querySelector('.right-button');
    const leftButton = document.querySelector('.left-button');
    let products = document.querySelectorAll('.product');
    let productsList = Array.from(products);
    let middleProduct = document.querySelector('.middle-product');
    middleProduct.style.height = '100%';
    const numProducts = products.length;

    const shiftStep = 207;
    let shiftAmount = 0;
    const maxShiftAmount = (products.length-1)*205;

    function generateClones(){
        products = document.querySelectorAll('.product');
        let firstCopy = products[0].cloneNode(true);
        let lastCopy = products[products.length-1].cloneNode(true);
        productsList.unshift(lastCopy);
        productsList.push(firstCopy);
        let html = '';
        productsList.forEach(product =>{
            html+=product.outerHTML;
        })
        slideShow.innerHTML = html;

        products = document.querySelectorAll('.product');
        shiftAmount+=-shiftStep;

        products.forEach(product =>{
            product.style.transform = `translateX(${shiftAmount}px)`;
        })
    }

    generateClones();


    rightButton.addEventListener('click', ()=>{
        if(rightButton.disabled === true){
            return;
        }

        rightButton.disabled = true;
        shiftAmount -= shiftStep;
        middleProduct = document.querySelector('.middle-product');
        const newMiddleProduct = middleProduct.nextElementSibling;
        const width = document.querySelector('.products-slideshow').offsetWidth;

        // if(shiftAmount*-1 < maxShiftAmount){}
        products.forEach(product =>{
            product.style.transition = `transform 0.3s ease, height 0.3s ease`;
            if(product === middleProduct){
                middleProduct.style.height = `80%`;
                product.classList.remove('middle-product');
            }
            if(product === newMiddleProduct){
                newMiddleProduct.style.height = '100%';
                product.classList.add('middle-product');
            } 
            product.style.transform = `translateX(${shiftAmount}px)`;
        })

        productsList = Array.from(document.querySelectorAll('.product'));
        productsList.shift();
        productsList.shift();
        let html = '';
        productsList.forEach(product =>{
            html += product.outerHTML;
        })

        setTimeout(() =>{
            slideShow.innerHTML = html;
            products = document.querySelectorAll('.product');
            let firstCopy = products[0].cloneNode(true);
            let lastCopy = products[products.length-1].cloneNode(true);
            productsList.unshift(lastCopy);
            productsList.push(firstCopy);
            html = '';
            productsList.forEach(product =>{
                html+=product.outerHTML;
            })
            slideShow.innerHTML = html;

            products = document.querySelectorAll('.product');
            shiftAmount+=shiftStep;
            products.forEach(product =>{
                product.style.transition = '';
                product.style.transform = `translateX(${shiftAmount}px)`;
            })
            rightButton.disabled = false;
        }, 300)
        updateMeatSliderContents();
    })


    leftButton.addEventListener('click', ()=>{
        if(leftButton.disabled === true){
            return;
        }

        leftButton.disabled = true;
        shiftAmount += shiftStep;
        middleProduct = document.querySelector('.middle-product');
        const newMiddleProduct = middleProduct.previousElementSibling;
        const width = document.querySelector('.products-slideshow').offsetWidth;

        //if(shiftAmount < 0){        }
        products.forEach(product =>{
            product.style.transition = `transform 0.3s ease, height 0.3s ease`;
            if(product === middleProduct){
                middleProduct.style.height = `80%`;
                product.classList.remove('middle-product');
            }
            if(product === newMiddleProduct){
                newMiddleProduct.style.height = '100%';
                product.classList.add('middle-product');
            } 
            product.style.transform = `translateX(${shiftAmount}px)`;
        })

        productsList = Array.from(document.querySelectorAll('.product'));
        productsList.pop();
        productsList.pop();
        html = '';
        productsList.forEach(product =>{
            html += product.outerHTML;
        })

        setTimeout(() =>{
            slideShow.innerHTML = html;
            generateClones();
            leftButton.disabled = false;
        }, 310)
        updateMeatSliderContents();
    })

    let changed = false;
    function checkMediaSlider(y,z){
        products = document.querySelectorAll('.product');
        if(y.matches && !changed){
            shiftAmount -= shiftStep;
            products.forEach(product =>{
                product.style.transform = `translateX(${shiftAmount}px)`;
            })
            changed = true;
        }
        if(changed && z.matches){
            shiftAmount += shiftStep;
            products.forEach(product =>{
                product.style.transform = `translateX(${shiftAmount}px)`;
            })
            changed = false;
        }
    }
    let changed2 = false;
    function checkMediaSlider2(a,b){
        products = document.querySelectorAll('.product');
        if(a.matches && !changed){
            shiftAmount -= shiftStep;
            products.forEach(product =>{
            // product.style.transform = `translateX(${shiftAmount}px)`;
            })
            changed2 = true;
        }
        if(changed2 && b.matches){
            shiftAmount += shiftStep;
            products.forEach(product =>{
                //product.style.transform = `translateX(${shiftAmount}px)`;
            })
            changed2 = false;
        }
    }
    let a = window.matchMedia("(max-width: 800px)");
    let b = window.matchMedia("(min-width: 900px)");

    let y = window.matchMedia("(max-width: 999px)");
    let z = window.matchMedia("(min-width: 1000px)");

    checkMediaSlider(y,z);
    y.addEventListener('change', function(){
        checkMediaSlider(this, z);
    })
    z.addEventListener('change', function(){
        checkMediaSlider(y, this);
    })
    a.addEventListener('change', function(){
        checkMediaSlider(this, b);
    })
    b.addEventListener('change', function(){
        checkMediaSlider(a, this);
    })

    // make button appear 
    slideShow.addEventListener('mouseover', function(){
        leftButton.classList.add('show-buttons');
        rightButton.classList.add('show-buttons');
    })
    slideShow.addEventListener('mouseout', function(){
        leftButton.classList.remove('show-buttons');
        rightButton.classList.remove('show-buttons');
    })
}

function manageHistory(){
    navButtons.forEach(button =>{
        button.addEventListener('click', function(){
            const state = {id:this.id};
            history.pushState(state, "", `${this.id}`);
            showContent(this.id);
        })
    })
    document.querySelector('.search-button').addEventListener('click', function(){
            const state = {id:'search'};
            history.pushState(state, "", `${state.id}`);
            showContent(state.id);
    })
    document.querySelector('.search-bar').addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            const state = {id:'search'};
            history.pushState(state, "", `${state.id}`);
            showContent(state.id);
        }
})
    window.addEventListener('popstate', function(event){
        if(event.state !== null){
            showContent(event.state.id);
        }
    })
}
manageHistory();

function infoObserver(index){//index is param 0 -> meat, 1 -> grocery,
    const infoSection = document.querySelectorAll('.info-section');
    if(infoSection[index] !== undefined){
        infoSection[index].style.setProperty('--infoOpacityValue', '1');
    }else{
        infoSection[0].style.setProperty('--infoOpacityValue', '1');
    }
}


function groceryProductJS(){
    const groceryProducts = document.querySelectorAll('.grocery-display-product');
    const groceryProductsObserver = new IntersectionObserver((entries, observer) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                groceryProducts.forEach(product =>{
                    product.style.setProperty('--grocery-products-opacity', '1');
                })
            }
        })
    })
    groceryProductsObserver.observe(document.querySelector('.grocery-display-container'));

    const groceryTitle = document.querySelector('.grocery-section-title');
    const groceryObserver = new IntersectionObserver((entries, observer) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                groceryTitle.style.setProperty('--scaleGroceryVal', '1');
                groceryTitle.style.setProperty('--opacityGroceryVal', '1');
                infoObserver(1);
            }
        })
    })
    groceryObserver.observe(groceryTitle);
}


async function getData(url){
    const resp = await fetch(url);
    return await resp.json();
}

function generateSearchHome(q){
    return `
        <div class="background3">
            <div class="bottom-background3-text-container">
                You searched: <span class="search-result">${q}</span>
            </div>
            <div class="search-container2">
                <input data-name="=${q}" class="search-bar2" type="text" name="q">
                <button  data-name="=${q}" class="search-button2">
                    <img class="search-icon" src="../../static/home/Search_Icon.svg.png" alt="">
                </button>
            </div>
        </div>
        `;
}

async function runSearch(q){
    console.log('s',q);
    const raw_data = await getAPIData(`search/?q=${q}`);
    const data = raw_data[q];
    console.log(raw_data);
    console.log(data);
    let html = ``;
    for (const dict in data){
        console.log(data[dict])
    }
    if(data){
        for(const key in data){
            data[key].forEach(item =>{
                html += generateGroceryProductHtml(item.name, item.image);
            })
        }
    }
    const searchHtml = 
    `
    <div class="grocery-content">
        <div class="header-section">
            <div class="grocery-section-title-container">
                <div class="grocery-section-title">
                    View Our Popular Grocery
                </div>
            </div>
            <div class="info-section-container">
                <div class="info-section">
                    Fatma Halal has the grocery to make your somali, ethopian, and eritrean entrees
                    We have all the spices that you need to make your meals razzle up
                    Come and shop our authenthic
                </div>
            </div>
        </div>
    
        <div class="grocery-display-section">
            <div class="grocery-display-container">
                ${html}
            </div>
        </div>
    
        <div class="button-container">
            <button class="view-grocery">
                <div class="view-grocery-text-container">Load More</div>
            </button>
        </div>
    </div>
    `;
    contentSection.innerHTML = searchHtml;
    const title = document.querySelector('.grocery-section-title').innerHTML = 'View your search results';
    const infoSection = document.querySelector('.info-section').innerHTML = '';
    groceryProductJS();

    homePage.innerHTML = generateSearchHome(q);

    search('search-button2', 'search-bar2');
    return q;
}

function search(classButton, classInput){
    document.querySelector(`.${classInput}`).addEventListener('keydown',  async function(event){
        if(event.key === 'Enter'){
            const q = document.querySelector(`.${classInput}`).value;
            const name = await runSearch(q);
            const state = {id:name};
            history.pushState(state, "", `search?=${name}`);
            document.querySelector(`.${classInput}`).value = '';
            console.log("p", document.querySelector(`.${classInput}`).value);
        }
    })
    document.querySelector(`.${classButton}`).addEventListener('click', async function(){
        const q = document.querySelector(`.${classInput}`).value;
        const name = await runSearch(q);
        const state = {id:name};
        history.pushState(state, "", `search?=${name}`);
        document.querySelector(`.${classInput}`).value = '';
        console.log("p", document.querySelector(`.${classInput}`).value);
    });
}

function displaySearchContent(q){
    homePage.innerHTML = generateSearchHome(q);
    runSearch(q);
    search('search-button', 'search-bar');
    search('search-button2', 'search-bar2');
}

function removeSearchClass(){
    document.querySelector('.search-bar').classList.remove('search-bar-hover');
    document.querySelector('.search-button').classList.remove('search-button-hover');
}

async function getAPIData(urlExtension){
    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            'username' : 'mo',
            'password' : 'mo'
        })
    }
    const resp = await fetch('auth/', options);
    const token = await resp.json();
    localStorage.getItem('token', token.token)
    console.log(await token.token)
    options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }
    const resp_data = await fetch(`api/${urlExtension}`, options);
    const data = await resp_data.json();
    return data;
}