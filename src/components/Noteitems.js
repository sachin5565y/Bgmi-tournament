import React,{useContext} from 'react';
import noteContext from './context/notes/noteContext';
const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">Name-{note.name}</h5>
                        <i className="far fa-trash-alt mx-3" onClick={()=>{deleteNote(note._id)}}></i>
                        
                    </div>
                    <p className="card-text">Game_id-{note.id}</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem