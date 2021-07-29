import React from 'react'
import {
  TextField,
  Button,
  makeStyles,
  Grid,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'

export default function ContactUs() {
  const useStyles = makeStyles((theme) => ({
    contactUsWrap: {
      margin: '1em auto 1em',
      // border: '1px solid red'
    },
    fpoGittextField: {
      marginBottom: '0.5em',
    },
    mapBorder: {
      border: '1px solid black',
      borderRadius: '15px 15px',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.75)',
    },
    contactusSocialIcons: {
      marginBottom: '0.5em',
    },
    contactGitWrap: {
      backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/contactus/worldmap.png")`,
      // backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
  }))
  const classes = useStyles()
  return (
    <>
      <Grid container justify="space-around" className={classes.contactUsWrap}>
        <Grid lg={11} container item justify="space-between">
          <Grid>
            <h4>Contact Us</h4>
          </Grid>
          <Grid
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Grid>
              <Avatar />
            </Grid>
            <span>
              Help Line Number
              <br /> +91 9293858689
            </span>
          </Grid>
        </Grid>
        <Grid lg={12} container item justifyContent="space-around">
          <Grid lg={7} item>
            <h4 className="text-center">FEED Offices</h4>
            <Grid container justifyContent="space-between" className="mt-4">
              <Grid>
                <h5 className="fas fa-building"> Head Office</h5>
                <h5>New Delhi</h5>
                <address>
                  First floor, Anand Heights, Kedareswarapet Main Rd,
                  <br /> near Prabhas college, Lotus Landmark, Ayodhya Nagar,
                  <br />
                  Vijayawada Andhra Pradesh - 520003.
                </address>
                <Grid>
                  <h6>
                    <i className="fas fa-map-marker-alt"></i> Location Map
                  </h6>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.022969650659!2d80.62855171469059!3d16.524937988600765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35ef2d39bacd51%3A0x6fc2276740e8bd32!2sFEED%20ORG!5e0!3m2!1sen!2sin!4v1624625259164!5m2!1sen!2sin"
                    width="400"
                    height="200"
                    style={{ border: '0px' }}
                    className={classes.mapBorder}
                    allowFullScreen
                  ></iframe>
                </Grid>
                <Grid>
                  <h6>
                    <i className="fas fa-user"></i> Contact Details
                  </h6>
                  <small>
                    <i className="fas fa-phone-alt"></i> +91 9293858689
                    <br />
                    <i className="fas fa-envelope"></i> info@feedorg.com
                    <br />
                    <i className="fas fa-globe"></i> www.feedorg.com
                  </small>
                </Grid>
              </Grid>
              <Grid>
                <h5 className="fas fa-home"> Branch Office</h5>
                <h5>Vijayawada</h5>
                <address>
                  First floor, Anand Heights, Kedareswarapet Main Rd,
                  <br /> near Prabhas college, Lotus Landmark, Ayodhya Nagar,
                  <br />
                  Vijayawada Andhra Pradesh - 520003.
                </address>
                <Grid>
                  <h6>
                    <i className="fas fa-map-marker-alt"></i> Location Map
                  </h6>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.022969650659!2d80.62855171469059!3d16.524937988600765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35ef2d39bacd51%3A0x6fc2276740e8bd32!2sFEED%20ORG!5e0!3m2!1sen!2sin!4v1624625259164!5m2!1sen!2sin"
                    width="400"
                    height="200"
                    style={{ border: '0px' }}
                    className={classes.mapBorder}
                    allowFullScreen
                  ></iframe>
                </Grid>
                <Grid>
                  <h6>
                    <i className="fas fa-user"></i> Contact Details
                  </h6>
                  <small>
                    <i className="fas fa-phone-alt"></i> +91 9293858689
                    <br />
                    <i className="fas fa-envelope"></i> info@feedorg.com
                    <br />
                    <i className="fas fa-globe"></i> www.feedorg.com
                  </small>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid lg={4} item className={classes.contactGitWrap}>
            <Grid container className="mt-4">
              <h4 className="text-danger">Get in Touch</h4>
            </Grid>
            <Grid lg={12} item container justify="space-between">
              <Grid lg={9} item>
                <form justify="space-evenly" direction="column">
                  <TextField
                    fullWidth
                    id=""
                    name=""
                    label="Name"
                    variant="outlined"
                    className={classes.fpoGittextField}
                  />
                  <TextField
                    fullWidth
                    id=""
                    name=""
                    label="Mobile No:"
                    variant="outlined"
                    className={classes.fpoGittextField}
                  />
                  <textarea
                    style={{ width: '100%' }}
                    placeholder="Message"
                    rows="4"
                    className={classes.fpoGittextField}
                  ></textarea>
                  <button className="btn btn-warning">Submit</button>
                </form>
              </Grid>
              <Grid
                container
                lg={2}
                item
                direction="column"
                justify="space-between"
                alignItems="center"
              >
                <a href="">
                  <Avatar
                    variant="square"
                    src={`${process.env.PUBLIC_URL}/assets/facebook.svg`}
                    className={classes.contactusSocialIcons}
                  />
                </a>
                <a href="">
                  <Avatar
                    variant="square"
                    src={`${process.env.PUBLIC_URL}/assets/instagram.svg`}
                    className={classes.contactusSocialIcons}
                  />
                </a>
                <a href="">
                  <Avatar
                    variant="square"
                    src={`${process.env.PUBLIC_URL}/assets/twitter.svg`}
                    className={classes.contactusSocialIcons}
                  />
                </a>
                <a href="">
                  <Avatar
                    variant="square"
                    src={`${process.env.PUBLIC_URL}/assets/linkedin.svg`}
                    className={classes.contactusSocialIcons}
                  />
                </a>
                <a href="">
                  <Avatar
                    variant="square"
                    src={`${process.env.PUBLIC_URL}/assets/youtube.svg`}
                    className={classes.contactusSocialIcons}
                  />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
