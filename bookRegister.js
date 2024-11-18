"use strict";

module.exports = class BookRegister {
  #register;
  constructor(data) {
    if (!data) {
      throw new Error("data storage missing");
    }
    this.#register = data;
  }

  getPrice(id) {
    const book = this.#register.find((book) => book.id === id);
    if (book) {
      return book.price;
    } else {
      throw new Error("nothing found with given searchValue");
    }
  }

  hasInfo(searchKey) {
    if (!searchKey) {
      return false;
    }
    const book = this.#register.find((book) => book.id === searchKey);
    if (!book) {
      return false;
    } else if (!book.info || JSON.stringify(book.info) === '{}') {
      return false;
    } else {
      return true;
    }
  }

  getBookKeywords(searchKey) {
    if (!searchKey) {
      return [];
    }

    const book = this.#register.find((book) => book.id === searchKey);

    if (!book || !book.keywords) {
      return [];
    }

    return book.keywords;
  }

  getNamesOfBooksByAuthor(searchKey) {

    if (searchKey === undefined) {
      throw new Error("missing parameter");
    }

    if (searchKey === null) {
      return [];
    }

  const foundNames = this.#register
    .filter(book => book.author === searchKey && book.name.length > 0)
    .map(book => book.name);

  return foundNames;  
    
  }

  getInfo(searchKey) {
    const book = this.#register.find((book) => book.id === searchKey);

    if(!book || !book.info) {
        return null;
    }
    return book.info 
  }
};
