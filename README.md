# User Mangment System
This project was developed to apply new knowledge that I learned node.js, express.js, MongoDB, EJS. In addition, I use the MVC Pattren.

## Getting Started

### Installing Dependencies

- Node.js, you can download from [here](https://nodejs.org/en/)
- MongoDB Atlas, you need to create account from [here](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_footprint_row_search_core_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624584&gclid=CjwKCAjwgISIBhBfEiwALE19SfmLWl1yoXzQRNRv6Vu4aAmbfqHumFuno6F1efiQSkySHcsm0I8ckBoCehsQAvD_BwE)


### Key Dependencies
- [Node.js](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_footprint_row_search_core_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624584&gclid=CjwKCAjwgISIBhBfEiwALE19SfmLWl1yoXzQRNRv6Vu4aAmbfqHumFuno6F1efiQSkySHcsm0I8ckBoCehsQAvD_BwE) is a Fully managed, global cloud database on AWS, Azure, and more.
- [Express.js](https://expressjs.com/) is a free and open-source web application framework for Node. js. It is used for designing and building web applications quickly and easily


## Installation 
After clone the project, in the terminal ``` npm install ``` to install all dependencies.
The server will run on ``` http://localhost:5000/ ```

## API 

#### GET ```localhost:5000/api/users```
- Return: return list of all the available users.

- Sample Request: ```curl http://localhost:5000/api/users```

- Arguments: None

- Sample Response:
    ```
   [{
        "_id": "60ff4806624ad24d582701fc",
        "name": "meshal",
        "email": "meshal@email.com",
        "gender": "Male",
        "status": "Active",
        "__v": 0
    },
    {
        "_id": "60ff499b6e81750c9c5d18f9",
        "name": "temp user",
        "email": "temp@gmail.com",
        "gender": "Male",
        "status": "Inactive",
        "__v": 0
    }]
    ```
 
 <hr>
 
#### POST ```localhost:5000/api/users/```
- Return: return the new created user.

- Sample Request: ```curl 
                         -d '{
                                "name": "mohammed",
                                "email": "mohammed@gmail.com",
                                "gender": "Male",
                                "status": "Inactive"
                              }'
                         -H "Content-Type: application/json"  
                         -X "POST" http://localhost:5000/api/users/```

- Arguments: 
    - None

- Sample Response:
    ```
   {
        "_id": "60ff4806624ad24d582701fc",
        "name": "meshal mohammed",
        "email": "meshal@email.com",
        "gender": "Male",
        "status": "Active",
        "__v": 0
    }
    ```
    
 <hr>

#### GET ```localhost:5000/api/users?id=60ff4806624ad24d582701fc```
- Return: return a specific user by id.

- Sample Request: ```curl http://localhost:5000/api/users?id=60ff4806624ad24d582701fc```

- Arguments: 
    - it take the id of the user in the URL after the ```users/``` as a query arguments.

- Sample Response:
    ```
   {
        "_id": "60ff4806624ad24d582701fc",
        "name": "meshal",
        "email": "meshal@email.com",
        "gender": "Male",
        "status": "Active",
        "__v": 0
    }
    ```

<hr>
        
#### PUT ```localhost:5000/api/users/:id```
- Return: return a specific user by id after update it.

- Sample Request: ```curl -d '{"name": "meshal mohammed"}' -H "Content-Type: application/json"  -X "PATCH" http://localhost:5000/api/users/60ff4806624ad24d582701fc```

- Arguments: 
    - it take the id of the user in the URL after the ```users/```.

- Sample Response:
    ```
   {
        "_id": "60ff4806624ad24d582701fc",
        "name": "meshal mohammed",
        "email": "meshal@email.com",
        "gender": "Male",
        "status": "Active",
        "__v": 0
    }
    ```

<hr>

#### DELETE ```localhost:5000/api/users/:id```
- Return: return a message if the user deleted or not.

- Sample Request: ```curl -X "DELETE" http://localhost:5000/api/users/60ff4806624ad24d582701fc```

- Arguments: 
    - it take the id of the user in the URL after the ```users/```.

- Sample Response:
    ```
   {
    "message": "User with ID 60ff4806624ad24d582701fc deleted"
    }
    ```

    

