import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../component/context/notes/noteContext"
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    let navigate=useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        }
        else{
            navigate("/login")
        }
        // eslint-disable-next-line+
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "", eid: "", ename: "", etag: ""})

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, eid: currentNote.id, ename: currentNote.name, etag:currentNote.tag})
    }

    const handleClick = (e)=>{ 
        editNote(note.id, note.eid, note.ename, note.etag)
        refClose.current.click();
        props.showAlert("Updated  successfully","success")
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <>
            <AddNote showAlert={props.showAlert} />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-id" id="exampleModalLabel" >Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="id" className="form-label">id</label>
                                    <input type="text" className="form-control" id="eid" name="eid" value={note.eid} aria-describedby="emailHelp" onChange={onChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">name</label>
                                    <input type="text" className="form-control" id="ename" name="ename" value={note.ename} onChange={onChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}/>
                                </div>
 
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.eid.length<5||note.ename.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container row  mx-5">
                <div className="container mx-5"><h2 >Your Notes</h2></div>
                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes