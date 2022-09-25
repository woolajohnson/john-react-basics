import React from 'react';
import Book from './Book';


const books = [
  {
    id: 1,
    image :'https://images-na.ssl-images-amazon.com/images/I/41fT9sjplKL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title :'This is the title of the book',
    author :'John Doe'
  },
  {
    id: 2,
    image :'https://images-na.ssl-images-amazon.com/images/I/41n9-p6-PpL._SX331_BO1,204,203,200_.jpg',
    title :'This is the second title',
    author :'Jane Mia'
  },
  {
    id: 3,
    image :'https://images-na.ssl-images-amazon.com/images/I/41ym1NGadSL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title :'This is the third title of the book',
    author :'Michael Joe'
  },
  {
    id: 4,
    image :'https://images-na.ssl-images-amazon.com/images/I/51cYi2Dtg4L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title :'This is the fourth title of the book',
    author :'Bryan Smith'
  },
  {
    id: 5,
    image :'https://images-na.ssl-images-amazon.com/images/I/51zU5nEaN6L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title :'This is the fifth title',
    author :'Gilbert Jonas'
  },
  {
    id: 6,
    image :'https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    title :'This is the sixth title of the book',
    author :'Danny Krosi'
  },
  {
    id: 7,
    image :'https://images-na.ssl-images-amazon.com/images/I/51cqNaojIAL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title :'This is the seventh title of the book',
    author :'Rodulfo Abasolo'
  },
  {
    id: 8,
    image :'https://images-na.ssl-images-amazon.com/images/I/41VsfjWEvSL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    title :'This is the eight title of the book',
    author :'Jenny Grey'
  },
];

const Booklist = () => {
  
  return (
    <section className='mainSection'>
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>
        })}
    </section>
  );
};

export default Booklist;