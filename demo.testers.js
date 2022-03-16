const books = require('./books.json');

// // const Bookstorage = require('./bookStorage');

// // function getById(id){
// //     if(id){

// //         for (let book of books){
// //             if(book.id === id){
// //                 return {
// //                     name: book.name,
// //                     author: book.author,
// //                     topics: book.topics,
// //                     price: book.price,
// //                     extras: book.extras,
// //                 }
// //             }
// //         }
// //         return null;

// //     }
// //     else {
// //         throw new Error('parameter missing');
// //     }
// // }
// // console.log(getById(1));
// // console.log(getById(7));
// // console.log(getById());

// // const storage = new Bookstorage(books);

// // const result = storage.getAllBooksByAuthor();

// // console.log(result);

// /////////////////

// // function  getAllBookAuthors(){
// //     const result = [];

// //     for (let book of books){
// //         if(book.author){
// //             if(!result.includes(book.author)) {
// //                 result.push(book.author);
// //             }
// //         }
// //     }
// //     return result;

// // }

// // console.log(getAllBookAuthors());

// ///////////////

// // function getAllBooksByAuthor(author){
// //     if(!author) throw new Error('missing parameter');
    
// //         const result = [];

// //         for(let book of books){
// //             if(book.author === author) {
// //                 result.push(book);
// //             }
// //         }
// //         return result;
// // }

// // console.log(getAllBooksByAuthor('Layla Jones'));

// /////////////////

// function hasTopics(id){

//     if(!id) return false;

//     if(id){
//         const result = [];

//         for(let book of books){
//             if(book.id === id && book.topics.length>1){
//                 result.push(book.id);  
//             }
//         }
//         console.log(result.length)
//         if(result.length === 0) return false;
//         else return console.log(result);
//     }
//     else {
//         return false
//     }
// }

// console.log(hasTopics(1));
// console.log(hasTopics(3));
// console.log(hasTopics());


/////////////

// function getBookTopics(id){
//     if(id){
//         const result = [];
//         for(let book of books){
//             if(book.id === id && book.topics && book.topics.length>0){
//                 result.push(book.topics)
//             }
//         }
//         if(result.length === 0) return [];
//         else return result[0];
//     }
//     else {
//         throw new Error('parameter missing')
//     }
// }

// // console.log(getBookTopics(1));
// console.log(getBookTopics(3));

////////////////

function getPriceWithoutExtras(id){
    if(id){
        const result = [];

        for (let book of books){
            if(book.id === id){
                result.push(book.price);
            }
        }
        if(result) return result[0];
        else throw new Error('nothing found with given id');
    }
    else {
        throw new Error('parameter missing');
    }
}; //end of getPriceWithoutExtras

console.log(getPriceWithoutExtras(1));