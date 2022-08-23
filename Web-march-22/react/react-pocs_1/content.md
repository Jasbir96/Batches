## Content 
* useEffect -> inp: function , dependency array
        a.) without dep array : exec it's fn  after first render 
            & on every re-render (on every state change)
        b.) with empty dep array : exec it's fn  after first render only (once)
        c.) with dep array containg dep: exec it's fn  after first render & 
            on dep state variable change 
* useState -> to get new state using  previous state
  * you should use a callback function inside useState 
    that is provided by react itself

* useReducer and useState 
  * there is no diff in terms of end result 
  1. input : reducer function, initalState | inital state
  2. output :  state var , state change fn using reducer | state var , state change fn  
  3. handler logic : all the logic is inside your reducer | it's in diff handler fn                              
  4. prev state :by default  handled | you need to use callbacks 
  5. state change : common dispatch fn with different action | different fn call 
  6. state handling : complex state changes  | simple state change  & that are local 

* useReducer 
1. input : reducer function, initalState
2. ouput : state variable , dispatch
3. reducer function : input -> state, action(dep upon req -> string/obj)
4. action -> is used with properties : 
   1. type-> to tell reducer which case to run
   2. payload -> data to passed to the reducer

