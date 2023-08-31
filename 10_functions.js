function sayMyName()
{
    console.log('v')
    console.log('a')
    console.log('r')
    console.log('u')
    console.log('n')
}
// console.log(sayMyName())

function calculateCartPrice(...num){ //this operator is called both rest and spread depending on it's use case  
/*
iska simple sa yeh matlab hai ki jitne bhi arguments aayenge iske function call ke waqt,
sabko ek array mein baandh ke dedo, jaise 2 array ko concat ke liye use karte the ki
glass ko pehle piece piece mein tod diya then sabko jod diya, yahan direct sabko jodne ka
hi kaam ho raha hai .
*/
// return num so num yahan pr ek array ban chuka hai.
let sum = 0
for(let i = 0;i<num.length;i++)
{
    sum=num[i] + sum
}
return sum
}
console.log(calculateCartPrice(100, 200, 500))

// aise bhi likh sakte hai rest operator ko
function calculateCartPrice1(val1, val2, ...num)
{
    let sum = val1 + val2
    for(itemPrice in num) // kuch locha ho rela hai idhar
    {
        console.log(itemPrice)
        sum =itemPrice + sum
    }
    return sum
}

// console.log(calculateCartPrice1(500,300,200,2000))

//agar object paas karne hai hai toh
const user = {
    name: "varun",
    price: 1
}
function handleObject(anyObject)
{
    console.log(`hello ${anyObject.name} , your debit amount is ${anyObject.price}`)
}
console.log(handleObject(user)) // isko console.log karenege toh undefined aayega because kuch value return nahi kar rahe

// object direct argument mein hi bana lo
console.log(handleObject({
    name:"varun",
    price: 2
}))

function one(){
    let username = "varun"
    function two(){
        console.log(username) // nested function global variable ko access kar sakte hai.
    }
    two()
}
one()

// ek concept aata hai hoisting ka that is basically tum function ko define karke
// kahin bhi call kar sakte ho but agar tumne function ko aise define kiya hai toh
// variable initialise karne ke baad hi tum function ko call kar sakte ho.

// console.log(funcOne())
const funcOne = function(){
    return ("hello")
}
console.log(funcOne())
