// #1
// let object = {
//     name: 'Ivan',
//     age: 13,
//     Rid: false,
//     married: false,
// };


// #2
// let object = {
//     name: 'Ivan',
//     age: 13,
//     Rid: false,
//     married: false,
// };

// object.programming_language = 'Java Skript';
// delete object.Rid;


// #3
// let object = {
//     parameter1: 4,
//     parameter2: 6,
//     fn: function(a, b){
//         return (a+b);
//     }
// };
// console.log(object.fn(object.parameter1, object.parameter2));


// #4
// let object = {
//     name: 'Ivan',
//     age: 13,
//     Rid: false,
//     married: false,
// };

// const fn = function(object){
//     for (const key in object) {
//         console.log('Key: ', key);
//     }
// }

// fn(object);


// #5
// let object = {
//     name: 'Ivan',
//     age: 13,
//     Rid: false,
//     married: false,
// },  
//     str='';

// for (const key in object){
//      console.log(key+': '+object[key]);
//      str=str+object[key]+', ';
// }
// console.log('keys: '+str);


// #6
let cafe = {
    name: 'Republic', 
    width:200, 
    height: 300, 
    personal:5, 
    hr: true 
},
    parameter=[];

for (let [key, value] of Object.entries(cafe)) {
    console.log(`${key}: ${value}`);
    parameter.push(`${value}`);
}
console.log('площа будівлі: '+parameter[1]*parameter[2]+' м²');
