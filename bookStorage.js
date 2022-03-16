'use strict';

module.exports = class Bookstorage {
    constructor(data){
        if(!data) throw new Error ('data storage missing');
        this.bookStorage = data;
    }

    getById(id){
        if(id){

            for (let book of this.bookStorage){
                if(book.id === id){
                    // return book;
                    return {
                        name: book.name,
                        author: book.author,
                        topics: book.topics,
                        price: book.price,
                        extras: book.extras,
                    }
                }
            }
            return null;
        }
        else {
            throw new Error('parameter missing');
        }
    } // end of getById method

    getAllIdsByName(name){

        if(!name) return [];
        
        const result = [];

        for(let book of this.bookStorage){
            if(book.name === name){
                result.push(book.id);
            }
        }

        return result;

    }

    getAllBookAuthors(){
        const result = [];

        for (let book of this.bookStorage){
            if(book.author){
                if(!result.includes(book.author)) {
                    result.push(book.author);
                }
            }
        }
        return result;

    }

    getAllBooksByAuthor(author){

    }

    hasTopics(id){

    }

    getBookTopics(id){

    }

    getPriceWithoutExtras(id){

    }

    getTotalPrice(id){

    }

    getPriceOfTheExtras(id){

    }

}