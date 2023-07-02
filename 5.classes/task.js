class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		return this.state *= 1.5;
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

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class NovelBook extends Book {
	constructor(name, author, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(name, author, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(name, author, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			return this.books.push(book);
		}
	}

	findBookBy(type, value) {
		let result = this.books.find(book => book[type] === value);
		return result || null;
	}

	giveBookByName(bookName) {
		let givingBook = this.books.find(book => book.name === bookName);
		if (givingBook === undefined) {
			return givingBook = null
		} else {
			this.books = this.books.filter(book => book.name !== bookName);
			return givingBook;
		}
		
	}
}