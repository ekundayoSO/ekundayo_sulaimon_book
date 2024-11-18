# Test cases for getInfo method

This method searches for book `book info` from the book registry using "id" as parameter. 

- If the "id" is found(Valid), returns object `{
      edition: "sixth edition",
      type: "pocketbook",
      notes: "special edition",
    }`
- If "id" is valid with no info object, returns `null`.
- If parameter is missing, returns `null`. 
- If "id" is invalid, `null` is returned.
- If "id" iis null, returns `null`.


## Test Case 1: Get info of book by valid id
```json
id = 1
returns {"edition": "sixth edition", "type": "pocketbook", "notes": "special edition"}
```
=====

## Test Case 2: Get info of book by valid id with no info object
```json
id = 5
returns null
```
=====

## Test Case 3: Get info of book with missing id
```json
returns null
```
=====

## Test Case 4: Get info of book by invalid id
```json
id = 999
returns null
```
=====

## Test Case 5: Get info of book by null id
```json
id = null
returns null
```
