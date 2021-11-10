const book = {
    title: 'lorads of the rings',
    author: 'mahmood irake',
    key: '2345',
    price: '500',
    year: 1980,
};

function printBook(book1) {
    console.log(`The book ${book1.title} was written by ${book1.author} in
  the year ${book1.year}`)
}

printBook(book);