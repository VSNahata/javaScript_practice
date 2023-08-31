/*
there are two kind of scenarios
["","",""]
[{},{},{}]
*/
const arr = [1,2,3,4,5]

// for (const val of arr) {
//     console.log(val)
// }

// maps
const map = new Map()
map.set("in","india" )
map.set(5,"india" )  // ek hi map mein key ka data type badal sakte hai .
// console.log(map)

for (const [key, value] of map) // same kaam object ke liye nahi kar sakte hai kyonki woh iss tarah se iterable nahi hote.
{
    // console.log(`${key} corresponds to ${value}`)
}

//objects
const myObject = {
    firstName: "varun",
    secondName: "singh",
    lastName: "nahata"
}
for(const iterator in myObject)
{
    console.log(`your name is ${iterator} ${myObject[iterator]} ${myObject.iterator}`)
}

const nums = [1, 5, 8, 9]
for(iterator in nums)
{
    console.log(iterator)
}
/*
the difference between for in and for of is 
for in -> key return karta hai , array ke case mein index (mainly used for objects)
for of -> value return karta hai , objects nahi access ho sakte isse and kyunki maps iterable nahi hai 
matlab unke index nahi hote(ab tak toh samajh hi gaye hoge ki keys ki baat kis context mein ho rahi hai)
so map ko iterate nahi kar sakte
*/

const coding = ["js", "ruby", "java", "cpp"]
coding.forEach(function (item) { // iske jagah arrow function bhi le sakte hai.
    console.log(item)   
    //hr element ab item ban ke andar aayega and function ki body ke andar jo kuch karna hai karo.
}); // callback functions ka naam nahi hota hai 

// hm chahe toh koi alag function bhi pass kar sakte hai as a callback function.
function printMe(item)
{
    console.log(item)
}
coding.forEach(printMe) // by referencce pass karna hai wahi ke wahi execute nahi karna hai.

//iske pass keys and pure array ka bhi access hota hai 
coding.forEach((item, index, arr) => {
    console.log(`${item} corresponds to the key ${index} of the array ${arr}`)
})

// ab ek jo boht common operation hai
const yehBhi =[
    {
        languageName:"cpp",
        languageFileName:"cpp"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"python"
    }
]
yehBhi.forEach( (item) => {
    console.log(`key is : ${item.languageName} and the value is : ${item.languageFileName}`)
} )