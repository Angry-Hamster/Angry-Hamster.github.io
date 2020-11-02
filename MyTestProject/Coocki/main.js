// let input = document.querySelector('.input');
// input.value = document.cookie
// document.addEventListener('DOMContentLoaded', function(){
//     input.addEventListener('input',function(){
//         console.log(input.value);
//         document.cookie = input.value
//     });
// });


let btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    let input = document.querySelectorAll('.input');
    let cookies = document.cookie;
    input.forEach(item =>{
        item.value = cookies.shift();
    });
});

document.addEventListener('DOMContentLoaded', function(){
    let input_value = [];
    let input = document.querySelectorAll('.input');
    input.forEach(item =>{
        input_value.push(item.value)
    });
    document.cookie = input_value;
});