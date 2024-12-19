const result = document.querySelector(".result");
const number_1 = document.querySelector(".number-1");
const number_2 = document.querySelector(".number-2");
const number_3 = document.querySelector(".number-3");
const number_4 = document.querySelector(".number-4");
const number_5 = document.querySelector(".number-5");
const number_6 = document.querySelector(".number-6");
const number_7 = document.querySelector(".number-7");
const number_8 = document.querySelector(".number-8");
const number_9 = document.querySelector(".number-9");
const number_0 = document.querySelector(".number-0");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
let x=0;
let y=0;

minus.addEventListener("click",function(){
    return x-y;
})
plus.addEventListener("click",function(){
    return x+y;
})
divide.addEventListener("click",function(){
    return x/y;
})
multiply.addEventListener("click",function(){
    return x*y;
})
number_1.addEventListener("click",function(){
    return x=1;
})
number_1.addEventListener("click",function(){
    return x=2;
})
