"use strict";

const BookRegister = require("../bookRegister");
const defaultDate = require("../dataStorage.json");

// Constructor test case start here:
 
describe("Testing constructor", () => {
  test("Test 1: missing parameter throws an exception", () => {
    expect(() => new BookRegister()).toThrow("data storage missing");
  });
});

// Get price test cases start here:

describe("Testing getPrice", () => {
  test('Test 1: Get book price with valid id, "id = 1', () => {
    const register = new BookRegister(defaultDate);
    expect(register.getPrice(1)).toBe(15);
  });

  test('Test 2: Get book price with invalid id, "id = 1000"', () => {
    const register = new BookRegister(defaultDate);
    expect(() => register.getPrice(1000)).toThrow(
      "nothing found with given searchValue"
    );
  });

  // Get price - Extra test cases:
  describe("Testing extra test cases: get_price", () => {
    test("Test 1: Get book price with missing id", () => {
      const register = new BookRegister(defaultDate);
      expect(() => register.getPrice()).toThrow(
        "nothing found with given searchValue"
      );
    });

    test("Test 2: Get book price with null id", () => {
      const register = new BookRegister(defaultDate);
      expect(() => register.getPrice(null)).toThrow(
        "nothing found with given searchValue"
      );
    });
  });
});

// has_info test cases start here:

describe("Testing hasInfo", () => {
  test("Test 1: Check if book has info with valid id", () => {
    const register = new BookRegister(defaultDate);
    expect(register.hasInfo(1)).toBe(true);
  });

  test("Test 2: Check if book has info with valid id but no info object", () => {
    const register = new BookRegister(defaultDate);
    expect(register.hasInfo(5)).toBe(false);
  });

  test("Test 3: Check if book has info with missing id", () => {
    const register = new BookRegister(defaultDate);
    expect(register.hasInfo()).toBe(false);
  });

  // Extra test cases - has_info
  describe("Testing extra test cases: has_info", () => {
    test("Test 1: Check if book has info with invalid id", () => {
      const register = new BookRegister(defaultDate);
      expect(register.hasInfo(55)).toBe(false);
    });

    test("Test 2: Check if book has info with null id", () => {
      const register = new BookRegister(defaultDate);
      expect(register.hasInfo(null)).toBe(false);
    });
  });
});

// getBookKeywords test cases start here:

describe("Testing getBookKeywords", () => {
  test("Test 1: Get book keywords by valid id 1", () => {
    const register = new BookRegister(defaultDate);
    const expectedResult = ["Gaming", "mystery", "Computers"];
    expect(register.getBookKeywords(1)).toEqual(expectedResult);
  });

  test("Test 2: Get book keywords with missing id", () => {
    const register = new BookRegister(defaultDate);
    const expectedResult = [];
    expect(register.getBookKeywords(null)).toEqual(expectedResult);
  });

  describe('Testing getBookKeywords: "not found" and "empty"', () => {
    const testData = [
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
      },

      {
        id: 3,
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
    ];

    test("Test 3: Testing keywords not found ", () => {
      const expectedResult = [];
      const register = new BookRegister(testData);
      expect(register.getBookKeywords(2)).toEqual(expectedResult);
    });

    test("Test 4: Testing empty keywords", () => {
      const expectedResult = [];
      const register = new BookRegister(testData);
      expect(register.getBookKeywords(3)).toEqual(expectedResult);
    });
  });

  // Extra test cases - getBookKeywords
  describe("Testing extra test cases: getBookKeywords", () => {
    test("Test 1: Get book keywords with invalid id", () => {
      const register = new BookRegister(defaultDate);
      const expectedResult = [];
      expect(register.getBookKeywords(888)).toEqual(expectedResult);
    });

    test("Test 2: Get book keywords with null id", () => {
      const register = new BookRegister(defaultDate);
      const expectedResult = [];
      expect(register.getBookKeywords(null)).toEqual(expectedResult);
    });
  });
});

// get_names_of_books_by_author start here:

describe("Testing getNamesOfBooksByAuthor", () => {
  test("Test 1: Get names of books by valid author", () => {
    const register = new BookRegister(defaultDate);
    expect(register.getNamesOfBooksByAuthor("Emily White")).toEqual([
      "Maria and My",
      "Databases - The rise and fall",
    ]);
    
  });

  test("Test 2: Get names of books by invalid author", () => {
    const register = new BookRegister(defaultDate);
    expect(register.getNamesOfBooksByAuthor("Felix Moon")).toEqual([]);
  });

  test("Test 3: Get names of books with missing author parameter", () => {
    const register = new BookRegister(defaultDate);
    expect(() => register.getNamesOfBooksByAuthor()).toThrow(
      "missing parameter"
    );
  });

  // Extra test case - get_names_of_books_by_author
  describe("Testing extra test case: get_names_of_books_by_author", () => {
    test("Test 1: Get names of books with null author", () => {
      const register = new BookRegister(defaultDate);
      expect(register.getNamesOfBooksByAuthor(null)).toEqual([]);
    });
  });
});

// get_info test cases start here:

describe("Testing getInfo", () => {
  test("Test 1: Get info of book by valid id", () => {
    const register = new BookRegister(defaultDate);
    expect(register.getInfo(1)).toEqual({
      edition: "sixth edition",
      type: "pocketbook",
      notes: "special edition",
    });
  });

  test("Test 2: Get info of book with valid id with no info object", () => {
    const register = new BookRegister(defaultDate);
    expect(register.getInfo(5)).toEqual(null);
  });

  test("Test 3: Get info of book with missing id", () => {
    const register = new BookRegister(defaultDate);
    expect(register.getInfo()).toEqual(null);
  });

  // Extra test cases - getInfo
  describe("Testing extra test cases: getInfo", () => {
    test("Test 1: Get info of book with invalid id", () => {
      const register = new BookRegister(defaultDate);
      expect(register.getInfo(999)).toEqual(null);
    });

    test("Test 2: Get info of book with null id", () => {
      const register = new BookRegister(defaultDate);
      expect(register.getInfo(null)).toEqual(null);
    });
  });
});