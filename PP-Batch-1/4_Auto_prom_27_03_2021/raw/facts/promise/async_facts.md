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
*  