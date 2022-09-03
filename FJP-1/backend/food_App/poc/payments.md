## Steps
### Backend - : Checkout 
* signup /login into razorpay account
* go to settings in dashboard
* click on API keys option
* generate API Key 
* npm i razorpay 
* create instance by passing public key and private key
* create the order with amount ,currency , recipet and notes

**NOTE**: 
* We only serve html file from a defined folder .
* TO enable that feature we have use express.static
 ### Frontend :
 * Import cdn of razorpay
 * add event lsitener to make a backend request to generate a checkout order
 * get deatils from there 
 * open checkout page

### Backend :validation -> to tell backend whether payment was done or not
* We need to create a webhook or a route where razorpay would make a request for validation
* Note : Route should be deployed (public)
* for the time being we are using ngrok  
* To start Command : ngrok http [portNumber] 
**Setup WebHook**
* go to setting page of razorpay admin panel
* webhook create -> with https route and a webhook secret
  