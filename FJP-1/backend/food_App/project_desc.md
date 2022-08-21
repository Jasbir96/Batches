# Meal Plans delivery website -> EatFit clone
## pages
* Home : ❓
    * Majorly Static
    * Top 3 Plans
    * Top 3 reviews
* User
  * Login Page 
  * Signup Page 
  * Forget Password 
  * ResetPassword Page 
  * Profile Page
      * user details : Email ,Name,img
      * Booked Plans ❓
* Plans❓
  * All Plans
  * Plan Details
    * Discreption of the plan
    * Buy Now Button
    * Reviews
* Rest api , Improving response  
## Backend Architecture:  MVC architecture , REST API
## Database : MongoDb,Mongoose
## Authentication : Json web token 
## 3rd party : 
        * Payment GateWay:RazorPay
        * Email:  nodemailer,gmail 
## Testing : Postman
## Frontend : React, Backend : Express
## Deployment : 
    * Backend :Heroku 
    * Frontend : Netlify
    * Codebase : Github
    * Database server : MongoDB Atlas 
* Futher improvement : videos, feedback ,meal level 

## 9/aug/2022
* How to send automated Email via nodejs -> nodemailer
  * email : html and css -> inline , modern css doesnot work in email
  * mail send -> nodemailer, transport -> gmail
    * 1st step : gmail  app -> app id ,apppasword 
      * go to your google account -> 
      * go to signing in-> enable 2 factor authentication
      * App_password -> generate new app password
  
    * template -> string form html 
    * node mailer use -> send the mail 

* Integrate our frontend to our backend -> 
    *  postman vs frontend
     * request button-> request || ui button press -> request + loader
     * response you will get    || response you will -> then you have do some change on ui
  *  React code explain  (except->home, plans,planDetails)
     *  Step -1 add backend url as proxy to react package.json
     *  Step- 2 structuring 
        *  Top : Header -> Home,plan,login/ user profile
        *  Different Pages
           *  signup page, profile,login ,forgetpassword 
     * AuthProvider:
       *  sync -> if you have a user or not on login and logout 
       * It also exposes you lossley coupled auth functions -> all the are together 
     * Signup Page:  completed
     * Login Page : Completed   

## 11/aug/2022
* login , signup (backend frontend)->bugs -> status code addition
 * Profile Page -> ui -> backend -> ui link
 * Forget password and reset Password -> ui

## 21/aug/2022
 * Rectifying status code error ->axios  ✔
 * Adding Plans to your backend :(skeleteon code)
  1. We are using mvc architecture 
     1. api level -> main sub-route with your router
     2. create a planRouter -> remaining route & associating controller fns
     3. create controller functions -> 
        1. get,update,delete, 
        2. create getall
     4. create model -> db schema 
 * you first fill your model -> controller -> router
 * Usage : send data to a particular and following your schema  
 * Plans Schema : name,duration,price:discount
  
 * All Plans Page creation
 * Deployment + stripe integration / razorpay  
 * Bought plan  -> fall back route 
 * To be added later :  reviews-> later, averagerating
# 22/aug/2022
* Presisting Login -> JWT and may i will be local storage
 
  


