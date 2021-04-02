# Facts
* promise is just another way of doing async programming
* promise is a token that represents a future value ,and state 
* future value inside that promise is determined by the function that returns the promise
* promise-> initial state-> pending
* promise -> 
        final state-> 
            resolved -> you have got the future value
            rejected-> error
* to consume  a promise we have two **Synchronous function**
then and catch. They are used to register cb function on that promise
* cb functions passed inside then and catch are async
*  promise can only be rejected or resolved once in a lifetime 
*  then -> can accept upto 2 optional callbacks->  then(scb,fcb)
                    first -> success callback
                    second -> failure callback
* catch is nothing but  then(undefined,fcb); 
* every then and catch also returns a promise
* final state of promise returned from then/catch depends upon value returned from there cb =>scb,fcb 
 if cb returns then your promise will resolve into 
     val=>val 
    nothing=> undefined 
    promise=> promise 
