const express = require('express');
const cors = require('cors');
const notesRouter = require('./routes/notes');

const app = express();
const PORT  = 3001;

app.use(cors());
app.use(express.json());
app.use('/api/notes', notesRouter);

const DATA_FILE = './notes.json';

app.get('/' , (req, res) => {
    res.send('Hello World');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});