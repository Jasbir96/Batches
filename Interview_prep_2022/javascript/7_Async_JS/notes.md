<!-- is js single threaded -> yes -->
<!-- is nodejs single threaded -> Yes  -->
<!-- multithreading -> internally -> libuv-->
<!-- async architecture-->
# notes 
* Every piece of JS code will only execute on callStack
* Asynchronous functions are given by your enviornment
* Asynchronous are invoked on callStack but are executed in web/node API


## first medium to do asynchronous programming -> cb
    ### disadvantages ->  callback hell
            *  nesting of code 
            * inversion of control 
    ### Alternative:  Promises
    Solved : 
    * inversion of control -> promise can resolved or rejected only once ,
            *  and you don't need to pass a callback to     third party lib anymore, 
    *  nesting -> using chaining 
        ### disadvantage 
                * consumption syntax was difficult to understand   -> then ,catch
* https://www.youtube.com/watch?v=fyGSyqEX2dw&t=1s
* Promise.all,Promise.race



