import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import uuid from 'react-uuid';
import { database, storage } from '../firebase';
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
    const [user, setUser] = useState();
    const [pageLoading, setpageLoading] = useState(true);
    const { signout, currentUser } = useContext(AuthContext);
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

        }
        // 
        if (file.size / (1024 * 1024) < 20) {
            alert("The selected file is very big");
            return;
        }
        // 1. upload 
        const uploadTask = storage.ref(`/posts/${uuid()}`).put(file);
        setLoading(true)
        //   progress
        const f1 = snapshot => {
            const progress = snapshot.bytesTransferred / snapshot.totalBytes;
            console.log(progress)
            //this callback is for providing the progress
        }
        // err
        const f2 = () => {
            alert("There was an error in uploading the file");
            return;
        }
        // success
        const f3 = () => {
            uploadTask.snapshot.ref.getDownloadURL().then(async url => {
                // 2.  
                // post collection -> post document put 
                let obj = {
                    comments: [],
                    likes: [],
                    url,
                    auid: currentUser.uid,
                    createdAt: database.getUserTimeStamp(),
                }
                //   put the post object into post collection 
                let postObj = await database.posts.add(obj);
                // 3. user postsId -> new post id put 
                await database.users.doc(currentUser.uid).update({
                    postIds: [...user.postIds, postObj.id]
                })
                console.log(postObj);
                setLoading(false);
            })
        }
        uploadTask.on('state_changed', f1, f2, f3)
    }
    // componentdidmount
    useEffect(async () => {
        console.log(currentUser.uid);
        // profile page -> change
        // resource intensive  
        // database.users.doc(currentUser.uid).onSnapshot((snapshot) => {
        //     console.log(snapshot.data());
        //     setUser(snapshot.data());
        //     setpageLoading(false);
        // })
        // how get a document from a collection in firebase 
        // auth user doen't contains any other data besides email ,password , uid
        //  you need to get the complete document from  the firstore using either of email or uid 

        let dataObject = await database.users.doc(currentUser.uid).get();
        // console.log(dataPromise.data());
        setUser(dataObject.data());
        setpageLoading(false);
    }, []);
    return (
        pageLoading == true ? <div>Loading....</div> :
            <div>
                <div className="navbar">
                    <Avatar alt="Remy Sharp" src={user.profileUrl} />
                    <button onClick={handleLogout} disabled={loading}>Logout</button>
                </div>
                <div className="uploadImage">
                    <div className={classes.root}>
                        <input accept="file" className={classes.input} id="icon-button-file" type="file"
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
