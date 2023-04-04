import React, { useContext, useEffect } from 'react'
import noteContext from "../components/context/notes/noteContext"
import Noteitem from './Noteitems';
import AddNote from './AddNote';

const Notes = (props) => {
    const context = useContext(noteContext);
    const { notes, getNotes, } = context;
    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <AddNote showAlert={props.showAlert}/>
            <div className="row my-3">
                <h2>You have Register for Erangel Tournament</h2>
                <div className='container mx-2'>
                    {notes.length === 0 && 'No notes to display'}
                </div>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes