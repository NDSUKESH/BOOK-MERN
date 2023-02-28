import React, { useState } from 'react';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import { AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import {NavLink } from 'react-router-dom'
import './Book/book.css'
const Header =()=>{
    const [value, setValue] = useState();
    return <div>
        <AppBar sx={{backgroundColor:'#d12ac6'}} position='stick'>
            <Toolbar>
            <Typography><MenuBookSharpIcon></MenuBookSharpIcon></Typography>
            <Tabs
             sx={{ml:'auto'}}
             textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=>setValue(val)}> 
                 <Tab LinkComponent={NavLink} to="/" label={<span style={{ color: 'black',fontSize:'large' }}>HOME</span>}/>
                 <Tab LinkComponent={NavLink} to="/books" label={<span style={{ color: 'black',fontSize:'large'}}>AVAILABLE BOOKS</span>}/>
                 <Tab LinkComponent={NavLink} to="/add" label={<span style={{ color: 'black',fontSize:'large' }}>ADD BOOK</span>}/>
            </Tabs>     
            </Toolbar>
        </AppBar>
    </div>;
};

export default Header;