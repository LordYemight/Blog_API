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


Sample ID = "64ac01d819d20312a25c39f2"

Get all users - `GET` (localhost:6000/api/users)

Get a particular user - `GET` (localhost:6000/api/users/:id)

Update a Particular user (username and email) - `PUT` (localhost:6000/api/users/:id)

Get all posts - `GET` (localhost:6000/api/posts)

Get a particular post - `GET` (localhost:6000/api/posts/:id)

Update a particular post (title and content) - `PUT` (localhost:6000/api/posts/:id)

Delete a particular post - `DELETE` (localhost:6000/api/posts/:id)


## Sample Post Data
"allPost": [
        {
            "creators_Name": {
                "username": "Adisa"
            },
            "_id": "64ac01d819d20312a25c39f2",
            "title": "First Post",
            "content": "Nothing is impossible.",
            "createdAt": "2023-07-10T13:58:57.955Z",
            "__v": 0
        },
        {
            "creators_Name": {
                "username": "Adisa"
            },
            "_id": "64ac113ef824bc874c85f295",
            "title": "Life is a teacher",
            "content": "Life is a teacher, as you grow and experience life, the more you learn.",
            "createdAt": "2023-07-10T15:08:27.529Z",
            "__v": 0
        }
    ]
}
