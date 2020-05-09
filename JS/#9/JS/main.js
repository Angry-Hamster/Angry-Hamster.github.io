// #1
// const fn = function(){
//     event.preventDefault();
//     alert('ти натиснув на кнопку');
// };
// let clikc = document.querySelector('.sbm');
// clikc.addEventListener('click',fn);

// #2
// const fn = function(){
//     let shavuha = document.querySelector('.shavuha');
//     shavuha.classList.toggle('hide');
// };
// let toogle = document.querySelector('.toogle');
// toogle.addEventListener('click',fn);

// #3
let input = document.querySelector('.phone');
input.addEventListener('input',function(){console.log(input.value);});

// #4
// let input = document.querySelector('.phone');
// input.addEventListener('blur',function(){console.log(input.value)});

// #5
// document.addEventListener('DOMContentLoaded',function(){alert('сторінка завантажена')});

// #6
// let obj = {};
// const loadFunc = function(){
//     let clikc = document.querySelector('.sbm');
//     clikc.addEventListener('click',function(){
//         obj.name = document.querySelector('.name').value;
//         obj.phone = document.querySelector('.phone').value;
//         console.log(obj);
//     });
// };
// document.addEventListener('DOMContentLoaded',loadFunc());

// #7 
// let imeg = document.querySelector('.shavuha');
// imeg.onmouseenter = function(){
//     alert(imeg.src);
// };

// #8
// let clikc = document.querySelector('.sbm');
// clikc.addEventListener('click',function(){
//     let name = document.querySelector('.name').value;
//     if(name == 'Сергій'){
//        alert('You win!');
//     } else{
//         document.querySelector('.name').value = '';
//     };
// });
