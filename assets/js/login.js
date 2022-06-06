const registerElement =document.querySelector('.navbar-item--register')
const loginElement =document.querySelector('.navbar-item--login')
const modalContainerBlock=document.querySelector('.modal__container')
const modalControlBtn=document.querySelectorAll('.auth-form__control-back')
const modalContainerLogin=document.querySelector('.modal__container--login')
const authFormRegister =document.querySelector('.auth-form--register')

const authFormBtnSwitch=document.querySelectorAll('.auth-form__btn-switch')

//start addEventListener click for form open and close modal
registerElement.addEventListener('click',()=>{
    modalContainerBlock.classList.add('show');
    authFormRegister.classList.add('show')
   
})
modalControlBtn[0].addEventListener('click',()=>{
    modalContainerBlock.classList.remove('show');
    authFormRegister.classList.remove('show');
    

})
loginElement.addEventListener('click',()=>{
   
    modalContainerBlock.classList.add('show');
     modalContainerLogin.classList.add('show');
     authFormRegister.classList.add('close')
 })
modalControlBtn[1].addEventListener('click',()=>{
    modalContainerBlock.classList.remove('show');
})

    //switch authentic from reigister to login 
authFormBtnSwitch[0].addEventListener('click',()=>{
    
    modalContainerLogin.classList.add('show')
    modalContainerLogin.classList.remove('close')
    authFormRegister.classList.remove('show')
    authFormRegister.classList.add('close')
    
})
    //switch authentic from login to register 
authFormBtnSwitch[1].addEventListener('click',()=>{
    authFormRegister.classList.add('show')
    authFormRegister.classList.remove('close')
    modalContainerLogin.classList.add('close')
    modalContainerLogin.classList.remove('show')
})
//End addEventListener click for form open and close modal




