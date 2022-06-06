var $=document.querySelector.bind(document);
var $$=document.querySelectorAll.bind(document)




// script for auto navigation banner 
var counter =1 ;
setInterval(function(){
    document.getElementById('radio' + counter).checked=true;
    counter++;
    if(counter>4)
    {
        counter=1;
    }
},5000);

var controlBannerLeftElement= document.querySelector('.banner-icon-left');
controlBannerLeftElement.addEventListener('click',()=>{
    document.getElementById('radio' + counter).checked=true;
    counter--;
    if(counter<1)
    {
        counter=4;
    }
})
var controlBannerLeftElement= document.querySelector('.banner-icon-right');
controlBannerLeftElement.addEventListener('click',()=>{
    document.getElementById('radio' + counter).checked=true;
    counter++;
    if(counter>4)
    {
        counter=1;
    }
})


var hommMallBannerCounter =11 ;
setInterval(function(){
    document.getElementById('home-mall_radio' + hommMallBannerCounter).checked=true;
    hommMallBannerCounter++;
    if(hommMallBannerCounter>14)
    {
        hommMallBannerCounter=11;
    }
},5000);
//  js for render rest api courses category 
var coursesCatelogy='  http://localhost:3000/coursesCategory';
fetch(coursesCatelogy)
    .then(function(response){
        return response.json();
    })
    .then(function(courses){
        var htmls=courses.map(function(course){
            
                return `<div class="section__category-group">
                            <a class="section__category-link">
                                <div class="section__category-list-item">
                                        <div class="section__category-list-item--image">
                                            <img src="${course.img}" alt="image product of category" >
                                        </div>
                                        <div class="section__category-list--content">
                                            <span class="section__category-list--content-text">${course.nameProduct}</span>
                                        </div>
                                </div>
                            </a>
                        </div>
                        `
            });
        document.querySelector('.section__category-list').innerHTML=htmls.join('');
    })
//js for control category type of products view
var categoryControlPrev=document.querySelector('.section-category__control-prev-wrap');
var categoryControlNext=document.querySelector('.section-category__control-next-wrap');

var categoryGroup=document.querySelector('.section-category-container')

categoryControlNext.addEventListener('click',()=>{
    categoryGroup.classList.add('margin-left__category')
})
categoryControlPrev.addEventListener('click',()=>{
    categoryGroup.classList.remove('margin-left__category')
})

// js for list flash sale 

var FlashSaleCourses='http://localhost:3000/FlashSaleCourses';
fetch(FlashSaleCourses)
    .then(function(response){
        return response.json();
    })
    .then(function(courses){
        var htmls=courses.map(function(course){
            
                return `<div class="shoppe-flash-sale__list-item">
                            <div class="percent-wrap">
                                <span class="percent-value">${course.percent}</span>
                                <span class="notePercent">${course.notePercent}</span>
                            </div>
                            <div class="flash-sale__product">
                                <img class="flash-sale__product-img" src="${course.img}">
                            </div>
                            <div class="flash-sale__product-price">
                                <span class="unit-currency">${course.currency}</span>
                                <span class="flash-sale__price">${course.price}</span>
                            </div>
                            <div class="flash-sale__product-sold--wrap">
                                <span class="flash-sale__product-sold-text">${course.sold}</span>
                                <span class="flash-sale__product-sold-quantity">${course.soldQuantity}</span>
                            </div>
                        </div>
                        `
            });
        document.querySelector('.shoppe-flash-sale__list').innerHTML=htmls.join('');
    })
// js for price product
