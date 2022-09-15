import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MovieIcon from '@material-ui/icons/Movie';
import LinearProgress from '@material-ui/core/LinearProgress';
import { database, storage } from '../firebase';
import Alert from '@material-ui/lab/Alert';
export default function UploadFile(props) {
  const useStyles = makeStyles({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const types = ['video/mp4', 'video/webm', 'video/ogg'];
  const onChange = (e) => {
    // input file -> single file , multiple file le 
    const file = e?.target?.files[0];
    // console.log(props)
    if (file == null) {
      setError("Please select a file");
      setTimeout(() => {
        setError(null);
      }, 2000)
      return;
    }
    // console.log(file);
    if (types.indexOf(file.type) == -1) {
      setError("Please select a video file");
      setTimeout(() => {
        setError(null);
      }, 2000)
      return;
    }
    if (file.size / (1024 * 1024) > 100) {
      setError("The selected file is very big");
      setTimeout(() => {
        setError(null);
      }, 2000)
      return;
    }

    //initially we will be making it by using the firestore's id..this will be served as an improvement.
    const id = uuidv4();
    // path ->// /post/userId/filename file -> file
    const uploadTask =
      storage.ref(`/posts/${props.userData.userId}/${file.name}`).put(file);
    uploadTask.on('state_changed',
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        //this callback is for providing the progress
      }, () => {
        setError("There was an error in uploading the file");
        return;
      }, () => {
        setLoading(true)
        uploadTask.snapshot.ref.getDownloadURL()
          .then(url => {
            let obj = {
              comments: [],
              likes: [],
              pId: id,
              pUrl: url,
              uName: props?.userData?.fullName,
              uProfile: props?.userData?.profileUrl,
              userId: props?.userData?.userId,
              createdAt: database.getCurrentTimeStamp()
            }
            database.posts.add(obj).then(async docRef => {
              let res = await database.users.doc(props.userData.userId).update({
                postIds: [...props.userData.postIds, docRef.id]
              })
            })
              .then(() => {
                // props.setPosts([...props.posts,obj])
                setLoading(false);
              })
              .catch(e => {
                setError(e);
                setTimeout(() => {
                  setError(null);
                }, 2000)
                setLoading(false);
              })
          })
      })

  }
  return (
    <div>
      {error != null ? <Alert severity="error">{error}</Alert> :
        <>
          <input
            color="primary"
            type="file"
            onChange={onChange}
            id="icon-button-file"
            style={{ display: 'none', }}
          />
          <label htmlFor="icon-button-file">
            <Button
              disabled={loading}
              variant="outlined"
              component="span"
              className={classes.button}
              size="medium"
              color="secondary"
            >
              <MovieIcon className={classes.extendedIcon} />&nbsp; Upload Video
            </Button>
          </label>
          {loading == true ? <LinearProgress color='secondary' style={{ marginTop: '2%' }} /> : <></>}
        </>
      }
    </div>
  )
}