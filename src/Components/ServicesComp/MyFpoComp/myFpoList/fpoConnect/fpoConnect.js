import React from 'react'
import {
  Grid,
  makeStyles,
  ListItemAvatar,
  Avatar,
  TextField,
} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import ChatIcon from '@material-ui/icons/Chat'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function FpoConnect() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const chatList = [
    {
      profileImage: '',
      name: 'Fruits Farmer Company',
      dateSent: '',
      message: '',
    },
    {
      profileImage: '',
      name: 'Vegetables Farmer Company',
      dateSent: '',
      message: '',
    },
    {
      profileImage: '',
      name: 'Apple Logistics',
      dateSent: '',
      message: '',
    },
    {
      profileImage: '',
      name: 'Marketing Services',
      dateSent: '',
      message: '',
    },
    {
      profileImage: '',
      name: 'All India Traders',
      dateSent: '',
      message: '',
    },
    {
      profileImage: '',
      name: 'International Buyers Group',
      dateSent: '',
      message: '',
    },
    {
      profileImage: '',
      name: '',
      dateSent: '',
      message: '',
    },
    {
      profileImage: '',
      name: '',
      dateSent: '',
      message: '',
    },
    {
      profileImage: '',
      name: '',
      dateSent: '',
      message: '',
    },
  ]
  return (
    <>
      <Grid>
        <Grid item lg={11} className="m-auto">
          <ul>
            <li>
              Enables communication within the members of the FPO through
              internal messaging system
            </li>
            <li>
              Can share any information or post queries related to
              product/management issues
            </li>
          </ul>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Grid>
        <Grid container justifyContent="center">
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            <ChatIcon /> FPC Connect
          </Button>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar className={classes.appBar}>
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  <ChatBubbleIcon /> FPC Connect
                </Typography>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Grid container item className="" style={{}}>
              <Grid
                style={{
                  width: '25%',
                  height: '650px',
                  overflow: 'auto',
                  borderRight: '1px solid grey',
                }}
              >
                {chatList.map((item, index) => (
                  <Grid key={index}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          src={`${process.env.PUBLIC_URL}/assets/farmer-avatar.jpg`}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.name}
                        secondary={
                          <React.Fragment>
                            {/* <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Ali Connors
                            </Typography> */}
                            {" I'll be in your neighborhood doing errands this…".slice(
                              0,
                              -12
                            )}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider />
                  </Grid>
                ))}
              </Grid>
              <Grid style={{}}>
                <Grid>
                  <TextField variant="outlined" />
                </Grid>
              </Grid>
            </Grid>
          </Dialog>
        </Grid>
      </Grid>
    </>
  )
}
