
// Media class as common starting point for
// things like DVDs, books, vinyl

// Blueprint of data
class Media {
    constructor(someNewName){
        this.name = someNewName
        Media.count++;
    }

// Count of all media that exist
    static count = 0;

    getMediaName(){
        return this.name;
    }
    static version(){
        return "class version 0.0.1";
    }
    version(){
        return  "prototype version 0.0.1"
    }
}



// let someMedia = new Media();
// someMedia.name = "cool generic media"

// console.log(someMedia.name)

// let someOtherMedia = new Media();
// console.log(someOtherMedia.name)
// console.log(someMedia.getMediaName());

// console.log(Media.version())
// console.log(Media.prototype.version())

// console.log(`Media library has ${Media.count} items.`)


// other way to export 
module.exports = {
    Media
}