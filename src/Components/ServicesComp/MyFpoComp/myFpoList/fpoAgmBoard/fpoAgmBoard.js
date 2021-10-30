import React from 'react'
import MyFpoListItem from '../../myFpoListItem/myFpoListItem'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

export default function FpoAgmBoard() {
  const useStyles = makeStyles((theme) => ({}))
  const classes = useStyles()
  const agmList = [
    {
      name: 'By Laws',
      icon: 'agmboard/agm/bylaws.png',
      link: '',
    },
    {
      name: 'Member Rights',
      icon: 'agmboard/agm/memberrights.png',
      link: '',
    },
    {
      name: 'Rules and acts',
      icon: 'agmboard/agm/rulesandact.png',
      link: '',
    },
    {
      name: 'Notices',
      icon: 'agmboard/agm/noticesagm.png',
      link: '',
    },
    {
      name: 'Resolution',
      icon: 'agmboard/agm/resolution.png',
      link: '',
    },
  ]

  const bdmList = [
    {
      name: '',
      icon: 'agmboard/bdm/dutiesanddirectors.png',
      link: '',
    },
    {
      name: '',
      icon: 'agmboard/bdm/powerofdirectors.png',
      link: '',
    },
    {
      name: '',
      icon: 'agmboard/bdm/listofdirectors.png',
      link: '',
    },
    {
      name: '',
      icon: 'agmboard/bdm/noticesbod.png',
      link: '',
    },
    {
      name: '',
      icon: 'agmboard/bdm/rulesandactbod.png',
      link: '',
    },
    {
      name: '',
      icon: 'agmboard/bdm/resolutionbod.png',
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
      {/* <Grid container justifyContent="center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/my-fpo/agmboard/fpcagmandboardnameplate.png`}
          alt=""
        />
      </Grid> */}
      <Grid item lg={10} className="m-auto">
        <ul style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
          <li>
            Helps to improve transparency and promotes better governance of the
            FPO
          </li>
          <li>
            Includes Bye-laws, Notices, Resolutions, Duties of Board and other
            Rules &amp; Regulations
          </li>
        </ul>
      </Grid>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item lg={5} xs={12}>
          <MyFpoListItem
            dataList={agmList}
            title="Annual General Meeting"
            cardSize={cardSize}
            headingAlign="center"
            cardsView={6}
          ></MyFpoListItem>
        </Grid>
        <Grid item lg={5} xs={12}>
          <MyFpoListItem
            dataList={bdmList}
            title="Board of Directors Meeting"
            cardSize={cardSize}
            headingAlign="center"
            cardsView={6}
          ></MyFpoListItem>
        </Grid>
      </Grid>
    </>
  )
}
