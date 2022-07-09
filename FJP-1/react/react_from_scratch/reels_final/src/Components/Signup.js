import React, { useState } from 'react'
import './Signup.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InstaLogo from '../Assets/Instagram.JPG'
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useHistory } from "react-router-dom";
import { useAuth } from '../Context/AuthContext';
import {storage,database} from '../firebase'
import Alert from '@material-ui/lab/Alert';
export default function Signup() {
    const useStyles = makeStyles({
        root: {
            width: '100%'
        },
        root2: {
            width: '100%',
            marginTop: '3%'
        },
        buton: {
            backgroundColor: '#0095f6',
            marginBottom: '3%',
            marginLeft: '4%',
            marginRight: '4%'
        },
        buton2:{
            display:'flex',
            alignContent:'center',
            justifyItems:'center',
            marginTop:'5%'
            
        },
        email: {
            // marginLeft:'1%',
            // marginRight:'1%'
            display: 'block'
        },
        link2: {
            display: 'inline',
            marginLeft: '1%',

        },
        typo: {
            display: 'flex',
            justifyContent: 'center',

        },
        typoh: {
            color: '#718093',
            textAlign: 'center'
        },
        typo3: {
            textAlign: 'center'
        }
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setfullName] = useState('');
    const [file,setFile] = useState(null);
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const { signup } = useAuth()
    const classes = useStyles();
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleName = (e) => {
        setfullName(e.target.value);
    }
    const handleUpload=(e)=>{
        let file = e?.target?.files[0];
        if(file!=null)
        setFile(file);
        // console.log(file)
    }
    const handleSignUp=async()=>{
        if(file==null)
        {
            // error show
            // remove
            setError("Please upload your profile Image");
            setTimeout(()=>{
                setError('')
            },2000)
            return;
        }
        try {
            setError("");
            setLoading(true);
           let userCredential= await signup(email, password);
           let uid = userCredential.user.uid;
        //    console.log(uid);
        // put 
            const uploadTask = storage.ref(`/users/${uid}/ProfileImage`).put(file);
        //    eventlistener
            uploadTask.on('state_changed', 
            // progress
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    
  }, 
  (error) => {
    // Handle unsuccessful uploads
    setError("Failed to upload File")
  },
//   success 
  () => {
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //   console.log('File available at', downloadURL);
      database.users.doc(uid).set({
          email:email,
          userId:uid,
          fullName:fullName,
          createdAt:database.getCurrentTimeStamp(),
          profileUrl:downloadURL
      })
    });
  }
);
            history.push("/")
          } catch(e) {
            setError("Failed to create an account "+e)
          }
    }

    return (
        <div className='signuoWrapper'>
            <div className='signupStyle'>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <div className="insta-head">
                            <img src={InstaLogo} />
                        </div>
                        {error && <Alert severity="error">{error}</Alert>}
                        <Typography className={classes.typoh} variant='subtitle1'>
                            Sign up to see photos and videos from your friends.
                        </Typography>
                        <TextField InputLabelProps={{ style: { width: '-webkit-fill-available' } }} className={classes.email} margin='dense' onChange={(e) => { handleEmail(e) }} id="outlined-basic" label="Enter Email" variant="outlined" fullWidth={true} size='small' />
                        <TextField InputLabelProps={{ style: { width: '-webkit-fill-available' } }} 
                        className={classes.password} margin='dense' onChange={(e) => { handlePassword(e) }} id="outlined-basic" label="Password" variant="outlined" fullWidth={true} size='small' 
                        type="password"
                        />
                        <TextField InputLabelProps={{ style: { width: '-webkit-fill-available' } }} margin='dense' onChange={(e) => { handleName(e) }} id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} size='small' />
                        <Button
                            variant="outlined"
                            color="secondary"
                            component="label"
                            startIcon={<CloudUploadIcon />}
                            className={classes.buton2}
                        >
                            Upload Profile Image
                            <input
                             accept="image/*"
                                type="file"
                                hidden
                                onChange={(e)=>handleUpload(e)}
                            />
                        </Button>
                    </CardContent>

                    <CardActions>
                        <Button disabled={loading} onClick={handleSignUp} className={classes.buton} fullWidth={true} variant="contained" color="primary">
                            Sign up
                        </Button>
                    </CardActions>
                    <CardContent>
                        <Typography className={classes.typo3} variant='subtitle1'>
                            By signing up, you agree to our Terms , Data Policy and Cookies Policy .
      </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.root2} variant="outlined">
                    <CardContent>
                        <Typography className={classes.typo} variant='subtitle1'>
                            Have an account? <Link className={classes.link2} variant="inherit" underline='none' href="/login" >
                                Log In
  </Link>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
