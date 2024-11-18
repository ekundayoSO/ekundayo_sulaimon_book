Sulaimon Ekundayo


# **End assignment** (book)


## Task: Create and test BookRegister class
Create a class `BookRegister` for book data. Data storage is passed to the constractor as a parameter. Data is in a json array. Use the following json array as default storage. You may need to modify the data or add more versions for testing. 

### datastorage.json

```json
[
  {
    "id": 1,
    "name": "NoSql - New Hope",
    "author": "Jesse River",
    "price": 15,
    "rating": "****",
    "keywords": [
      "Gaming",
      "mystery",
      "Computers"
    ],
    "info": {
      "edition": "sixth edition",
      "type": "pocketbook",
      "notes": "special edition"
    }
  },
  {
    "id": 2,
    "name": "SQL-mysteries",
    "author": "Felix Harris",
    "price": 123,
    "rating": "**",
    "keywords": [
      "Future SQL",
      "History",
      "databases"
    ],
    "info": {
      "edition": "fourth edition",
      "type": "pocketbook",
      "notes": "special edition"
    }
  },
  {
    "id": 3,
    "name": "Rebellion of Sophie Q. Lister",
    "author": "Matt Wilson",
    "price": 36,
    "rating": "****",
    "keywords": [
      "inventions",
      "Computers",
      "History"
    ],
    "info": {
      "edition": "first edition",
      "type": "e-book",
      "notes": "first folio"
    }
  },
  {
    "id": 4,
    "name": "Maria and My",
    "author": "Emily White",
    "price": 10,
    "rating": "*",
    "keywords": [
      "Future SQL",
      "History",
      "Gaming"
    ],
    "info": {
      "edition": "first edition",
      "type": "pocketbook",
      "notes": "collectors edition"
    }
  },
  {
    "id": 5,
    "name": "Databases - The rise and fall",
    "author": "Emily White",
    "price": 15,
    "rating": "**",
    "keywords": [
      "History",
      "Future SQL",
      "databases"
    ]
  }
]
```


# BookRegister API

## Constructor

### **constructor(jsondata)**
Initializes BookRegister object

>Parameters:
>>The data storage json object is passed as a parameter to the constructor.

>Returns:
>>

>Throws:
>>If the parameter is missing, constructor throws an error `'data storage missing'`


## Methods


### **get_Price(id)**
get the price of the book

>Parameters:
>>id of the book which price is to be returned

>Returns:
>>returns the price of a book matching the given id

>Throws:
>>if no book with the given id is  found throws an exeption `'nothing found with given searchValue'`

### **has_info(searchKey)**
Method checks based on id if the book has `info` or not.

>Parameters:
>>searchKey is the id to be searched

>Returns:
>>Returns true if the book matching the searchKey has `info` object and it is not an empty object else returns false. If parameter searchKey is missing false is returned

>Throws:
>>

### **get_book_keywords(searchKey)**
Returns an array of book keywords. If none found, returns an empty array.

>Parameters:
>>searchKey is the id of the book

>Returns:
>>keywords of the book as an array or if none is found or it is empty or parameter searchKey is missing, returns an empty array.

>Throws:
>>

### **get_names_of_books_by_author(searchKey)**
returns the names of the books matching the author

>Parameters:
>>searchKey is the author of the book

>Returns:
>>returns an array of the names of the books matching the searchKey author or empty array if no match is found

>Throws:
>>If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **get_info(searchKey)**
searches the book matching the searchKey and if match is found returns the info object otherwise null is returned

>Parameters:
>>searchKey is the id of the book

>Returns:
>>returns the info object of the book matching the searchKey. If no book matching the given searchKey is found or searchKey is missing, null will be returned

>Throws:
>>

# The project

## Create a folder for the testproject
- the name of the folder should be `Ekundayo_Sulaimon_book`
- create **package.json**
  - **`npm init -y`**
- install **jest** as development dependency
  - **`npm install jest --save-dev`**
- create folder `__tests__` for tests
- edit the test script in the **package.json**
- use **datastorage.json** as a data source

## Design test cases in separate .md -file
## Implement all tests and test them to fail
## Implement corresponding methods
## Test the project until all tests pass

## Submit the project folder
Submit your project folder acording to instructions given separately.
Remove the `node_modules` folder before submitting.
The project folder should include `package.json` file