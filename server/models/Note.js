const { Schema, model } = require('mongoose');

const NoteSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Note = model('Note', NoteSchema);

module.exports = Note;