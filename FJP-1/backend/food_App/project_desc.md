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
 * deployment 
# 22/aug/2022
 * To be added later :
  * TO add review feature
    * create reviewModel :  
      * desc,rating,createdAt,
      * userId with ref  to userModel and planId with ref  to PlanModel
    * update PlanModel with two new properties
      * array of reviews : which review are done for your plan
      * averageRating : 
    * implementaiton: 
      * create review 
        * review send all the above entries 
        * review's id is added to that plan for quick access
        * average rating of that plan is also updated with
           the help of current rating 
      * get review 
        * Find -> populate your planId and userId to get data about them
# 4th/sep/22
* Deployment 
* Bought plan + integration razorpay-> fall back route
*  HomePage completion 

## Deployment 
   * Backend: (Heroku) 
     * Implement cors : package cors 
     * convert your code to work with both process.env ans secrets.js
         *  put process.env.[private data key ] || require("../secrets)[private data]
         * Remove static port number : process.env.PORT || 3000
     * rewrite start script in package.json ->
        scripts:{"start":"node api.js"}
     * push the code to github
     *  heroku
        *  -> signup -> create new app
        *  set Env variables
             * go to setting -> click on reveal config vars
             * enter all the secret key value pair
        *  -> go to deploy 
        *  -> Connect to a github repo -> enable automatic deploy->deploy branch
  * Frontend : netlify
    * code : add full links when making api request to backend  
    * Netlify : 
          * signup -> click on add new site -> import an existing project 
          * authorize github -> choose your repo
    * deploy : warnings are converted to errors to prevent that 
          * in next popup -> in build command put : CI=false npm run build          
## Issues
* Home Page,PlanDetails,reviews,Bookings : Dynamic version, 
* Config data hiding
* Security : Theory : integrate 
* * Presisting Login -> JWT and maybe will be local storage