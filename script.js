


var typed = new Typed('.text2',{
    strings:['Frontend Developer','Web Developer',"React Developer", "Backend Developer"],
   
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true
})

const header = document.querySelector("header");

window.addEventListener("scroll", function(){

    header.classList.toggle("sticky", window.scrolly)
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll =() =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}









