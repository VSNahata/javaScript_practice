const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // here this refers to the current object
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"   
//     console.log(this.username);   jo hmara context hai woh objects ke andar hi kaam karta hai aise functions ke andar undefined de dega. 
// } // here this refers to global object which is empty

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {  //arrow function use karna hai toh paranthesis ke aage se function keyword hata do and paranthesis ke baad arrow laga do.
    let username = "hitesh"
    console.log(this); // ya bhi empty braces hi print hoga..same as ki this ko function ke andar koi context nahi mil raha hai
}


// chai()

// const addTwo = (num1, num2) => { // yahan chahte toh addTwo waale variable ke bina bhi define ho jata
//     return num1 + num2        //braces ke andar return keyword ka use liya jaata hai, jabki paranthesis ke andar nahi
// }

const addTwo = (num1, num2) =>  num1 + num2  //same line ka code hai toh understood hai isi ko return karna hai

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"}) // object ko return karne ke liye usko braces mein wrap karna hi padega..halaki paranthesis ke andar hi hai toh return keyword nahi likhna pada


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()     