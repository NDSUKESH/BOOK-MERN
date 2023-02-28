import React from 'react'
import { Button } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './book.css'
const Book = (props) => {
  const history=useNavigate();
  const {_id,name,author,description,prize,image}=props.book;
  const DeleteHandler= async()=>{
    await axios
    .delete(`http://localhost:5000/books/${_id}`)
    .then(res=>res.data)
    .then(()=>history("/"))
    .then(()=>history("/books"))
  }
  return (
    <div className='card'>
      <img src={image} alt={name}/>
      <article>BY: {author}</article>
      <h3>BOOK_NAME:{name}</h3>
      <p>ABOUT:{description}</p>
      <h3>PRICE:{prize}</h3>
      <Button   LinkComponent={Link} to={`/books/${_id}`} sx={{mt:'auto',color:'#000000' ,":hover":{bgcolor:'black',color:'white'}}}>UPDATE</Button>
      <Button    onClick={DeleteHandler} sx={{mt:'auto',color:'#000000',":hover":{bgcolor:'black',color:'white'}}}>DELETE</Button>
    </div>
  )
}

export default Book