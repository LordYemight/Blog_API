# Blog_API

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
