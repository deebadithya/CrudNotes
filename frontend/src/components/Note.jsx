import React, { useState, useEffect } from "react";
import api from "../BaseUrl";
import { useParams, useNavigate } from "react-router-dom";
import ArrowLeft from "../assets/arrow-left.svg?react";


const Note = () => {    
    const [note, setNote] = useState(null);
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const resp = await api.get(`/api/notes/${id}`);
                const data = resp.data;
                setNote(data);
            } catch (error) {
                console.error("Error fetching note:", error);
            }
        };

        if (id!=='new'){
        fetchNote();
    }
    }, [id]);

    const updateNote = async () => {
        let resp = await api.put(`/api/notes/${id}/edit/`, note);
    }

    const deleteNote = async () => {
        let resp = await api.delete(`/api/notes/${id}/delete/`);
        navigate('/')
    }

    const createNote = async () => {
        let resp = await api.post(`/api/notes/create/`, note);      
        navigate('/')
    }
 

    const handleSubmit = async () => {

        if (id !=='new')
        {
            if (note.body === ""){
                deleteNote();
            }
            else {
                console.log(JSON.stringify(note));
                updateNote();
            }
        }
        navigate('/');
    }
    const update_content = (e) => {
        setNote(prevNote => ({
            ...prevNote,
            body: e.target.value
        }));
    }

    // Conditionally render the content based on whether `note` is `null`
    return (
        // <div>
        //     {note ? (
        //         <p>{note.body}</p>
        //     ) : (
        //         <p>Loading...</p>
        //     )}
        // </div>
        <div className="note">
            <div className="note-header">
            <h1 className="note-title">
                 
            <img src={ArrowLeft} alt="Arrow Left" width="20px" onClick={handleSubmit}/>
              
                {" "}Note #{id!=='new'?note?.id:'new'}
            </h1 >{id!=='new'? (
                <button onClick={deleteNote}>delete</button>
            ):(
                <button onClick={createNote}>Done</button>
            )
            }
            
            </div>
            {/* <textarea defaultValue={note?.body} onChange={(e) => updateNote(e.target.value)}></textarea> */}
            <textarea 
                defaultValue={note?.body} 
                onChange={update_content} 
                />

        </div>
    );
};

export default Note;
