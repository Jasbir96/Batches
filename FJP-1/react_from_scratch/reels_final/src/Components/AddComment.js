import React,{useState} from 'react'
import './AddComment.css';
import { database } from '../firebase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
export default function AddComment({userData,postData}) {
    const useStyles = makeStyles({
        cbtn:{
           
            marginRight:'1%',
            marginTop: '4%'
        },
        
    });
    const classes = useStyles();
    const [ textu, setText ] = useState('');
    const manageText= (e)=>{
        let text = e.target.value;
        setText(text)
    }
    function handleOnEnter () {
        // console.log('enter', textu)
        let obj = {
            text:textu,
            uName:userData.fullName,
            uUrl:userData.profileUrl
        }
        database.comments.add(obj).then(doc=>{
            database.posts.doc(postData.postId).update({
                comments:[...postData.comments,doc.id]
            })
        }).catch(e=>{
            // console.log("This is the error "+e)
        })
        setText('')
      }
    return (
        <div className='emojibox'>
     <TextField fullWidth={true} value={textu} label="Add a comment" onChange={(e)=>manageText(e)} />
    <Button onClick={handleOnEnter} disabled={textu==''?true:false} className={classes.cbtn} color="primary">Post</Button>
    </div>
    )
}
