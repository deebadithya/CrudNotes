import React from "react"
import { Link} from 'react-router-dom'
const ListItem = ({note}) => {

    const formated_time = () => {
        let formated_time = new Date(note.updated).toLocaleTimeString('en-US');
        let formate_date = new Date(note.updated).toLocaleDateString('en-US');
        return "last modified: " + formated_time + " " + formate_date
    }
    return (
      
        <Link 
                to={`/note/${note.id}`} > <div className="notes-list-item">
                    <h3>
                    {note.body.slice(0, note.body.length > 40 ? 40 : note.body.length) + "..."}
                <p> <span> {formated_time()}</span></p>
                    </h3>
                </div>
                                             
        </Link>
    )
}
export default ListItem;