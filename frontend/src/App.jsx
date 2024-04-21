import { useState } from 'react'
import ListNotes from "./components/ListNotes.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Note from './components/Note.jsx';
import Header from './components/Header.jsx';
import "./App.css"
// import NotePage from "./components/NotePage.js"
function App() {

  return (
     <BrowserRouter>
     <div className='container dark'>
      <div className='app'>
      <Header />
       <Routes>
        
       <Route path="/" element={<ListNotes />} exact />
        <Route path='/note/:id' element={<Note />} />
         </Routes>
         </div>
         </div>
     </BrowserRouter>

  );
}

export default App
