class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state = this.state * 1.5;
    }
  
    set state(value) {
      if (value < 0) {
        this._state = 0;
      } else if (value > 100) {
        this._state = 100;
      } else {
        this._state = value;
      }
    }
  
    get state() {
      return this._state;
    }
  }

  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
      super(name, releaseDate, pagesCount, state);
      this.type = "magazine";
    }
  }

  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
      super(name, releaseDate, pagesCount, state);
      this.type = "book";
      this.author = author;
    }
  }

  class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }

  class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }

  class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }

  
  class Library {
    constructor(name, books) {
      this.name = name;
      this.books = [];
    }

    addBook(book) {
      if (book.state > 30) {
      this.books.push(book);
      }
    }

    findBookBy(type, value) {
      let result = null;
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i][type] === value) {
          result=this.books[i]};
        }
      return result;
    }

    giveBookByName(bookName) {
      let result = null;
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
          result = this.books[i];
          this.books.splice(i, 1);
          return result;
        }
      }
      return result;
    }

  }
