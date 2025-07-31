import React, { useState, useEffect } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/notes')
      .then(response => response.json())
      .then(data => setNotes(data));
  }, []);

  const handleAddNote = () => {
    fetch('http://localhost:3001/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: newNote }),
    })
      .then(response => response.json())
      .then(data => setNotes([...notes, data]));
    setNewNote('');
  };

  const handleDeleteNote = (id) => {
    fetch(`http://localhost:3001/api/notes/${id}`, {
      method: 'DELETE',
    }).then(() => setNotes(notes.filter(note => note.id !== id)));
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {note.text}
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newNote}
        onChange={e => setNewNote(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default Notes;
