// // Direct variable = default export
// const Media = require("./Media");

// Destructured variable = module.exports
const {Media} = require("./Media");

class Book extends Media{
    constructor(newName){
        super(newName);
        // not needed, all media types will have a name
        // this.name = newName

    }
}

// let someBook = new Book("Coolest programming guide ever")

// console.log(someBook.name);

module.exports = {
    Book
}