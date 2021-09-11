* Promise => assurance of a work that could be completed in future.
* future value inside that promise is 
determined by the function that returns the promise
* promise-> initial state-> pending, value -> undefined
            final state-> settled     
                resolved -> you have got the future value 
                rejected-> error

* to consume a promise we have two **Synchronous function** then and 
 catch.They are used to register cb function on that promise.
* cb functions passed inside then and catch are **async**
* scb function attached by then can only be executed when a promise is resolved ,
  fcb function attached by catch can only be executed when a promise is rejected
* every then and catch also returns a promise
* the promise returned from that then depends upon the cb function inside that then
* final state of promise returned from then/catch depends upon value 
 returned from there cb => 
  if cb returns then your promise will resolve into 
                        val=>val 
                        nothing=> undefined 
                        Error-> error
                        Promise-> promise
* why are promises are actual better then callbacks
* promise cb priority is more then normal async fns
* promise can be resolved /rejected once in a life time                         