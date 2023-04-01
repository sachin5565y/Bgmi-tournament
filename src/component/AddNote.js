import React, {useContext, useState} from 'react'
import noteContext from "../component/context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({id: "", name: "", tag: "default"})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.id, note.name, note.tag);
        setNote({id: "", name: "", tag: ""})
        props.showAlert("Added successfully","success")
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3" >
            <h2 >Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="id" className="form-label" >id</label>
                    <input type="text" className="form-control" id="id" name="id" aria-describedby="emailHelp" value={note.id} onChange={onChange} /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">name</label>
                    <input type="text" className="form-control" id="name" name="name" value={note.name} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} />
                </div>
               
                <button disabled={note.id.length<5||note.name.length<5} type="submit" className="btn btn-primary" value={note.tag} onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote