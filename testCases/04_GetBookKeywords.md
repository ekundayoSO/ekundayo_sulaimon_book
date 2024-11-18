# Test cases for getBookKeywords

This method searches for book `keywords` from the book registry using "id" as parameter. 

- If the "id" is found(Valid), returns array ["Gaming", "mystery", "Computers"].
- If "id" as parameter is missing return empty array `[]`. 
- If keywords not found, then the method should return an empty array `[]`.
- If "id" is valid without keywords, empty array `[]` is returned.
- If "id" is invalid, empty `[]` is returned.
- If "id" is null, returns empty array `[]`.

### **get_book_keywords(searchKey)**
## Test Case 1: Get book keywords by valid id
```json
id = 1,
returns ["Gaming", "mystery", "Computers"].
```
=====

## Test Case 2: Get book keywords with missing id
```json
returns []
```
=====

## Test Case 3-4: Get book keywords by id with no keywords or empty keywords
Test data:
```json
[
      {
        id: 1,
        name: "NoSql - New Hope",
        author: "Jesse River",
        price: 15,
        rating: "****",
        keywords: ["Gaming", "mystery", "Computers"],
        info: {
          edition: "sixth edition",
          type: "pocketbook",
          notes: "special edition",
        },
      },
      {
        id: 2,
        name: "SQL-mysteries",
        author: "Felix Harris",
        price: 123,
        rating: "**",
        info: {
          edition: "fourth edition",
          type: "pocketbook",
          notes: "special edition",
        },
        {
        id: 2,
        name: "SQL-mysteries",
        author: "Felix Harris",
        price: 123,
        rating: "**",
        keywords: [],
        info: {
          edition: "fourth edition",
          type: "pocketbook",
          notes: "special edition",
        },
      },
      },
    ];
```
Create register with test data
```js
const register = new BookRegister(testData)
register.getBookKeywords();
```
=====

## Test Case 5: Get book keywords by invalid id
```json
id = 888,
returns [].
```

## Test Case 6: Get book keywords with null id
```json
id = null,
returns []
```



