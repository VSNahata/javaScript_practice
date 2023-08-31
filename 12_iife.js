// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // iife ke last mein semicolon lagana padta hai coz usko pta nahi hota ki execution kahan rokna hai.
let name = "varun"; // as we can see ki name global variable se pollute nahi hua 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// iska syntax boht hi asaan hai like (iske andar function ki defination)(iska matlab turant execute karko and jo arguments daalne hai woh bhi yahan hi daal do)