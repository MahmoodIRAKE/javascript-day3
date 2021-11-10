const book1 = {
    name: 'mahmood',
    author: 'irake',
    year: 1995
};
const book2 = {
    name: 'Sool',
    author: 'rosol',
    year: 1990
};

/*2 */
const bookUtils = {};
/*3 */
bookUtils.getFirstPublished = (book1, book2) => {

        return (book1.year > book2.year) ? book1 : book2;
    }
    /*4 */
bookUtils.setNewEdition = (book, editionYear) => {
    book.editionYear = editionYear;
}
bookUtils.setLanguage = (book, language) => {
    book.language = language;
}
bookUtils.setLanguage = (setTranslation, translator, language) => {
    book.translation = { language: language, translator: translator };
}
bookUtils.setPublisher = (book, name, location) => {
    book.publisher = { name: name, location: location };
}
bookUtils.isSamePublisher = (book1, book2) => {
    if (JSON.stringify(book1.publisher) === JSON.stringify(book1.publisher)) {
        return true;
    }
    return false
}



/*5*/
bookUtils.getFirstPublished(book1, book2);
bookUtils.setNewEdition(book1, 2000);
console.log(book1);