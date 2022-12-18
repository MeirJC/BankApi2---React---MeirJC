# BankApi2 - MeirJC

---

## _**Website is still under development**_

> ## Description

This is the fronend part of bank API project built using node.js, express and mongoDB.

The Github repository of the back-end part for this project is [here](https://github.com/MeirJC/BankApi2-MeirJC).

Live deployment ( _via Netlify_ ) is available [here](https://bank-project-meirjc.netlify.app/)

live deployment of the API is available at [https://bankapi-2-wa.onrender.com](https://bankapi-2-wa.onrender.com). _**(which is also the base adress for all API calls)**_

---

> ## How to use the API by itself:

### This is how every account object is stored in the database:

    {
        "_id": "639e27607310a399a4feaea0", // uniqu id of the account - auto generated
        "firstName": "Ben", // first name  - required for every account
        "lastName": "Gurion", // last name - required for every account
        "ownerID": "11111", // ownerID of the account - required for every account -
        Length of ownerID is 5 digits - just the way i defined it.
        "email": "ben@gur.yon", // email of the account owner - optional
        "balance": 100, // balance of the account - default (if not declared) = 0
        "credit": 500000, // credit of the account - default (if not declared) = 0
        "isActive": true, // is the account active  - optional, default is true
        "createdAt": "2022-12-17T20:32:32.368Z", // creation date of the account - auto genreted
        "__v": 0
    }

---

## **Get all accounts**

GET https://bankapi-2-wa.onrender.com/BankApi

## **Get specific account**

GET https://bankapi-2-wa.onrender.com/BankApi/getaccount

Request body:

{"id": "639de29ec9a0404b03c76f39"}

## **Get all accounts by ownerID**

GET https://bankapi-2-wa.onrender.com/BankApi/getallbyowner
Request body:

{"ownerID": "12345"}

## **Add an account**

POST https://bankapi-2-wa.onrender.com/BankApi/add

Request body:

{

### --- Required ---

"firstName": "Avi", "lastName": "Ron", "ownerID": "12321",

### --- Opional ---

"email": "ab@bd.ef", "balance": "0", (default = 0), "credit": "5000", (default = 0),"isActive": true (default = true)

// ID is auto generated while creating account

}

## **Update account by id**

POST https://bankapi-2-wa.onrender.com/BankApi/update

Request body:

{
"id": "639e04fdf2bfb269f5b75484",
"isActive": "false" // Or any other fields you wish to update
}

## **Delete an account**

DELETE https://bankapi-2-wa.onrender.com/BankApi/delete

Request body:

{
"id": "639e04fdf2bfb269f5b75484"
}

## **Deposit to account**

PATCH https://bankapi-2-wa.onrender.com/BankApi/deposit

Request body:

{
"id": "639c8e8058c499a29216d96a",
"amount": "1500" // amount of money to deposit
}

## **Withdraw from account**

PATCH https://bankapi-2-wa.onrender.com/BankApi/withdraw

Request body:

{
"id": "639c8e8058c499a29216d96a",
"amount": "1500" // amount of money to withdraw
}

## **Transfer between two accounts**

POST https://bankapi-2-wa.onrender.com/BankApi/transfer

Request body:

{
"receiverId": "639c8e8058c499a29216d96a",
"senderId": "639de273c9a0404b03c76f37",
"amount": "150"
}

---
