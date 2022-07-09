import React, { useState, useEffect } from 'react'
import { database } from '../firebase';
import {useHistory } from "react-router-dom";
import Video from './Video';
import { makeStyles } from '@material-ui/core/styles';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Ticker from 'react-ticker';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import './Posts.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import Likes from './Likes';
import Likes2 from './Likes2';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Comments from './Comments';
import AddComment from './AddComment';
const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '0px'
  },
  loader: {
    position: 'absolute',
    left: '50%',
    top: '50%'
  },
  typo: {
    marginLeft: '2%'
  },
  vac: {
    marginLeft: '3.5%',
    color: '#8e8e8e',
    cursor:'pointer'
  },
  dp: {
    marginLeft: '2%'
  },
  cc: {
    height: '50vh',
    overflowY: 'auto'
  },
  seeComments:{
    height:'54vh',
    overflowY:'auto'
  },
  ci:{
  
    color: 'white',
    left:'9%',
    cursor:'pointer'
  },
  mn:{
    color:'white',
  },
  tmn:{
    color:'white'
  }
});
export default function Posts({ userData = null }) {
  const [openId, setOpenId] = useState(null);
  const history = useHistory();
  const handleProfileClick = (id)=>{
    history.push(`/profile/${id}`)
  }
  const handleClickOpen = (id) => {
    setOpenId(id);
  };
  const handleClose = () => {
    setOpenId(null);
  };
  const classes = useStyles();
  const [posts, setPosts] = useState(null);
  // const [comments,setComments] =useState(null) 
  const callback = async entries => {
    // console.log(entries);
    entries.forEach(element => {
      let child = element.target.childNodes[0];
      let id = child.getAttribute("id");
      console.log(id);
      let el = document.getElementById(`${id}`);
      // if(element.intersectionRatio!=1 && !el.paused){

      //   el.pause();
      //   // console.log(p);
      // }
      // else if(element.isIntersecting==true && el.paused ) {
      //   // console.log(el)
      //     el.play(); 
      //   // console.log(p)

      // }
      // el.play is asynchronous
      el.play().then(() => {
        if ( !el.paused && element.isIntersecting != true) {
          el.pause();
          // console.log(p);
        }
      })
    });
  };
  const observer = new IntersectionObserver(callback, {
    threshold: 0.85,
  });
  useEffect(() => {
    let parr = [];
    const unsub=database.posts.orderBy('createdAt','desc').onSnapshot(querySnapshot => {
      // console.log('The snapshot method was called')
      parr = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        // console.log("The loop was executed")
        let data = { ...doc.data(), postId: doc.id }
        // console.log(data);
        parr.push(data);
      });
      setPosts(parr);
    })
    // .catch((error) => {
    //     console.log("Error getting documents: ", error);
    // });
    // unsub();
    return unsub;
  }, [])
  useEffect(() => {
    if (typeof window == 'object') {
      let elements = document.querySelectorAll('.videos')
      // console.log(elements)
      elements.forEach(el => {
        // console.log(el);
        observer.observe(el);
      })
      // console.log(posts)
      return () =>{
        observer.disconnect();
        console.log('removed');      
      } 
    }
  }, [posts])
  return (
    <>
      <div className='place'></div>
      {posts==null || userData == null ? <CircularProgress className={classes.loader} /> :
        <div className='video-container' id="video-container">
          {posts.map((post, index) => (
            <React.Fragment key={index}>
                    <div className="videos">
                      <Video source={post.pUrl} id={post.pId} />
                      <div className='fa' style={{display:'flex'}}>
                        <Avatar src={post.uProfile}></Avatar>
                        <h4>{post.uName}</h4>
                      </div>
                      <div className='video-ticker'  >
                      <Ticker direction='toRight' offset='20%' mode='smooth'>
        {({ index }) => (
            <>
           <Typography align='center' variant='subtitle2' className={classes.tmn}>
             <MusicNoteIcon fontSize='small' className={classes.mn} /> This is sample
           </Typography> 
            </>
        )}
                    </Ticker>
                      </div>
                      <Likes userData={userData} postData={post} />
                      <ChatBubbleIcon onClick={() => handleClickOpen(post.pId)} className={`${classes.ci} icon-styling`} />
                      <Dialog maxWidth="md" onClose={handleClose} aria-labelledby="customized-dialog-title" open={openId === post.pId}>
                        <MuiDialogContent>
                          <div className='dcontainer'>
                            <div className='video-part'>
                              <video  autoPlay={true} className='video-styles2' controls id={post.id} muted="muted" type="video/mp4" >
                                <source src={post.pUrl} type="video/webm" />
                              </video>
                            </div>
                            <div className='info-part'>
                              <Card>
                                <CardHeader
                                  avatar={
                                    <Avatar src={post?.uProfile} aria-label="recipe" className={classes.avatar}>
                                    </Avatar>
                                  }
                                  action={
                                    <IconButton aria-label="settings">
                                      <MoreVertIcon />
                                    </IconButton>
                                  }
                                  title={post?.uName}
                                />
                                <hr style={{ border: "none", height: "1px", color: "#dfe6e9", backgroundColor: "#dfe6e9" }} />
                                <CardContent className={classes.seeComments}>
                                <Comments userData={userData} postData={post} />
                                </CardContent> 
                              </Card>
                              <div className='extra'>
                              <div className='likes'>
                                <Likes2 userData={userData} postData={post} />
                                <Typography className={classes.typo} variant='body2'>Liked By {post.likes.length == 0 ? 'nobody' : ` others`}</Typography>
                                </div>
                                <AddComment  userData={userData} postData={post}/> 
                                </div>
                            </div>
                          </div>
                        </MuiDialogContent>
                      </Dialog>
                    </div>
              <div className='place'>
              </div>
            </React.Fragment>
          ))}
        </div>
      }
    </>
  )
}
