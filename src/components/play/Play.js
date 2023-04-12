import './play.css'
import IMG1 from '../../assets/erangel.jpg'
import React, {useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'
const Play = (props) => {
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
    <section id='play' bgcolor="blue">
    <h5 align="center">You can register here</h5>
    
    <div className='container play_container'>
      <article className='play_item'>
        <div className='play_item-image'>
        <img src={IMG1} className="img-fluid" alt="..."/>
        </div>
        <div className="container my-3" >
        
            
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="id" className="form-label" >Game_id</label>
                    <input type="text" className="form-control" id="id" name="id" aria-describedby="emailHelp" value={note.id} onChange={onChange} minLength={5} required  /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name"  onChange={onChange}value={note.name}  required/>
                </div>
                
                <button disabled={note.name.length<5||note.id.length<5} type="submit" className="btn btn-primary"onClick={handleClick} minLength={5} required >Register</button>
            </form>
            
        </div>
      </article>
     
      
     
    </div>
  </section>
  )
}

export default Play