Home Work Assignment #2

Environment variables can be changed in config.ts.
For staging there are configuratons for stripe and mailgun. Please put your data

You can run the app by node index.js or NODE_ENV=staging node index.js

Following APIs are defined

/////////// Login /////////
POST: localhost:3000/login 
Data: {email: '', password: ''}

/////////////////////////////

//////// Logout //////////
GET: localhost:3000/logout
token is required in headers
/////////////////////////

////////Create User /////////
POST: localhost:3000/users
Data: {name: '', email: '', 'street_address': '', 'password': ''}
///////////////////////////

/////// Update User/////////
PUT: localhost:3000/users
Data: {name: '', email: '', 'street_address': '', 'password': ''}
email is required and token in headers is also required.
//////////////////////////

///////// Get User/////////
GET: localhost:3000/users?email=...
token is required in headers.
//////////////////////////

////////// Delete User ////
DELETE: localhost:3000/users
token is required in headers
///////////////////////////

//////// To update token///////
PUT: localhost:3000/tokens
Data: {token_id: '', extend: ''}
////////////////////////////

///////Menus///////////
There is a file in /lib menus.js where hardcoded menues are defined. Respons will be menus array and id of each menu will be used for order api.
GET: localhost:3000/menus
token is required in headers
////////////////////////

//////////Order////////
GET: localhost:3000/order?items=item_1_id, item_2_id,....
token is required in headers.
////////////////////



