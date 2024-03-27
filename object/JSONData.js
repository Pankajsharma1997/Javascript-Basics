// JSON Data Format 

const user ={
    name: "Pankaj",
    age: 100,
    gender:"Male"
}

//  Change Object data to the JSON format 
//  Note: Why use the JSON format data the JSON data format is used for the send and fetch the data to the server 


const JsonData = JSON.stringify(user);
console.log(JsonData);

// Change the JSON Format data to the object 
console.log(JSON.parse(JsonData));

//  Note:  JSON.parse() method is used to change the JSON data to the Object data.