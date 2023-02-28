import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './book.css'

const BookDetail = () => {
    const [inputs, setInputs] = useState({});
    const id=useParams().id;
    const [checked,setChecked]=useState(false);
    const history =useNavigate();
    useEffect(()=>{
        const fetchHandler =async()=>{
            await axios
            .get(`http://localhost:5000/books/${id}`)
            .then((res)=>res.data).then(data=>setInputs(data.book));
        };
        fetchHandler()
    },[id]);

    const sentRequest = async()=>{
        await axios.put(`http://localhost:5000/books/${id}`,{
            name:String(inputs.name),
            author:String(inputs.author),
            description:String(inputs.description),
            prize:Number(inputs.prize),
            image:String(inputs.image),
            available:Boolean(checked)
        }).then(res=>res.data)
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        sentRequest().then(()=>history("/books"))
    };
    const handleChange =(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
      }));
    };
  return (
    <div>
{inputs &&   ( <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700} alignContent={'center'}
       alignSelf="center" marginLeft={"auto"} marginRight={"auto"} marginTop={9}>
      <FormLabel>Name</FormLabel>
      <TextField sx={{backgroundColor:'#edb4d9'}}   value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant='outlined' name="name"/>
      <FormLabel>Author</FormLabel>
      <TextField sx={{backgroundColor:'#edb4d9'}}   value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant='outlined' name="author"/>
      <FormLabel>Description</FormLabel>
      <TextField sx={{backgroundColor:'#edb4d9'}}   value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant='outlined' name="description"/>
      <FormLabel>Prize</FormLabel>
      <TextField sx={{backgroundColor:'#edb4d9'}}   value={inputs.prize} onChange={handleChange} type="number" margin="normal" fullWidth variant='outlined' name="prize"/>
      <FormLabel>IMAGE</FormLabel>
      <TextField sx={{backgroundColor:'#edb4d9'}}   value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant='outlined' name="image"/>
      <FormControlLabel
       control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)}  />} label="Available" />
      <Button variant='contained' type='submit'>UPDATE BOOK</Button>
    </Box>
    
    </form>)}
    </div>
  )
}

export default BookDetail