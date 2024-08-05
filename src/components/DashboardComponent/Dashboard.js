import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, } from '@mui/material';
import {
    CreateBox,
    ContainerBox,
    ContainerText,
    CreateButton,
} from "./style"
import UpdateNote from './UpdateNote';

const Dashboard = () => {
    const [notes, setNotes] = useState(null);
    const [createNote, setCreateNote] = useState({
        title: "",
        body: ""
    });
    const [updateNote, setUpdateNote] = useState({
        _id: null,
        title: "",
        body: "",
    })
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        fetchNotes();
    }, [])

    const fetchNotes = async () => {
        const res = await axios.get("http://localhost:3000/notes");

        setNotes(res.data.notes);
    }

    const createNoteField = (e) => {
        const { name, value } = e.target;
        setCreateNote({
            ...createNote,
            [name]: value,
        })
    }

    const createNoteFn = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:3000/notes", createNote);
        setNotes([...notes, res.data.note])
        setCreateNote({ title: "", body: "" })
    }

    const deleteNote = async (_id) => {
        const res = await axios.delete(`http://localhost:3000/notes/${_id}`);

        const newNotes = [...notes].filter((note) => {
            return note._id !== _id;
        })
        setNotes(newNotes);
    }

    const handleUpdateField = (e) => {
        const { value, name } = e.target

        setUpdateNote({
            ...updateNote,
            [name]: value,
        })
    }

    const toggleUpdate = (note) => {
        setUpdateNote({ title: note.title, body: note.body, _id: note._id })
    }

    const updateNoteForm = async (e) => {

        const { title, body } = updateNote;

        const res = await axios.put(`http://localhost:3000/notes/${updateNote._id}`,
            { title, body }
        )

        const newNotes = [...notes];
        const noteIndex = notes.findIndex((note) => {
            return note._id === updateNote._id;
        });
        newNotes[noteIndex] = res.data.note;

        setNotes(newNotes);

        setUpdateNote({
            _id: null,
            title: "",
            body: "",
        });
    }

    return (
        <div>
            <CreateBox>
                <ContainerBox>
                    <ContainerText>Create Notes</ContainerText>
                    <TextField
                        label="Title"
                        variant="outlined"
                        name="title"
                        value={createNote.title}
                        onChange={createNoteField}
                        sx={{ mt: 5 }}
                    />
                    <TextField id="outlined-basic"
                        label="Description"
                        variant="outlined"
                        name="body"
                        value={createNote.body}
                        onChange={createNoteField}
                        sx={{ mt: 5, ml: 3 }}
                    />
                    <CreateButton onClick={createNoteFn}>Create</CreateButton>
                </ContainerBox>
            </CreateBox >

            <TableContainer sx={{
                display: 'flex',
                justifyContent: "center",
            }}>
                <Table aria-label="simple table" sx={{
                    border: "2px solid #00796B", margin: "40px"
                }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontSize: "14px", textTransform: "uppercase", fontWeight: 600 }}>Title</TableCell>
                            <TableCell sx={{ fontSize: "14px", textTransform: "uppercase", fontWeight: 600 }}>Description</TableCell>
                            <TableCell align='right' sx={{ fontSize: "14px", textTransform: "uppercase", fontWeight: 600 }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {notes && notes.map((note) => (
                            <TableRow key={note._id}>
                                <TableCell >
                                    {note.title}
                                </TableCell>
                                <TableCell>{note.body}</TableCell>
                                <TableCell align='right'>
                                    <Button onClick={() => {
                                        toggleUpdate(note);
                                        handleClickOpen();
                                    }}
                                        sx={{
                                            background: "#00796B",
                                            color: "#fff",
                                            '&:hover': {
                                                background: "#00796B",
                                                color: "#fff"
                                            }
                                        }}
                                    >Update</Button>
                                    <Button onClick={() =>
                                        deleteNote(note._id)}
                                        sx={{
                                            background: "#00796B",
                                            color: "#fff",
                                            '&:hover': {
                                                background: "#00796B",
                                                color: "#fff"
                                            },
                                            ml: "5px"
                                        }}
                                    > Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
            <div>
                <UpdateNote
                    updateNoteForm={updateNoteForm}
                    updateNote={updateNote}
                    handleUpdateField={handleUpdateField}
                    open={open}
                    handleClose={handleClose}
                />
            </div>
        </div >
    )
}

export default Dashboard