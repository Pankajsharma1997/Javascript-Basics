  //  object methods and this keyword 
  const user ={
    name :'Pankaj Sharma',
    age : 25,
    isMarried: false,
    friends:['Sanket', 'sahil'],
    calculateAge:function (){
        //  console.log(`I am Pankaj Sharma Don ${this.age} years old`)
    }
  };
  user.calculateAge();


  // Traversing Object 

  const user1 ={
    name  : 'Rohit',
    age   :  23,
    isMarried: true ,
    email: 'shada@gmail.com',
    phone: 9819089889
  };

// first way  for in loop 
  for(let key in user1){
    console.log(key, user1[key]);
  }
  // Second way  for of loop 
   for(let val of Object.values(user1)){
     console.log(val);
   }

  // Third way 
  console.log(Object.keys(user1));
  console.log(Object.values(user1));

  