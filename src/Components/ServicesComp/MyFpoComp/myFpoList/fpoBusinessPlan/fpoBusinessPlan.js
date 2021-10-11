import React from 'react'
import { Grid, makeStyles, TextField, MenuItem } from '@material-ui/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/effect-flip/effect-flip.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, {
  EffectFlip,
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper/core'
SwiperCore.use([EffectFlip, Pagination, Navigation, Autoplay])
export default function FpoBusinessPlan() {
  const businessplanGallery = [
    {
      img: 'planone.jpg',
    },
    {
      img: 'plantwo.jpg',
    },
  ]
  const solutionList = [
    {
      id: '1',
      name: 'Leadership Development',
    },
    {
      id: '2',
      name: 'Standard Business Plan',
    },
    {
      id: '3',
      name: 'Financial Literacy',
    },
    {
      id: '4',
      name: 'Marketing Plan',
    },
    {
      id: '5',
      name: 'Operations Business Plan',
    },
    {
      id: '6',
      name: 'Strategic Business Plan',
    },
    {
      id: '7',
      name: 'Startup Business Plan',
    },
  ]
  const useStyles = makeStyles((theme) => ({
    businessPlanWrap: {
      // backgroundColor: '#fff0d9',
      paddingBottom: '10px',
    },
    businessPlanPara: {
      margin: '15px auto auto auto',
      width: '90%',
      padding: '2px',
      textAlign: 'justify',
      textJustify: 'inter-word',
    },
  }))
  const classes = useStyles()
  return (
    <>
      <div className={classes.businessPlanWrap}>
        <Grid container justifyContent="center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-fpo/businessplan/fpcbusinessplannameplate.png`}
            alt=""
          />
        </Grid>
        <Grid
          container
          item
          lg={12}
          justifyContent="space-between"
          className={classes.businessPlanPara}
        >
          <Grid item lg={5}>
            <ul style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              <li>
                Create customized business plans as per the requirement of the
                FPO
              </li>
              <li>Promotes operational &amp; financial sustainability</li>
              <li>
                Expert advice on Trading, Production &amp; Service categories
              </li>
            </ul>
            <Grid>
              <form>
                <TextField
                  fullWidth
                  label="Contact Number"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  select
                  label="Solution"
                  margin="normal"
                  variant="outlined"
                  name="solution"
                  // value={formik.values.district}
                  // onChange={formik.handleChange}
                >
                  {solutionList.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  label="Message"
                  placeholder="Enter Your Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  name="message"
                  // value={formik.values.address}
                  // onChange={formik.handleChange}
                />
              </form>
              <button className="btn btn-success mt-3">Enquiry Now</button>
            </Grid>
          </Grid>
          <Grid item lg={5} className={classes.businessplanimg}>
            <Swiper
              effect={'flip'}
              pagination={true}
              navigation={true}
              loop={true}
              autoplay={{ delay: 2500 }}
            >
              {businessplanGallery.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-fpo/businessplan/${item.img}`}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
