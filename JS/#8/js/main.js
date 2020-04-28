// #1 -----------------------------------------------
// let inputs = document.querySelectorAll(".inputs"),
//     firstInput = document.querySelector("#first");
// console.log(inputs);
// console.log(firstInput);


// #2 -----------------------------------------------
// let title = document.querySelector(".title-head");
// title.textContent = 'i love my mom';
// title.style.color = 'yellow';


// #3 -----------------------------------------------
// let moretext = document.querySelector(".more-text");
// let newtext = document.querySelector(".new-text");

// moretext.classList.add("active");
// newtext.classList.remove("new-text");

// console.log(moretext.classList);
// console.log(newtext.classList);


// #4 -----------------------------------------------
let input = document.querySelector("#first").value,
    text = document.querySelector(".more-text");
const fn = function(input){
    text.innerHTML = input * 4;
};
fn(input);


// #5 -----------------------------------------------
// let inputs = document.querySelectorAll(".inputs"),
//     obj = {};
// obj.age = inputs[0].value; 
// obj.Surname = inputs[1].value;
// obj.name = inputs[2].value;
// obj.atFarhter = inputs[3].value; 

// console.log(obj);


// #6 -----------------------------------------------
// let image = document.querySelector("img");
// image.src = './img/second.jpg';


// #7 -----------------------------------------------
// let third = document.querySelector(".third"),
//     fourth = document.querySelector(".four-img");
// if(third.classList.contains('beautiful')){
//     third.style.display='none';
//     fourth.style.display='block';
// }                          


// #8-----------------------------------------------
// for(let i = 1; i<=4; i++){
//     let checkbox = document.getElementById("#"+i);
//     if(checkbox.checked==true){
//         checkbox.checked = false;
//     } else{
//         checkbox.checked = true;
//     }
// }
