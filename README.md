# REST-API-in-NEXT.js

<h1>Topics</h1>
<h4>Create next.js 14 project</h4>
<h4>API folder /files structure in next.js 14+ app directory</h4>
<h4>Connecting with database </h4>
<h4>Build relational data models </h4>
<h4>Build API endpoints </h4>
<h4>Add filtering , searching , pagination </h4>
<h4>Protect API's</h4>
<h4>Middlewares </h4>
<h4>Deployment </h4>

<h1>Steps </h1>
->api/user will the name of the URL of the API and make a file route.ts
(name should be the same )

->api / (auth )/users will be the name of the URL of the API and make a file route.ts
(the bracket should not be count )

->Create a custer in Mongodb and add the mongodb url in the .env file

->create a lib folder and add db.ts file in it to connect to see the database connection status

->create a model folder and add user.ts file in it to create a user model in lib/models/users

->Create a get request in routes.ts file to get all users from the user model and run the code
![alt text](image.png)
-> the user is created in the collection that means our DB connection is successful

-> Go to the postman and
![alt text](image-1.png)
