// Notes.js
import React, { useState } from 'react';
import { useNoteContext } from './NoteContext';

const Notes = () => {
  const { state, dispatch } = useNoteContext();
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote) {
      dispatch({ type: 'ADD_NOTE', payload: { id: Date.now(), content: newNote } });
      setNewNote('');
    }
  };

  const editNote = (id, content) => {
    dispatch({ type: 'EDIT_NOTE', payload: { id, content } });
  };

  const deleteNote = (id) => {
    dispatch({ type: 'DELETE_NOTE', payload: id });
  };

  return (
    <div>
      <h1 className='title'>Notes App</h1>
      <h2 className='notepage'>Notes</h2>
      <input className='myNOTES' type="text" value={newNote.titel} onChange={(e) => setNewNote(e.target.value)} placeholder='Take a note...' />
      <button className='AddNOTE' onClick={addNote}>Add Note</button>
      <p className='NYNOTE'>My Notes</p>
      <p className='View'>Recently Viewed</p>
      
        {state.notes.map((note) => (
          <div className='Notes-container' key={note.id}>
            {note.content}
            <button className='Edite' onClick={() => editNote(note.id, prompt('Edit note:', note.content))}>Edit</button>
            <button className='delete' onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))}
      
    </div>
  );
};

export default Notes;
