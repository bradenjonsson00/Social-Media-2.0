# Social Media 2.0

## Introduction
Basic social media website, where users can login and make posts.  
An exercise in full-stack development, with js, react, python, flask, and sqlite.

## Notes
Front end uses HTTP requests to interact with the server/database.  
Uses JSON in HTTP requests to communicate.

I used react-router to manage the different pages before I started the backend.  
Flask is used to handle http requests for the database. I chose flask because I had used it before. 

## Funcionality
#### User Management
Users can sign up or log in. This is done by sending a POST request to the server.  
The server interacts with its database  and tells the front end what to do in response.  
Once the user is signed in, they stay signed in with cookies, until they sign out.
