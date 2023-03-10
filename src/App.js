import Header from "./components/Header";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import BookDetail from "./components/Book/BookDetail";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/add" element={<AddBook/>} exact/>
            <Route path="/books" element={<Books/>} exact/>
            <Route path='/books/:id' element={<BookDetail/>} exact/>
          </Routes>
        </main>
        
      </header>
    </React.Fragment>
  );
}

export default App;
