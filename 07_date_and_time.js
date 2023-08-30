// aage date ke liye proposal chal raha hai temporal library ke through , so keep checking.
// but filhal date object se hi kaam chalana padega.
 let curDate = new Date()
 let curDate1 = new Date("2023-01-23")
 console.log(curDate1.toDateString()) // ek baar sabko print kara ke dekh lo samajh aa jayega
 console.log(curDate)
 console.log(curDate.toString()) // suprisingly numbers ko name de diya ki kon sa day hai.
 console.log(curDate.toISOString()) // isse toh koi farq hi nahi pada
 console.log(curDate.toJSON().Date) // it is giving undefined , coz it doesn't have a property of date.
 
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(curDate.getTime() - myTimeStamp);
console.log(`${myTimeStamp} is the time`) // cool way to print variable + string and also readable

// explore more about this technique, kinda helpful
console.log(curDate.toLocaleString('default',{
    weekday: "long"
}));