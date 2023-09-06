# Blog_API
## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your machine:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- Git: [Download and Install Git](https://git-scm.com/)

## Installation
- Clone the repository into your local directory:

- git clone 'repo-url'
- cd 'project-directory'
- npm install
   
Create a .env file in the root directory and store the following:
 
- MONGODB_URI=Insert the correct connection URL for your MongoDB database.
- port=3000  # Replace with your desired port number.
- SECRET_KEY=for your jwt token. 

## Technologies Used
Some of the technologies used in the development of this web application are as follow:
- MongoDB Atlas: It provides a free cloud service to store MongoDB collections.
- Node.js: A runtime environment to help build fast server applications using JS.
- Express.js: A popular Node.js framework to build scalable server-side for web applications.
- Mongoose: An ODM(Object Data Modelling)library for MongoDB and Node.js
- Dotenv: This library is used for managing environment variables in your Node.js applications. It stores sensitive or configuration-related information (such as API keys, database URLs, or secret keys) in a separate `.env` file. This helps keep the application's configuration secure and separate from your codebase.
- Joi: Joi is a validation library for JavaScript applications, particularly useful in the context of APIs and form validation. 
- Jwt: It is used to ensure the integrity and security of information between a client and a server. JWTs are signed with a secret key on the server to ensure their authenticity and integrity, and they are commonly used to protect routes and endpoints, ensuring that only authorized users can access certain parts of your application.


  
## How to Use the App
register (localhost:6000/api/auth/register) - `POST`
```json
{
  "name": "Tunde Adigun",
  "email": "example@yahoo.com",
  "password": "Dlare1234",
  "repeat_password": "Dlare1234"
}

Log-in (localhost:6000/api/auth/login) - `POST`
```json
{
  "email": "example@yahoo.com",
  "password": "Dlare1234"
}


Upload Product (localhost:6000/api/posts) - `POST`
```json
{
  "title": "My first post",
  "content": "We are what we think about and believe"
}


Sample ID = "64ac9d82cb41594a3b415884"

Get all users - `GET` (localhost:6000/api/users)

Get a particular user - `GET` (localhost:6000/api/users/:id)

Update a Particular user (username and email) - `PUT` (localhost:6000/api/users/:id)

Get all posts - `GET` (localhost:6000/api/posts)

Get a particular post - `GET` (localhost:6000/api/posts/:id)

Update a particular post (title and content) - `PUT` (localhost:6000/api/posts/:id)

Delete a particular post - `DELETE` (localhost:6000/api/posts/:id)


## Sample Post Data
{
    "allPost": [
        {
            "writerName": {
                "username": "Agibade"
            },
            "_id": "64ac9d82cb41594a3b415884",
            "title": "The Importance of Regular Exercise",
            "content": "Regular exercise is essential for maintaining a healthy lifestyle. It not only improves physical fitness but also has a positive impact on mental well-being. Engaging in physical activities such as jogging, swimming, or cycling helps strengthen muscles and improves cardiovascular health. Additionally, exercise releases endorphins, which are natural mood boosters, leading to reduced stress and increased happiness. It also aids in weight management and promotes better sleep patterns. Make exercise a part of your daily routine and experience the multitude of benefits it offers",
            "createdAt": "2023-07-11T01:04:34.432Z",
            "__v": 0
        }
    ]
}
