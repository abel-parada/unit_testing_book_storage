const books = require('./books.json');

const Bookstorage = require('./bookStorage');

// function getById(id){
//     if(id){

//         for (let book of books){
//             if(book.id === id){
//                 return {
//                     name: book.name,
//                     author: book.author,
//                     topics: book.topics,
//                     price: book.price,
//                     extras: book.extras,
//                 }
//             }
//         }
//         return null;

//     }
//     else {
//         throw new Error('parameter missing');
//     }
// }
// console.log(getById(1));
// console.log(getById(7));
// console.log(getById());

const storage = new Bookstorage(books);

const result = storage.getAllBooksByAuthor();

console.log(result);

/////////////////

function  getAllBookAuthors(){
    const result = [];

    for (let book of books){
        if(book.author){
            if(!result.includes(book.author)) {
                result.push(book.author);
            }
        }
    }
    return result;

}

console.log(getAllBookAuthors());