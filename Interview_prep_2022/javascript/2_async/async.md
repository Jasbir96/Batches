# async Arch 
* CallStack : 
  * all the code that is written in js will run here. 
  * callStack does not wait for an async task completion
* Node API/ Web API: all the async tasks like below execute or waits in apis area : 
  * timers : setTimeout, setinterval
  * HTTP request :
    * Browser : XMLHTTP request [callback], fetch[promise] 
    * nodejs : HTTP -> callback based and promise based on
  * async crud functions
  * Browser eventlistener 
  * DB queries 
* waiting queue : all the callback of async functions are enqueued before being  executed on the call stack
* Event loop : 
  * it is an infinite loop that constantly checks your queue for cb functions if there is one and the stack is empty then it will push that function to the stack for execution 
  * event loop will always wait for callstack to be empty then only it will push the cb function in the callStack

## Terms
  * Task
    * independent task : serially or prallely -> best way is to do it paralley (task)
    * depndent task : serially (task)
  * Functions
    * synchronous : the function in which all the lines are executed in a serial order 
    * asynchronous  : the function in which the inital and later part is executed intially and the between part is executed later 
  
* When you have to do dependent tasks with async functions -> order of async function should be in serial 






