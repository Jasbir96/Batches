# facts
* code in js run in top down & left right manner
* code is executed in a stack named as call stack .
* Every piece of code run inside a bubble known as execution context
* Execution context contains : Common [global Object] + [this] +  outer variables [lexically scope] and  code
    * Global object : is given by env and it is same for every Execution context 
      * Browser : Window object
      * Nodejs : Global Object
    * this : it is different for every e.c
    * Lexical Scope Outer variables : a function will treat variable that are sitting outside it's function definiton i.e jo variable function ki body ke bahar likhe hote unko hi ye outer var ki tarah treat karta hai naaki unko jo function call ke bahar hote h    

* Default Execution context : global execution context -> It is created when code starts running and it is created for the code that's in global area : [the fns and variables that are not not inside any other fn] 
* New Execution Context : It will only be created when a fn is called 
  
* Execution runs in two phases : 
  * memory allocation (hoisting): 
    * For that execution context
      * all variables will assigned : undefined
      * function statements are assigned memory in the heap 
* let var const   
