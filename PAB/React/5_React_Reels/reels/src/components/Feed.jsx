import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import uuid from 'react-uuid';
function Feed() {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
    }));
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const { signout } = useContext(AuthContext);
    // const [reel, setReel] = useState();
    const handleLogout = async () => {
        try {
            setLoading(true);
            // auth provider 
            await signout();
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false)
        }
    }
    const handleInputFile = (e) => {
        e.preventDefault();
        let file = e?.target?.files[0];
        if (file != null) {
            console.log(e.target.files[0])
            // setReel(e.target.files[0]); 
            try {
                setLoading(true)
                // const uploadTaskListener = storage
                //     .ref(`/posts`).put(file);
                // fn1 -> progress
                // fn2 -> error 
                // fn3-> success
                // let purl// put video in post storage
                let puid = uuid();
                const uploadTaskListener = storage
                    .ref(`/posts/${puid}`).put(file);
                uploadTaskListener.on('state_changed', fn1, fn2, fn3);
                function fn1(snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(progress);
                }
                function fn2(error) {
                    setError(error);
                    setLoader(false);
                }
                async function fn3() {
                    let posobj = {
                        likes: [],
                        comment: [],
                    }
                    // link get 
                    //  let puid=make postDocument and put in post collection
                    // put this puid into the current users
                }



            } catch (err) {

            }
        }
    }
    return (
        <div>
            <div className="navbar">

                <button onClick={handleLogout} disabled={loading}>Logout</button>
            </div>
            <div className="uploadImage">
                <div className={classes.root}>
                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file"
                        onChange={handleInputFile}
                    />
                    <label htmlFor="icon-button-file">
                        <Button variant="contained" color="primary" component="span" disabled={loading} endIcon={<PhotoCamera />}>
                            Upload
                        </Button>
                    </label>
                </div>
            </div>
            <div className="feed">
                Feed
            </div>
        </div>
    )
}

export default Feed
