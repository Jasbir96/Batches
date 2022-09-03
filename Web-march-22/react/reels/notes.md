# Reels

## pages
* Login
* Signup
* Home
* Profile
## Tech stack
* React 
* Styling : material UI
* Routing : React router dom
* Auth state management: Redux
* Backend : Auth ,db, storage : firebase : 8

## 30/08/2022
* SETUP
  * npx create-react-app reels
  * npm  i firebase@8.0.0  react-router-dom@5.2.0 redux react-redux redux-thunk
* Login Page : 
  * React : input form connect with firebase 
  * Firebase :
    * Firebase service used : Firebase auth : sign method -> login 
    *  auth enable , emailId ,password: enable
    *  Fields -> empty, 
    *  Login failed :error message  : Later  
  
  ### Pending 
    *  Routes  
    *  if login successfull  : Home Page 
  * Signup Page 
    * Input
      * email
      * Password
      * Name
      * Image 
    * Steps
      * signup -> auth function firebase : createUserWithEmailAndPassword 
      * user data store -> firestore -> Part-1
        * firestore enable : firebase console
        * user create 
      * image upload -> firebase storage
      * FirebaseStorage -> enable   
      * user data store + image link store-> firestore -> Part-1
 * Adding redux with firebase 
   * npm i redux react-redux redux-thunk react-redux-firebase redux-firestore
      