# Test cases for get book has_info

### **has_info(searchKey)**
The method searches for book `hasInfo` from the book registry using "id" as parameter. 

- If the "id" is found(Valid), `hasInfo` returns `TRUE`.
- If book has info with valid id, but no info object, returns `FALSE`
- If "id" as parameter is missing `FALSE` is returned. 
- If the "id" is not found(Invalid), then the method should return `FALSE`.
- If "id" is null `FALSE` is returned.

## Test Case 1: Check if book has info with valid id
```json
id = 1
returns `True`
```
=====

## Test Case 2: Check if book has info with valid id but no info object
```json
id = 5
returns `False`
```
=====

## Test Case 3: Check if book has info with missing id
```json
returns `False`
```

## Test Case 4: Check if book has info with invalid id
```json
id = 55
returns `False`
```
=====

## Test Case 5: Check if book has info with null id
```json
id = null
returns `False`
```


