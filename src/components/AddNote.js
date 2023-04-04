import React, {useContext, useState} from 'react'
import noteContext from './context/notes/noteContext';
const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({name: "", id: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.name, note.id, note.tag);
        setNote({name: "", id: "", tag: ""})
        props.showAlert("Added successfully","success")
        
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <>
    
    <div className="container my-3" >
        
            <h2 >Register for torunament</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="id" className="form-label" >Game_id</label>
                    <input type="text" className="form-control" id="id" name="id" aria-describedby="emailHelp" value={note.id} onChange={onChange} minLength={5} required  /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name"  onChange={onChange}value={note.name}  required/>
                </div>
                
                <button disabled={note.name.length<5||note.id.length<5} type="submit" className="btn btn-primary"onClick={handleClick} minLength={5} required >Add Note</button>
            </form>
            
        </div>
        </>
  )
}

export default AddNote