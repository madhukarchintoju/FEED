import React from 'react'
import MyFpoListItem from '../../myFpoListItem/myFpoListItem'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

export default function FpoAgmBoard() {
  const useStyles = makeStyles((theme) => ({
    fpoAgmBoardWrap: {
      backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/my-fpo/bg/agmboard.jpg")`,
      backgroundSize: 'cover',
    },
  }))
  const classes = useStyles()
  const agmList = [
    {
      name: 'Mango',
      icon: '/agmboard/agm/bylaw.png',
      link: '',
    },
    {
      name: 'Mango',
      icon: '/agmboard/agm/memberrights.png',
      link: '',
    },
    {
      name: 'Mango',
      icon: '/agmboard/agm/notices.png',
      link: '',
    },
    {
      name: 'Mango',
      icon: '/agmboard/agm/rulesandacts.png',
      link: '',
    },
    {
      name: 'Mango',
      icon: '/agmboard/agm/resolutions.png',
      link: '',
    },
  ]

  const bdmList = [
    {
      name: '',
      icon: '/agmboard/bdm/dutiesofdirectors.png',
      link: '',
    },
    {
      name: '',
      icon: '/agmboard/bdm/powerofdirectors.png',
      link: '',
    },
    {
      name: '',
      icon: '/agmboard/bdm/listofdirectors.png',
      link: '',
    },
    {
      name: '',
      icon: '/agmboard/bdm/notices.png',
      link: '',
    },
    {
      name: '',
      icon: '/agmboard/bdm/rulesandacts.png',
      link: '',
    },
    {
      name: '',
      icon: '/agmboard/bdm/resolutions.png',
      link: '',
    },
  ]
  const cardSize = {
    webWidth: 8,
    mobWidth: 4,
    webHeight: 5,
    mobHeight: 4,
  }
  return (
    <>
      <Grid className={classes.fpoAgmBoardWrap}>
        <Grid container direction="row">
          <Grid item lg={6} xs={12}>
            <MyFpoListItem
              dataList={agmList}
              title="Annual General Meeting"
              cardSize={cardSize}
              headingAlign="center"
              cardsView={4}
            ></MyFpoListItem>
          </Grid>
          <Grid item lg={6} xs={12}>
            <MyFpoListItem
              dataList={bdmList}
              title="Board of Directors Meeting"
              cardSize={cardSize}
              headingAlign="center"
              cardsView={4}
            ></MyFpoListItem>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
