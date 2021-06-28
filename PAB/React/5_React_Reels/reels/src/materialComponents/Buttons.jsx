import { IconButton } from '@material-ui/core';
//npm i  @material-ui/core @material-ui/icons
import React from 'react'
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
function Buttons() {
    return (
        <div>
            <h2>Buttons</h2>
            <Button variant="contained">Hello</Button>
            <Button variant="outlined">Hello</Button>
            <Button variant="text">Hello</Button>
            <h2>Color & Event Listeners</h2>
            {/* inline styling */}
            <Button variant="contained" style={{
                marginRight: "8px",
                backgroundColor: "lightgreen"
            }}>Hello</Button>
            <Button variant="outlined" color="secondary"
                href="https://material.io/components">Hello</Button>
            <Button variant="text" color="primary"
                onClick={() => { alert("Hello") }}>Hello</Button>
            <h2>Icons inside buttons</h2>
            <Button color="primary" variant="contained" style={{ marginRight: "8px" }} startIcon={<SendIcon></SendIcon>}>Send</Button>
            <Button color="primary" variant="contained" endIcon={<DeleteIcon></DeleteIcon>}>Delete</Button>
            <h2>Size</h2>
            <Button color="primary" variant="contained" style={{ marginRight: "8px" }} startIcon={<SendIcon></SendIcon>}
                size="small">Send</Button>
            <Button color="primary" variant="contained" endIcon={<DeleteIcon></DeleteIcon>} size="large">Delete</Button>
            <h2>Icons</h2>
            <IconButton >
                <DeleteIcon onClick={() => {
                    alert("Delete");
                }}></DeleteIcon>
            </IconButton>
            <IconButton>
                <SendIcon></SendIcon>
            </IconButton>
        </div>
    )
}

export default Buttons
