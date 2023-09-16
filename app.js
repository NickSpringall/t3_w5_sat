
// Import book and Library
// module.exports = {book}
const {Book} = require("./Book");
// module.exports = Library
const Library = require("./Library");
let {Media} = require("./Media");


// make a library
let newLibrary = new Library();
// make some books
let coolProgrammingBook = new Book("Cool JS things, 2023")
let coolPokemonBook = new Book("How to catch them all 2023")

// add them to the library
newLibrary.books.push(coolProgrammingBook, coolPokemonBook);

console.log(newLibrary.books)
console.log(Media.count)