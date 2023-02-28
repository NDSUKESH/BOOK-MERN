import React, { useState } from 'react'
import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import './Book/book.css'
import { useNavigate } from 'react-router-dom';
const AddBook = () => {
  const history =useNavigate();
  const [inputs, setInputs] = useState({
    name:"",
    description:"",
    prize:"",
    author:"",
    image:"",
  });
  const [checked, setChecked] = useState(false)
  const handleChange =(e)=>{
       setInputs((prevState)=>({
             ...prevState,
             [e.target.name]:e.target.value
       }));
  };
  const sendRequest = async()=>{
    await axios.post("http://localhost:5000/books",{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      prize:Number(inputs.prize),
      image:String(inputs.image),
      available:Boolean(checked)
   }).then(res=>res.data);
  }



  const habdleSubmit =(e)=>{
     e.preventDefault();
     console.log(inputs,checked);
     sendRequest().then(()=>history("/books"))
  };
  return (
    <form onSubmit={habdleSubmit}>
      <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700} alignContent={'center'}
       alignSelf="center" marginLeft={"auto"} marginRight={"auto"} marginTop={9}>
      <FormLabel>Name</FormLabel>
      <TextField sx={{backgroundColor:'#edb4d9'}}  floating value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant='outlined' name="name"/>
      <FormLabel>Author</FormLabel>
      <TextField  sx={{backgroundColor:'#edb4d9'}}  value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant='outlined' name="author"/>
      <FormLabel>Description</FormLabel>
      <TextField sx={{backgroundColor:'#edb4d9'}}   value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant='outlined' name="description"/>
      <FormLabel>Prize</FormLabel>
      <TextField sx={{backgroundColor:'#edb4d9'}}   value={inputs.prize} onChange={handleChange} type="number" margin="normal" fullWidth variant='outlined' name="prize"/>
      <FormLabel>IMAGE LINK/URL</FormLabel>
      <TextField sx={{backgroundColor:'#edb4d9'}}   value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant='outlined' name="image"/>
      <FormControlLabel
       control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)}  />} label="Available" />
      <Button  variant='contained' type='submit'> ADD BOOK</Button>
    </Box>
    
    </form>
  )
}

export default AddBook