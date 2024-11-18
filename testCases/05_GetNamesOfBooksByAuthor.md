# Test cases for getNamesOfBooksByAuthor

This method searches for book `names of book` from the book registry using "author" as parameter. 

- If the "author" is found(`Matt Wilson`), returns array [`Rebellion of Sophie Q. Lister`].
- If the "author" is not found(`Felix Harris`), then the method should return an empty array `[]`.
- If "author" as parameter is missing return empty array `[]`. 
- If "author" is null, returns empty array `[]`.

## Test Case 1: Get names of books by valid author
```json
Author = Emily White
returns  [
      "Maria and My",
      "Databases - The rise and fall",
    ]
```
======

## Test Case 2: Get names of books by invalid author
```json
Author = Felix Moon
returns  []
```
=====

## Test Case 3: Get names of books with missing author parameter
```json
Author = undefined
returns  throw exception with message "missing parameter".
```
=====

## Test Case 4: Get names of books with null author
```json
Author = null
returns  [].
```
