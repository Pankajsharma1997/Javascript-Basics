// Object Destructuring  
const user ={
    name :'fuman',
    age:99,
    gender:'Male',
    favBook:{
        BookName: "My Experiment with Truth",
        BookAuthor: "M.K Gandhi"
    },

};
const{name, age, gender,favBook} = user;

console.log(name);
console.log(age);
console.log(gender);
console.log(favBook.BookName);
console.log(favBook.BookAuthor);

