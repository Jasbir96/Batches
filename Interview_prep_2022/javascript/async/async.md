# async Arch 

* CallStack : all the code that is written in js will run here. callStack does not wait for an async task completion
* Node API/ Web API: all the async tasks like below execute in apis area : 
  * timers : setTimeout, setinterval
  * HTTP request :
    * Browser : XMLHTTP request [callback], fetch[promise] 
    * nodejs : HTTP -> callback based and promise based on
  * async crud functions
  * Browser eventlistener 
  * DB queries 
* waiting queue :  all the callback of async functions are enqueued before being  executed on the call stack
* Event loop : 
  * it is an infinite loop that constantly checks your queue for cb functions if there is one an the stack is empty then it will push that function to the stack  
  * event loop will always wait for callstack to be empty then opnly it will push the cb function in the callStack 