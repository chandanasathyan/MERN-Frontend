import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const UpdateNote = ({ updateNoteForm, updateNote, handleUpdateField, open, handleClose }) => {
    return (
        <div>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{
                    m: 0,
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                    color: "#00796B",
                    textTransform: "uppercase",
                }} id="customized-dialog-title">
                    Update Note
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent sx={{

                }}>
                    <form onSubmit={updateNoteForm} style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        minWidth: "500px"
                    }}>
                        <TextField label="title"
                            name="title"
                            value={updateNote.title}
                            onChange={handleUpdateField}
                        ></TextField>
                        <TextField label="description"
                            name="body"
                            value={updateNote.body}
                            onChange={handleUpdateField}
                            sx={{
                                mt: 3
                            }}
                        ></TextField>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        updateNoteForm();
                        handleClose();
                    }} sx={{
                        background: "#00796B",
                        color: "#fff",
                        '&:hover': {
                            background: "#00796B",
                            color: "#fff"
                        }
                    }}>Submit</Button>
                </DialogActions>
            </Dialog >
        </div >
    )
}

export default UpdateNote