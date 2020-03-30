// #1
// const hello1 = function(){
//     console.log('Привіт JavaScript');
// };

// hello1();


// #2
// const hello2 = function(name){
//     console.log('hello ' + name);
// };

// hello2('Василь');


// #3
// const mul = function(n, m){
//     console.log(n * m);
//     console.log(n + m);
//     console.log(n - m);
// };

// mul(10, 5);


// #4
// const repeat = function(str, n){
//     for(let i=0; i<n; i++){
//         console.log(n);
//     }
// };

// repeat("", 2);


// #5
// const avg = function(...a){
//     let total = 0;
//     let count=0; 
//     for(const argument of arguments){
//         total += argument;
//         count++;
//     }
//     console.log(total / count);
// }

// avg(5, 10 ,15 , 20, 25);


// #6
// const m = function(a, b){
//     const mul = function(a, b){
//         console.log(a+b);
//     };
//     mul(a, b);
// };

// m(3, 7);


// #7
// let o = function(m, n){
//     console.log(n + m);
// };

// const operation = function(m, n ,o){
//    o(m, n);
// };

// operation(5, 10, o);


// #8
// const addN = function(n){
//     const newFn = function(n){
//         console.log(n+n);
//     };
//     newFn(n);
// };
// addN(10);