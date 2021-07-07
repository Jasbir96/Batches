import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    hidden: {
        display: "flex"
    }
}));

export default function Overlay(props) {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div>POPUP
           
        </div>
    );
}
