import {
  Grid,
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar/Avatar'
import React from 'react'
import { Link } from 'react-router-dom'
import './aboutSection.css'

export default function AboutSection(props) {
  const useStyles = makeStyles((theme) => ({
    aboutBg: {
      // backgroundColor: '#d2774b',
      // color: 'white',
      padding: '1em',
    },
    objectiveBg: {
      backgroundColor: '#9c4242',
      color: 'white',
      padding: '1em',
      borderRadius: '15px 15px',
    },
    visionCard: {
      backgroundColor: '#8dc457',
    },
    missionCard: {
      backgroundColor: '#eddd97',
    },
  }))
  const classes = useStyles()
  const aboutUsContent = {
    contentOne: `FARM TO FOREIGN EXPORTS ENTREPRENEURSHIP DEVELOPMENT MULTI STATE COOPERATIVE SOCIETY LTD. (FEED) registered under MSCS Act, 2002 with Regd.No. MSCS /CR /1295 /2020 and currently operating in the states of Andhra Pradesh and Telangana. `,
    contentTwo: `FEED is a multi - state cooperative society We're the first - of - its kind export based multi - state cooperative society working for the uplift of exports from farmers, new entrepreneurs and MSMES from rural and semi - urban areas through the concept of product-based FARMER PRODUCER ORGANISATIONS (FPO) by conducting EXPORT PROMOTIONAL MEETINGS in all districts of India. `,
    contentThree: `FEED connects with around 15+ Central Government departments, Export Based Organizations (Banks, Ports, CHAs, Export promotion councils, Commodity boards, Embassies, FIEO, DGFT, NABARD, NCDC, ECGC, SFAC etc) to ensure updated data dissemination on export prices, govt. schemes to FEED members (FPOs, MSMEs etc.) `,
    contentFour: `FEED signs MoU with State Governments to develop export entrepreneurship & establish value addition units in order to enhance exports and economy of the states.`,
    contentFive: ` We promote exports by conducting EXPORT PROMOTIONAL MEETINGS in every district. We tend to create awareness on exports and inform the product potentiality of various agricultural commodities in International markets through our export promotional meetings.`,
    contentSix: `FEED forms PRODUCT - BASED EXPORT ORIENTED FPOs for the top 10 products in every district. FEED provides hand - holding support to such FPOs formed throughout the export cycle. `,
    contentSeven: `We also assist the FPOs in establishing processing units to enhance their income levels and help them reach the International quality standards.`,
    contentEight: ` All in all, FEED's vision is to provide the FPOS & MSMEs the exposure to best prices in both domestic and international markets and render end - to - end support in capturing such markets.`,
  }
  const objectiveContent = {
    content: `Farm to Foreign Exports Entrepreneurship Development Multi state Cooperative Society Ltd. (FEED) is a multi-state cooperative society working for the uplift of exports from all corners of India. We provide socio-technical platform between:
    “Traders, Farmers, MSME industries & new entrepreneurs” in Rural and Semi urban areas
    AND
    “International markets, Export promotional councils, Central and State governments, Banks and Financial institutes, Ports” 
    By organizing Export promotional meetings, forming FPOs (product wise) and supporting the FPOs with technical information on processing export orders.
    `,
  }
  const visionContent = {
    content: `To spread to all corners of India and emerge as a one-stop solution to farmers, small traders, MSMEs, new entrepreneurs from rural and semi-urban areas for marketing their agricultural commodities in domestic and International markets by means of effective technical interface.`,
  }
  const missionContent = {
    content: `To form product based cooperative societies (FPOs), impart the capacity building to export in the form of training sessions, provide the information on global marketing opportunities for their respective agricultural products and render end-to-end support in real-time export process i.e., from selection of buyers to shipment of goods.`,
  }
  return (
    <>
      <Grid container justify="center">
        <Grid lg={6} className={classes.aboutBg}>
          <h4>About us</h4>
          <Grid>
            <p>{aboutUsContent.contentOne}</p>
            <p>{aboutUsContent.contentTwo}</p>
            <p>{aboutUsContent.contentThree}</p>
            <p>{aboutUsContent.contentFour}</p>
            <p>{aboutUsContent.contentFive}</p>
            {props.shortView && <Link to="/aboutsection">Read more</Link>}

            {!props.shortView && (
              <>
                <p>{aboutUsContent.contentSix}</p>
                <p>{aboutUsContent.contentSeven}</p>
                <p>{aboutUsContent.contentEight}</p>
              </>
            )}
          </Grid>
          <p>{aboutUsContent.content}</p>
        </Grid>
        <Grid lg={6}>
          <Grid className={classes.objectiveBg}>
            <h4>Objective</h4>
            <Grid>
              <p>{objectiveContent.content}</p>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="space-evenly">
            <Grid lg={5}>
              <Card className={classes.visionCard}>
                <CardActionArea>
                  <CardContent>
                    <Grid container alignItems="center">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/vision.png`}
                        alt=""
                      />
                      <h5>Vision</h5>
                    </Grid>

                    <p>{visionContent.content}</p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid lg={5}>
              <Card className={classes.missionCard}>
                <CardActionArea>
                  <CardContent>
                    <Grid container alignItems="center">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/mission.png`}
                        alt=""
                      />
                      <h5>Vision</h5>
                    </Grid>

                    <p>{missionContent.content}</p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
