// JavaScript Object & javaScript Manipulation 

const user = {
    name: 'Pankaj Sharma',
    age : 25,
    hobby: 'Playing Chess',
}
console.log(user);

// Access a Perticuler item from the object via two types first  is dot notation , break notation 

// Access the name from the user object using dot notation 
console.log(user.name);

// Access the age from the user object using the break notation 
console.log(user['age']);


// Add 
user.email = 'pankajsharmabca16@gmail.com'  // Add the email in the user object using the dot notation 
user['phone'] = 8894597426 

// Update  update the phone number
user.phone = 8988235880 


// Delete 
delete user.age;


console.log(user);
