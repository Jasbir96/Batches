import React, { useState, useEffect } from 'react'
import Header from '../Components/Header';
import { database } from '../firebase';
import { useAuth } from '../Context/AuthContext';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Likes from '../Components/Likes';
import Comments from '../Components/Comments'
import AddComment from '../Components/AddComment';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Profile.css'
const useStyles = makeStyles({
  bavatar:
  {
    height: '23vh',
    width: '40%',
    margin: '0'
  },
  tfw: {
    fontWeight: '300'
  },
  tfw2: {
    fontWeight: '500',
    marginLeft: '2%'
  },
  seeComments: {
    height: '54vh',
    overflowY: 'auto'
  }
})
export default function Profile() {
  const [openId, setOpenId] = React.useState(null);
  const [comments, setComments] = useState({})
  // const [open, setOpen] = useState(false);
  const handleClickOpen = (id) => {
    setOpenId(id);
  };
  const handleClose = () => {
    setOpenId(null);
  };
  const classes = useStyles();
  const [userData, setUserData] = useState(null);
  const [posts, setPosts] = useState(null);
  const { currentUser } = useAuth();
  let { id } = useParams();
  useEffect(() => {

    const unsub = database.users.doc(id).onSnapshot((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setUserData(doc.data());

    })
    return () => { unsub() };
  }, [id])


  useEffect(async () => {
    let parr = [];

    parr = [];
    if (userData != null&&userData.postIds) {
      

        for (let i = 0; i < userData.postIds.length; i++) {
          let pid = userData.postIds[i];
          let data = await database.posts.doc(pid).get();
          // console.log(data.data());
          parr.push(data.data());
        }
    }
    setPosts(parr);

  }, [userData])



  return (
    <>
      {
        userData == null || posts == null ? <CircularProgress /> : <>
          <Header userData={userData} />
          <div className='spacer'></div>
          <div className='pg-container'>
            <div className='upper-part'>
              <div className='bimg'>
                <img src={userData?.profileUrl} />
              </div>
              <div className='info'>

                <Typography align='center' variant='h6' className={classes.tfw}>
                  {userData?.fullName}
                </Typography>
                <div className='post-cal'>
                  <Typography display='inline' align='center' variant='subtitle1' className={classes.tfw}>
                    No of Posts
                  </Typography>
                  <Typography display='inline' align='center' variant='subtitle1' className={classes.tfw2} >
                    {userData?.postIds?.length || 0} Posts
                  </Typography>
                </div>
                <div className='post-cal'>
                  <Typography display='inline' align='center' variant='subtitle1' className={classes.tfw}>
                    Email
                  </Typography>
                  <Typography display='inline' align='center' variant='subtitle1' className={classes.tfw2} >
                    {userData?.email}
                  </Typography>
                </div>
              </div>
            </div>

            <div className='uposts'>
              {
                posts.map((post, index) => (
                  <React.Fragment key={index}>

                    <video className='u-video' src={post.pUrl} onClick={() => handleClickOpen(post.pId)} />
                    <Dialog maxWidth="md" onClose={handleClose} aria-labelledby="customized-dialog-title" open={openId === post.pId}>
                      <MuiDialogContent>
                        <div className='dcontainer'>
                          <div className='video-part'>
                            <video autoPlay={true} className='video-styles2' controls id={post.id} muted="muted" type="video/mp4" >
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

                                <Comments userData={userData} postData={post} comments={comments} setComments={setComments} />
                              </CardContent>

                            </Card>
                            <div className='extra'>
                              <div className='likes'>
                                <Likes userData={userData} postData={post} />
                                <Typography className={classes.typo} variant='body2'>Liked By {post.likes.length == 0 ? 'nobody' : ` others`}</Typography>
                              </div>
                              <AddComment userData={userData} postData={post} acomments={comments} setComments={setComments} />
                            </div>
                          </div>
                        </div>
                      </MuiDialogContent>
                    </Dialog>
                  </React.Fragment>
                ))
              }
            </div>
          </div>

        </>
      }
    </>
  )
}
