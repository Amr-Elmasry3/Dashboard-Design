let box= document.querySelector(".box");
let boxFirst= document.querySelector(".appere1");
let boxSecond= document.querySelector(".appere2");
let boxThird= document.querySelector(".appere3");
let boxFourth= document.querySelector(".appere4");
let boxFivth= document.querySelector(".appere5");
let boxSixth= document.querySelector(".appere6");
let boxSeventh= document.querySelector(".appere7");
let boxEighth= document.querySelector(".appere8");
let boxLast= document.querySelector(".appere9");

window.onscroll= function (){
  if (window.scrollY >= box.offsetTop){
    boxFirst.style.cssText= "width: 45% ; transition: 1s";
		boxSecond.style.cssText= "width: 70% ; transition: 1s";
    boxThird.style.cssText= "width: 90% ; transition: 1s";
    boxFourth.style.cssText= "width: 75% ; transition: 1s";
    boxFivth.style.cssText= "width: 100% ; transition: 1s";
    boxSixth.style.cssText= "width: 40% ; transition: 1s";
    boxSeventh.style.cssText= "width: 85% ; transition: 1s";
    boxEighth.style.cssText= "width: 75% ; transition: 1s";
    boxLast.style.cssText= "width: 80% ; transition: 1s";
  }
}