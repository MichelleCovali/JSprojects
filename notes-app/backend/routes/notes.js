// backend/routes/notes.js

const express = require('express');
const fs = require('fs');
const router = express.Router();
const DATA_FILE = './notes.json';

function readNotes() {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE);
    return JSON.parse(data);
}

function writeNotes(notes) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(notes, null, 2));
}

router.get('/', (req, res) => {
    const notes = readNotes();
    res.json(notes);
});

router.post('/', (req, res) => {
    const notes = readNotes();
    const newNote = {
        id: Date.now(),
        text: req.body.text,
    }
    notes.push(newNote);
    writeNotes(notes);
    res.status(201).json(newNote);
});

router.delete('/:id', (req, res) => {
    let notes = readNotes();
    notes = notes.filter(note => note.id != req.params.id);
    writeNotes(notes);
    res.status(204).end();
});

module.exports = router;