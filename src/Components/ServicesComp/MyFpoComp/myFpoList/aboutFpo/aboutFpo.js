import React from 'react'
import './aboutFpo.css'
import {
  Grid,
  makeStyles,
  Avatar,
  TextField,
  TextareaAutosize,
  FormControl,
} from '@material-ui/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
SwiperCore.use([Pagination, Navigation])
export default function AboutFpo() {
  const aboutFpo = [
    {
      logo: '',
      title: '',
      content: '',
    },
  ]

  const productAndServices = [
    {
      productImg: 'rose.jpeg',
      productContent: `Alice is a freelance web designer 
      and developer based in London. She is specialized in HTML5, CSS3, 
      JavaScript, Bootstrap, etc freelance web designer and developer based in London. 
      She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc freelance web designer and developer.`,
    },
    {
      productImg: 'rosetwo.jpg',
      productContent: `Alice is a freelance web designer 
      and developer based in London. She is specialized in HTML5, CSS3, 
      JavaScript, Bootstrap, etc freelance web designer and developer based in London. 
      She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc freelance web designer and developer.`,
    },
  ]
  const useStyles = makeStyles((theme) => ({
    pnsImg: {
      maxWidth: '220px',
      maxHeight: '180px',
      width: 'auto',
      height: 'auto',
      backgroundRepeat: 'no-repeat',
    },
    productServicesWrap: {
      marginBottom: '0.5em',
    },
    aboutFpoGallery: {
      // border: '1px solid red',
      backgroundColor: '#c6e3a0',
      borderRadius: '15px 15px',
    },
    aboutFpoContact: {
      // border: '1px solid red'
    },
    fpoGittextField: {
      marginBottom: '0.5em',
    },
  }))
  const classes = useStyles()
  return (
    <>
      <Grid container className={classes.aboutFpoWrap}>
        <Grid container justify="space-evenly">
          <Grid lg={9}>
            <Grid style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Avatar
                src={`${process.env.PUBLIC_URL}/assets/sample-fpo-logo.svg`}
                alt="FPO LOGO"
              />
              <h4
                className="p-1"
                style={{
                  border: '3px solid grey',
                  borderRadius: '15px 15px',
                }}
              >
                Rose Farm Producer Co Pvt Ltd
              </h4>
            </Grid>
            <Grid>
              <Grid className="col-lg-11 about-fpo-content">
                <h5>About FPC</h5>
                <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic
                  typesetting, remaining essentiallya type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unknown printer
                  took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the
                  leap into electronic typesetting, remaining essentially.
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid lg={3}>
            <div className="about-fpo-info-card">
              <div className="col-lg-6 p-1 about-fpo-info-card-role info-card-orange">
                <span className="my-auto">01</span>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/statc.svg`}
                  width="40%"
                  className="p-2"
                  alt=""
                />
              </div>
              <div className="col-lg-6">Info</div>
            </div>
            <div className="about-fpo-info-card">
              <div className="col-lg-6 p-1 about-fpo-info-card-role info-card-green">
                <span className="my-auto">02</span>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/home-icon.svg`}
                  width="40%"
                  className="p-2"
                  alt=""
                />
              </div>
              <div className="col-lg-6">Info</div>
            </div>
            <div className="about-fpo-info-card">
              <div className="col-lg-6 p-1 about-fpo-info-card-role info-card-teal">
                <span className="my-auto">03</span>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/bulb-icon.svg`}
                  width="40%"
                  className="p-2"
                  alt=""
                />
              </div>
              <div className="col-lg-6">Info</div>
            </div>
            <div className="about-fpo-info-card">
              <div className="col-lg-6 p-1 about-fpo-info-card-role info-card-musk">
                <span className="my-auto">04</span>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/settings-icon.svg`}
                  width="40%"
                  className="p-2"
                  alt=""
                />
              </div>
              <div className="col-lg-6">Info</div>
            </div>
            <div className="about-fpo-info-card">
              <div className="col-lg-6 p-1 about-fpo-info-card-role info-card-red">
                <span className="my-auto">05</span>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/boy-icon.svg`}
                  width="40%"
                  className="p-2"
                  alt=""
                />
              </div>
              <div className="col-lg-6">Info</div>
            </div>
          </Grid>
        </Grid>
        <Grid container justify="space-around">
          <Grid lg={11}>
            <Grid container>
              <h4>Products and Services</h4>
            </Grid>
            <Grid>
              {productAndServices.map((item, index) => (
                <Grid
                  className={classes.productServicesWrap}
                  container
                  key="item"
                >
                  <Grid lg={4} className={classes.pnsImg}>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/my-fpo/about/${item.productImg}`}
                      width="100%"
                      alt="Product Item"
                    />
                  </Grid>
                  <Grid lg={8}>
                    <div class="pl-3">
                      <h5>Products Details</h5>
                      <p
                        style={{
                          textAlign: 'justify',
                          textJustify: 'inter-word',
                        }}
                      >
                        {item.productContent}
                      </p>
                    </div>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="space-around">
          <Grid lg={11} className={classes.aboutFpoGallery}>
            <Grid container justify="center">
              <h5>Gallery</h5>
            </Grid>
            <Swiper
              slidesPerView={4}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </Grid>
        </Grid>
        <Grid container justify="space-around">
          <Grid
            container
            lg={11}
            justify="space-between"
            className={classes.aboutFpoContact}
          >
            <Grid container>
              <h4>Contact us</h4>
            </Grid>
            <Grid lg={6}>
              <Grid>
                <h6>
                  <i class="fas fa-home"></i> Office Address
                </h6>
                <address>
                  First floor, Anand Heights, Kedareswarapet Main Rd,
                  <br /> near Prabhas college, Lotus Landmark, Ayodhya Nagar,
                  <br />
                  Vijayawada Andhra Pradesh - 520003.
                </address>
              </Grid>
              <Grid container justify="space-between">
                <Grid>
                  <h6>
                    <i class="fas fa-user"></i> Contact Details
                  </h6>
                  <small>
                    <i class="fas fa-phone-alt"></i> +91 9293858689
                    <br />
                    <i class="fas fa-envelope"></i> info@feedorg.com
                    <br />
                    <i class="fas fa-globe"></i> www.feedorg.com
                  </small>
                </Grid>
                <Grid>
                  <h6>
                    <i class="fas fa-map-marker-alt"></i> Location Map
                  </h6>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.022969650659!2d80.62855171469059!3d16.524937988600765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35ef2d39bacd51%3A0x6fc2276740e8bd32!2sFEED%20ORG!5e0!3m2!1sen!2sin!4v1624625259164!5m2!1sen!2sin"
                    width="400"
                    height="200"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </Grid>
              </Grid>
              <Grid></Grid>
            </Grid>
            <Grid lg={4}>
              <Grid container>
                <h4>Get in Touch</h4>
              </Grid>
              <Grid>
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
            </Grid>
            <Grid
              lg={1}
              container
              direction="column"
              justify="space-evenly"
              alignItems="center"
            >
              <a href="">
                <Avatar
                  variant="square"
                  src={`${process.env.PUBLIC_URL}/assets/facebook.svg`}
                />
              </a>
              <a href="">
                <Avatar
                  variant="square"
                  src={`${process.env.PUBLIC_URL}/assets/instagram.svg`}
                />
              </a>
              <a href="">
                <Avatar
                  variant="square"
                  src={`${process.env.PUBLIC_URL}/assets/twitter.svg`}
                />
              </a>
              <a href="">
                <Avatar
                  variant="square"
                  src={`${process.env.PUBLIC_URL}/assets/linkedin.svg`}
                />
              </a>
              <a href="">
                <Avatar
                  variant="square"
                  src={`${process.env.PUBLIC_URL}/assets/youtube.svg`}
                />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
