import React, { useState, useEffect } from "react";
import api from "../BaseUrl";
import { Link } from 'react-router-dom'
// axios.defaults.baseURL = ` http://127.0.0.1:8000`
import AddButton from "./AddButton";
import ListItem  from "./ListItem";
const ListNotes =  () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        listNotes();
    }, []);

    const listNotes = async () => {
            try{          
            // const resp = await axios.get("/api/notes/");
            const resp = await api.get("/api/notes/")
      
            let content = resp.data;
            setNotes(content);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };
    
    return (
        <div className="notes">

            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>

            <div className="notes-list">
            {notes.map((note, index) => (
                <div>
                <ListItem key={index} note={note} />     
                </div>  
                
            ))}

</div>
<AddButton />



        </div>
    );
};

export default ListNotes;