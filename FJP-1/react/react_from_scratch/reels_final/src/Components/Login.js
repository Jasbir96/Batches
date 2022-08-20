import React, { useState, useRef, useEffect } from 'react'
import './Login.css'
import Insta from '../Assets/insta.png'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InstaLogo from '../Assets/Instagram.JPG'
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Img1 from '../Assets/img1.jpg'
import Img2 from '../Assets/img2.jpg'
import Img3 from '../Assets/img3.jpg'
import Img4 from '../Assets/img4.jpg'
import Img5 from '../Assets/img5.jpg'
import { useAuth } from '../Context/AuthContext'
import { link, useHistory } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
export default function Login() {
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
    email: {
      // marginLeft:'1%',
      // marginRight:'1%'
      display: 'block'
    },
    password: {
      // marginLeft:'1%',
      // marginRight:'1%'
    },
    link: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2%'
    },
    link2: {
      display: 'inline',
      marginLeft: '1%',

    },
    typo: {
      display: 'flex',
      justifyContent: 'center',

    }
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const classes = useStyles();
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      // console.log(email,password)
      setError("")
      setLoading(true)
      await login(email, password)
      setLoading(false)
      history.push("/")
    } catch {
      setError("Failed to log in")
      setLoading(false)
    }
  }
  return (
    <div className='login-container'>
      <div className='imgcar' style={{ backgroundImage: `url(` + Insta + `)`, backgroundSize: 'cover' }}>
        <div className='caro'>
          <CarouselProvider
            visibleSlides={1}
            totalSlides={5}
            step={3}
            naturalSlideWidth={238}
            naturalSlideHeight={423}
            hasMasterSpinner
            isPlaying={true}
            infinite={true}
            dragEnabled={false}
            touchEnabled={false}
          >
            <Slider>
              <Slide index={0}>
                <Image src={Img1} />
              </Slide>
              <Slide index={1}>
                <Image src={Img2} />
              </Slide>
              <Slide index={2}>
                <Image src={Img3} />
              </Slide>
              <Slide index={3}>
                <Image src={Img4} />
              </Slide>
              <Slide index={4}>
                <Image src={Img5} />
              </Slide>
            </Slider>

          </CarouselProvider>
        </div>
      </div>
      <div className='login-form'>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <div className="insta-head">
              <img src={InstaLogo} />
            </div>
            {error && <Alert severity="error">{error}</Alert>}
            <TextField InputLabelProps={{ style: { width: '-webkit-fill-available' } }} className={classes.email} margin='dense'
              onChange={(e) => { handleEmail(e) }} id="outlined-basic" label="Enter Email" variant="outlined" fullWidth={true} size='small' />
            <TextField type="password" InputLabelProps={{ style: { width: '-webkit-fill-available' } }} className={classes.password} margin='dense'
              onChange={(e) => { handlePassword(e) }} id="outlined-basic" label="Password" variant="outlined" fullWidth={true} size='small' />
            <Typography variant='subtitle1'>
              {/* <Link className={classes.link} variant="inherit" underline='none' href="#" >
                Forget Password ?
              </Link> */}
            </Typography>
          </CardContent>
          <CardActions>
            <Button disabled={loading} onClick={handleSubmit} className={classes.buton} fullWidth={true} variant="contained" color="primary">
              Log In
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root2} variant="outlined">
          <CardContent>
            <Typography className={classes.typo} variant='subtitle1'>
              Don't have an account? <Link className={classes.link2} variant="inherit" underline='none' href="/signup" >
                Sign up
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
