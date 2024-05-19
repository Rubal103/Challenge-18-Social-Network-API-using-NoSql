# Challenge-18-Social-Network-API-using-NoSql


## Description

Build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. 

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Technologies used
* Node.js
* Express.js
* Mongoose
* Insomnia
* JavaScript


## Getting started
* use npm init to create a package.json file where you will create some information about the dependencies, script you will use. 
* run npm i to install all the packages. 
* run npm seed to seed all the data. 
* run npm start
* use Insomnia to make changes in the data


## Screenshots of the functionalities

* to get all users
![alt text](./images/image.png)

* to get a single user by Id
![alt text](./images/image-1.png)


* create a new user
![alt text](./images/image-2.png)


* update an existing user
![alt text](./images/image-3.png)


* delete an existing user
![alt text](./images/image-4.png)


* add a friend to the user
![alt text](./images/image-5.png)


* delete a friend from user's friend list
![alt text](./images/image-6.png)


* get all thoughts
![alt text](./images/image-7.png)


* get a single thought by Id
![alt text](./images/image-8.png)


* update an existing thought
![alt text](./images/image-9.png)


* create a new thought
![alt text](./images/image-10.png)

* delete an existing thought
![alt text](./images/image-11.png)

* add a reaction
![alt text](./images/image-12.png)

* delete a reaction
![alt text](./images/image-13.png)

## Walkthrough Video: 