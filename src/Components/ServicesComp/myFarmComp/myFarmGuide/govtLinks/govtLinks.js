import React from 'react'
import { Link } from 'react-router-dom'
import {
  Grid,
  Button,
  Icon,
  Avatar,
  makeStyles,
  Divider,
} from '@material-ui/core'
function GovtLinks() {
  const useStyles = makeStyles((theme) => ({
    linksWrap: {
      margin: '10px',
      padding: '5px',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      borderRadius: '5px 5px',
    },
  }))
  const classes = useStyles()
  const generalLinks = [
    {
      label: 'Food Corporation',
      link: 'www.google.com',
    },
    {
      label: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      link: 'www.google.com',
    },
    {
      label: 'Seeds Corporation',
      link: 'www.google.com',
    },
    {
      label: 'Fertilizers Corporation',
      link: 'www.google.com',
    },
    {
      label: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      link: 'www.google.com',
    },
    {
      label: 'Food Corporation',
      link: 'www.google.com',
    },
    {
      label: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      link: 'www.google.com',
    },
    {
      label: 'Seeds Corporation',
      link: 'www.google.com',
    },
    {
      label: 'Fertilizers Corporation',
      link: 'www.google.com',
    },
    {
      label: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      link: 'www.google.com',
    },
    {
      label: 'Food Corporation',
      link: 'www.google.com',
    },
    {
      label: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      link: 'www.google.com',
    },
    {
      label: 'Seeds Corporation',
      link: 'www.google.com',
    },
    {
      label: 'Fertilizers Corporation',
      link: 'www.google.com',
    },
    {
      label: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      link: 'www.google.com',
    },
    {
      label: 'Food Corporation',
      link: 'www.google.com',
    },
    {
      label: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      link: 'www.google.com',
    },
    {
      label: 'Seeds Corporation',
      link: 'www.google.com',
    },
    {
      label: 'Fertilizers Corporation',
      link: 'www.google.com',
    },
    {
      label: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      link: 'www.google.com',
    },
  ]
  return (
    <>
      {/* <table style={{border:'1px solid black',margin:'10px'}}>
        <tr>
          <td style={{width:'50%',border:'1px solid black'}}>
            <p>
              lorwm ipsum lorwm ipsum lorwm ipsum lorwm ipsum
              lorwm ipsum lorwm ipsum lorwm ipsum lorwm ipsum lorwm ipsum lorwm ipsum
              lorwm ipsum lorwm ipsum
            </p>
          </td>
          <td style={{width:'50%',border:'1px solid black'}}>www.google.com</td>
        </tr>
      </table> */}
      <div className={classes.linksWrap}>
        {generalLinks.map((item, index) => (
          <div key={index}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                textAlign: 'center',
                borderBottom: '1px solid #dbdbdb',
                margin: '2px',
              }}
            >
              <p style={{ marginBottom: '0px', width: '45%' }}>{item.label}</p>
              <div style={{ width: '45%' }}>
                <Link to="/">{item.link}</Link>
              </div>
            </div>
            {/* <Divider /> */}
          </div>
        ))}
      </div>
    </>
  )
}

export default GovtLinks
