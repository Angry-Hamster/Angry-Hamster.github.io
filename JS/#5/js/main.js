// #1
// let Arr1=[1,5,'4','hello'],
//     Arr2=[true,2,{},['a'],222];

// console.log(Arr1[1]);
// console.log(Arr2[1]);
// console.log(Arr1[1]+Arr2[1]);


// #2
// let Arr1=[1,5,'4','hello'];

// Arr1.push(22);
// for(let i=0; i<Arr1.length; i++){
//     console.log(Arr1[i]);
// }


// #3
// let Arr2=[true,2,{},['a'],222];

// for(let Arr of Arr2){
//     console.log(Arr);
//     console.log(typeof Arr);
// }


// // #4 не забуть +5
// const matrix = [
//     [10,11,12], 
//     [13,14,15], 
//     [16,17,18] 
// ];

// for(let i=0; i<matrix.length; i++){
//     console.log(matrix[i]);

//     for(let j=0; j<matrix[i].length; j++){
//         console.log(matrix[i][j]);
//     }
// }


// #5
// const message = 'Welcome to Ukraine!';
// masiv=message.split('');
// console.log(masiv);
// console.log('index '+masiv.indexOf('l'));
// console.log(masiv.join(''));


// #6
// let stack=[];
//     first=[2,3,4],
//     second=[5,6,7,8];

// for(let i=0; i<first.length; i++){
//     stack.unshift(first[i]);
// }


// for(let i=0; i<second.length; i++){
//     stack.push(second[i]);
// }

// console.log(stack);


// #7
// let stack=[4, 3, 2, 5, 6, 7, 8],
//     lastNumbers=[];

// lastNumbers = stack.splice(stack.length-3, stack.length);

// console.log(stack);
// console.log(lastNumbers);


// #8
// let animals=['pig','dog','cat','parrot','chicken'],
//     pets=[];
// pets = animals.splice(2, 4);

// console.log(animals);
// console.log(pets);


// #9
// let pets=["cat", "parrot", "chicken"];
// pets.splice(2, 0, 'shark', 'elephant');
// console.log(pets);