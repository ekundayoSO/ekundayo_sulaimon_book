# Test cases for get book price

## **getPrice(id)**

The method searches for given price from the book registry using "id" as parameter. 

- If the "id" is found(Valid), its associated price is returned.
- If the "id" is not found(Invalid), then the method should return `nothing found with given searchValue`.
- If "id" as parameter is missing `nothing found with given searchValue` is returned. 
- If "id" is null `nothing found with given searchValue` is returned.

## Test Case 1: Get book price by valid id, "id = 1"
```json
id = 1, 
return 15
```
=====

## Test Case 2: Get book price by invalid id, "id = 1000"
```json
id = 1000, 
returns `'nothing found with given searchValue'`
```
=====

## Test Case 3: Get book price with missing id
```json
returns `'nothing found with given searchValue'`
```

## Test Case 4: Get book price with null id, "id =null"
```json
id = null, 
returns `'nothing found with given searchValue'`
```




