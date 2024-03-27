// Exercise Total Salary 
const salaries = {
    Pankaj:28000,
    Rohit :15000,
    Mahipal : 3500,
    Charnjeet: 25000,
    Dogra : 1100,
}
let sum = 0;

// sum using for in loop 

// for(let key in salaries){
//     console.log(key, salaries[key])

//     sum = sum + salaries[key];   
//     // sum += salaries[key];

// }

// sum using for of loop 
for(let val of Object.values(salaries)){
    sum += val;
}
console.log(sum);
