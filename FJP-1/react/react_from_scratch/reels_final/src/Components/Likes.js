import React,{useState,useEffect}  from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import {database} from '../firebase';
export default function Likes({userData=null,postData=null}) {
  // console.log('rendered');
    const useStyles = makeStyles({
     like:{
         color:'#e74c3c',
         cursor:'pointer',
     },
     unlike:{
        cursor:'pointer',
        color:'white'
     }
      });
      useEffect(() => {
        // console.log(userData);
        let check = postData.likes.includes(userData?.userId)?true:false;
        // console.log(check);
        setLike(check);
      },[postData])
      const [like,setLike]=useState(null);
      const handleLike=()=>{
          if(like==true)
          {
              let uarr = postData.likes.filter(el=>{
                  return el!=userData.userId;
              })
              database.posts.doc(postData.postId).update({
                  likes:uarr
              }).then(()=>{
                // setLike(false);
              }).catch((e=>{
                //   console.log(e);
              }))    
          }
          else
          {
              //we have to make it true
              let uarr = [...postData.likes,userData.userId]
            //   console.log(uarr);
              database.posts.doc(postData.postId).update({
                likes:uarr
            }).then(()=>{
                // setLike(true);
            }).catch((e=>{
                // console.log(e);
            }))

          }
      }
      const classes = useStyles();
    return (
        <div>
            {like!=null?
        <>
            {like==false?<FavoriteIcon className={`${classes.unlike} icon-styling`} onClick={handleLike}/>:
              <FavoriteIcon className={`${classes.like} icon-styling`} onClick={handleLike} />}
        </>:<></>}
        </div>
    )
}
