import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Book from './Book';
import './book.css'
const URL ="http://localhost:5000/books";
const FetchHandler = async() => {
  return await axios.get(URL).then((res)=>res.data)
}
const Books = () => {
  const [books, setBooks] = useState();
  useEffect(()=>{
    FetchHandler().then(data=>setBooks(data.books));
  },[]);
  console.log(books);
  return (
    <div>
      <ul>
        {books && books.map((book,i)=>(
          <div className='hai' key={i}>
            <Book book={book} />
          </div>
        ))}
      </ul>
    </div>
  )
}
export default Books