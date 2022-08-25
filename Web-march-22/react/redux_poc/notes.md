# Redux 
* Code Flow
* Uscase 
* terms : statements 
# Steps 
* npm i redux react-redux
* create redux folder
* create a reducer file 
  * pass inital state to reducer function  
* create store.js  -> 
  * import createStore : function -> **redux** 
  * put your reducer into that createStore
* Go to app.js 
  * import store from store.js 
  * import Provider from **react-redux** lib
  * put store in front of store prop
* Go to component
  * import connect from **react-redux**
  * create two function 
    * map state to props -> store 
    * map dispatch to props -> dispatch function
  * recieve state and handler functions as props and use normally
## In case of multiple reducers 
  * create your reducer normally 
  * go to store.js 
    * import combine reducer from **redux** 
    * put all the reducers to combine reducer and give nick name to them 
    * go to each component using those reducer 
      * and go to mapStateTOProps
        * instead of returning whole store 
        * return store.(it's nickname specified in store.js)

## Terms 
  * reducer : it a fxn & 
    * input :  inital state & actions
    * initally it return the inital state 
    * reducer contains all the state change possiblities 
    * it can only be intercated by a dispatch function
    *  in case of multiple reducers all the action type will be matched
  * dispatch : it is used to interact with reducer to change the store 
    * you can pass two params
      * action : that will be matched to do a state change
      * payload : to provide some data to the reducer
  * store : It is central storage of all the current  state recievd from the reducers  
    * It can't be changed directly 
    * Redux can only have one store  
  *  Provider : It is a wrapper that wrap the whole app 
  *  connect : It is used to connnect provider with the component 
  *  MapstateToProps: 
     *  provides store state  as a props to your component 
     *  always recieves the current state of the store on any change
     *  If the previous state of store if diff then it will pass new props to your component and re-render
  * MapDispatchToProps : 
    * provide dispatch function that enable interaction b/w component and reducer
    * it provide handler function as props   
   