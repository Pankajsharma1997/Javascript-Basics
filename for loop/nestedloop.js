
// Nested Loop 
for(Pankaj=1; Pankaj<=4; Pankaj++)
{
   for(Sharma=1; Sharma<=4; Sharma++)
      {
        console.log(Pankaj,Sharma)
      }  
   
}





function printNumberPattern(rows) {
    let pattern = '';
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += j;
        }
        pattern += '\n';
    }
    console.log(pattern);
}
console.log("Number Pattern:");
printNumberPattern(5);


function printStarPattern(rows){
    let pattern ='';
    for(let i =1; i<=rows; i++){
         for(let j=1; j<= i; j++)
         {
            pattern += '*';
         }
         pattern += '\n';
    }
    console.log(pattern);
}
console.log("Star Pattern:");
printStarPattern(5);




