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

// describe('Testing method getAllBookAuthors', () => {
//     test('Test 1. Using existing data' , () => {
//         const storage = new Bookstorage(books);
//         const expected = ["Layla Jones", "Antony Lee", "Emily White"];

//         expect(storage.getAllBookAuthors()).toEqual(expected);
//     });
// });

// describe('Testing method getAllBooksByAuthor', () => {
    
//     test('Test 1. Using custom data', () => { 
//         const storage = new Bookstorage(books);
//         const expected = [
//             {
//                 id: 1,
//                 name: "NoSql - New Hope",
//                 author: "Layla Jones",
//                 topics: ["noSql", "sql", "future databases"],
//                 price: 25,
//                 extras: [
//                         {
//                             name: "hard cover",
//                             price: 30
//                         },
//                         {
//                             name: "cd",
//                             price: 15
//                         }
//                     ]
//             }
//         ];

//         expect(storage.getAllBooksByAuthor('Layla Jones')).toEqual(expected);
//     });

//     test('Test 2: Author given not found in storage', () => {
//         const storage = new Bookstorage(books);
//         const expected = [];

//         expect(storage.getAllBooksByAuthor('Abel Parada')).toEqual(expected);
//     });

//     test('Test 3: Author parameter missing', () => {
//         const storage = new Bookstorage(books);

//         expect(() => storage.getAllBooksByAuthor()).toThrow('missing parameter');
//     })

// });

// describe('Testing method hasTopics', () => {
//     test('Test 1. Using custom data. Book with topics', () => {
//         const storage = new Bookstorage(books);
        
//         expect(storage.hasTopics(1)).toEqual(true)
//     });

//     test('Test 2. Using custom data. Book without topics', () => {
//         const storage = new Bookstorage(books);

//         expect(storage.hasTopics(3)).toEqual(false);
//     });

//     test('Test 3. parameter missing', () => {
//         const storage = new Bookstorage(books);

//         expect(storage.hasTopics()).toEqual(false);
//     });
// });

// describe('Testing method getBookTopics', () => {
//     test('Test 1. Using custom data. Topics found' , () => {
//         const storage = new Bookstorage(books);
//         const expected = ["noSql", "sql", "future databases"];

//         expect(storage.getBookTopics(1)).toEqual(expected);
//     });
    
//     test('Test 2. No topics found', () => {
//         const storage = new Bookstorage(books);
//         const expected = [];

//         expect(storage.getBookTopics(3)).toEqual(expected);

//     })

//     test('Test 3. Parameter missing', () => {
//         const storage = new Bookstorage(books);

//         expect(() => storage.getBookTopics());

//     })
// });

describe('Testing method getPriceWithoutExtras', () => {
    const storage = new Bookstorage(books);

    describe('Testing all the ids in storage',() => {
        
            const testValues = [
                //id,   expected
                [1, 25],
                [2, 45],
                [3, 30]
            ];
            
            test.each(testValues)('getPriceWithoutExtras(%s) returns %s',(id,expected) => {
                expect(storage.getPriceWithoutExtras(id)).toEqual(expected);
            });
        
    });

    test('Test 2: nothing found with given id', () => {
        expect(() => storage.getPriceWithoutExtras(10));
    });

    test('Test 3: no id given', () => {
        expect(() => storage.getPriceWithoutExtras());
    });
})