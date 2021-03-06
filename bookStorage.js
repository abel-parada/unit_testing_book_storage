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
                if(book.name == name){
                    result.push(book.id);  
                }
            }
            if(result.length>0) return result;
            else return [];
      

    }; //end of getAllIdsByName

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

    }; //end of getAllBookAuthors

    getAllBooksByAuthor(author){
        if(!author) throw new Error('missing parameter');
        
            const result = [];

            for(let book of this.bookStorage){
                if(book.author === author) {
                    result.push(book);
                }
            }
            return result;
    }; // end of getAllBooksByAuthor

    hasTopics(id){

        if(!id) return false;
    
        if(id){
            const result = [];
    
            for(let book of this.bookStorage){
                if(book.id === id && book.topics.length>1){
                    result.push(book.id);  
                }
            }
            console.log(result.length)
            if(result.length === 0) return false;
            else return true;
        }
        else {
            return false
        }
    }; // end of hasTopics


    getBookTopics(id){
        if(id){
            const result = [];
            for(let book of this.bookStorage){
                if(book.id === id && book.topics && book.topics.length>0){
                    result.push(book.topics)
                }
            }
            if(result.length === 0) return [];
            else return result[0];
        }
        else {
            throw new Error('parameter missing')
        }
    }; // getBookTopics

    getPriceWithoutExtras(id){
        if(id){
            const result = [];
    
            for (let book of this.bookStorage){
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

    getTotalPrice(id){
        if(id){
            let result;
            let sum=0;
    
            for (let book of this.bookStorage){
                if(book.id === id){
                    for(let extra of book.extras){
                        // console.log(book.extras[0])
                        sum = sum+extra.price;
                        // result.push(extra.price);
                    }
                    // console.log(book.price)
                    result = sum + book.price;
                }
            }
            if(result) return result;
            else throw new Error('nothing found with given id');
        }
        else {
            throw new Error('parameter missing');
        }

    }; // end of getTotalPrice

    getPriceOfTheExtras(id){
        if(id){
            let sum=0;
    
            for (let book of this.bookStorage){
                if(book.id === id && book.extras.length>0){
                    for(let extra of book.extras){
                        sum = sum+extra.price;
                    }
                }
            }
            if(sum || sum ===0) return sum;
            else throw new Error('nothing found with given id');
        }
        else {
            throw new Error('parameter missing');
        }
    
    }; // end of getTotalPrice

}