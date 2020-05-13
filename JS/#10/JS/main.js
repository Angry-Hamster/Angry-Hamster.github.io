// #1
// let Arr = [1,2,3,4,5,6];
// Arr.forEach((item) => {
//     console.log(item+1);
// });

// #2
// let button = document.querySelector(".sbm"),
//     foreach = document.querySelectorAll(".foreach");

// button.addEventListener('click',function(){
//     foreach.forEach((item) => {
//         console.log(item.value);
//     });
// });

// #3 
// let inputs = document.querySelectorAll(".foreach");
// inputs.forEach((item, i) => {
//     item.addEventListener('click',function(){
//         console.log(item);
//     });
// });

// #4 
// let block = document.querySelectorAll(".block");
// block.forEach((item, i) => {
//     item.addEventListener('click', function() {
//         item.classList.toggle('active');
//         console.log(i+' element');
//     });
// });

// #5
let block = document.querySelectorAll(".block");
block.forEach((item) => {
    item.addEventListener('click', function() {
        console.log(item);
    });
});

// #6
// let inputs = document.querySelectorAll("input");
// inputs.forEach((item) => {
//         item.checked = true;
// });

