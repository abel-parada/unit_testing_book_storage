'use strict';

const Bookstorage = require('../bookStorage');

const books = require('../books.json');

// describe('Testing constructor', () => {
//     test('Test 1: book object created with the given data', ()=> {
//         const storage = new Bookstorage(books);
//         expect(storage.bookStorage).toEqual(books);
//     });
//     test('Test 2: missing parameter throws an exception', () => {
//         expect(() => new Bookstorage()).toThrow('data storage missing')
//     })
// });

// describe('Testing method getById', () => {
//     test('Test 1: use custom data. id = 1', ()=>{
//         const storage = new Bookstorage(books);
//         const expected = {
//             name: "NoSql - New Hope",
//             author: "Layla Jones",
//             topics: ["noSql", "sql", "future databases"],
//             price: 25,
//             extras: [
//               {
//                 name: "hard cover",
//                 price: 30
//               },
//               {
//                 name: "cd",
//                 price: 15
//               }
//             ]
//         };

//         expect(storage.getById(1)).toEqual(expected);

//     });

//     test('Test 2: no id found. id = 10', () => {
//         const storage = new Bookstorage(books);
//         const expected = null;

//         expect(storage.getById(10)).toEqual(expected);

//     });

//     test('Test 3: no id given as parameter', () => {
//         const storage = new Bookstorage(books);

//         expect(() => storage.getById());

//     });
// });

// describe('Testing method getAllIdsByName', () => {
//     test('Test 1: using custom data. value = "NoSql - New Hope"',() => {
//         const storage = new Bookstorage(books);
//         const expected = [1];

//         expect(storage.getAllIdsByName('NoSql - New Hope')).toEqual(expected);
//     });

//     test('Test 2: no name found', () => {
//         const storage = new Bookstorage(books);
        
//         expect(storage.getAllIdsByName('The Lord of the Rings')).toEqual([]);
//     });

//     test('Test 3: no book name given as a parameter', () => {
//         const storage = new Bookstorage(books);

//         expect(storage.getAllIdsByName()).toEqual([]);
//     });
// });

describe('Testing method getAllBookAuthors', () => {
    test('Test 1. Using existing data' , () => {
        const storage = new Bookstorage(books);
        const expected = ["Layla Jones", "Antony Lee", "Emily White"];

        expect(storage.getAllBookAuthors()).toEqual(expected);
    });
})