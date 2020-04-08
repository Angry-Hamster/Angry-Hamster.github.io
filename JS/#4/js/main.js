// #1
// let i = 0;
// while(i < 10){
//     i++;
//     console.log(i);
// }


// #2
// let i = 0;
// while(i < 10){
//     i++;
//     if(i%2==0){
//         console.log('Число парне');
//     } else{
//         console.log('Число не парне');
//     }
// }


// #3
// let num=20;
// while(num < 28){
//     num++;
//     console.log(num);
// }


// #4
let name='';
name = prompt('Name Herous ');
while(name.length <= 6){
    name = prompt('Name Herous ');
    if(name.length < 6){
        console.log(name);
    }
}


// #5
// let massif=[5,3,6,2,4],
//     result=0;

// for (let i=0; i < massif.length; i++){
//     console.log(massif[i]);
//     result = result + massif[i];  
// }
// console.log(result);


// #6
// let massif=[-1,5,3,7,11,13,-2,-1],
//     num = 0;

// for (let i=0; i < massif.length; i++){

//     console.log(massif[i]);
//     if(massif[i] > 0){
//         num = num + massif[i];   
//     }
// }
// console.log(num);


// #7
// let massif=[1,2,3,4,5,6],
//     string='';
    
// for (let i=0; i < massif.length; i++){
//     string = string + massif[i] + '-';
// }
// console.log(string);


// #8
// let n=1000,
//     repetition=0;

// while (n >= 50){
//     n = n / 2;
//     repetition++;
// }
// console.log(repetition);
// console.log(n);