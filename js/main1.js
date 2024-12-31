let yearlyTargets= document.querySelector(".yearlyTargets");
let shape1= document.querySelector(".shape1-copy");
let shape2= document.querySelector(".shape2-copy");
let shape3= document.querySelector(".shape3-copy");


window.onscroll= function (){
  if (window.scrollY >= yearlyTargets.offsetTop){
    shape1.style.cssText= "width: 80% ; transition: 1s";
    shape2.style.cssText= "width: 55% ; transition: 1s";
    shape3.style.cssText= "width: 75% ; transition: 1s";
  }
}

// 3