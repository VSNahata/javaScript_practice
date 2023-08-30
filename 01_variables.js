const num = 2
let varun = "good"
var isHonest = true // var ko hm kisi aur scope ke andar redeclare nahi kar sakte that 
// will give an error.

console.table([num, varun, isHonest]) // haina print karane ka cool tareeka

for(let varun = 0;varun<2;varun++)
{
    //varun ka yahin pr ek scope bana jo upar waale varun ko override kar diya
    // and scope yahin pr khatam ho gaya
}
console.log(varun)
if( isHonest == true)
isHonest = false
console.log(isHonest)
for(var  num1 = 0;num1<5;num1++)
{

}
console.log(num1)
for( var num1 = 3;num1<4;num1++)
{

}
console.log(num1)