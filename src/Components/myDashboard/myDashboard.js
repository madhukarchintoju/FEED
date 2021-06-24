import React from 'react';
import './myDashboard.css';
import { Link } from 'react-router-dom'
import { TextField, Button, makeStyles, Grid } from '@material-ui/core';
import { textAlign } from '@material-ui/system';

export default function MyDashboard() {
  const useStyles = makeStyles(theme => ({
    myDashboardWrap: {
      position: 'relative',
      height: "500px",
      backgroundImage: 'linear-gradient(to right, #0db9a9, #00b8b0, #00b8b6, #00b7bc, #00b6c1)',
      textAlign: 'center'
    },
    quickMenu: {
      height: '200px',
      width: '200px',
      left: '-100px',
      top: '-100px',
      position: 'absolute',
      borderRadius: '50%',
      backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/my-dashboard/quickmenu.png")`,
      // backgroundSize:'100% 100%',
      backgroundPosition: 'center',
      // border:'1px solid white'
    }
  }));
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.myDashboardWrap}>
        <div id="centre">
          <Link>
            <div className={classes.quickMenu}>
              {/* <img
                className=""
                src={`${process.env.PUBLIC_URL}/assets/my-dashboard/quickmenu.png`}
                // width="100"
                alt="FPO Icon"
              /> */}
            </div>
          </Link>
          <Link>
            <div class="outer circle at-12-oclock">
              <img
                className=""
                src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mysubscriptions.png`}
                alt="FPO Icon"
              />
            </div>
          </Link>
          <Link>
            <div class="outer circle at-2-oclock">
              <img
                className=""
                src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mytransactions.png`}
                alt="FPO Icon"
              />
            </div>
          </Link>
          <Link>
            <div class="outer circle at-4-oclock">
              <img
                className=""
                src={`${process.env.PUBLIC_URL}/assets/my-dashboard/businessleads.png`}
                alt="FPO Icon"
              />
            </div>
          </Link>
          <Link>
            <div class="outer circle at-5-oclock">
              <img
                className=""
                src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket.png`}
                alt="FPO Icon"
              />
            </div>
          </Link>
          <Link>
            <div class="outer circle at-6-oclock">
              <img
                className=""
                src={`${process.env.PUBLIC_URL}/assets/my-dashboard/myreports.png`}
                alt="FPO Icon"
              />
            </div>
          </Link>
          <Link>
            <div class="outer circle at-7-oclock">
              <img
                className=""
                src={`${process.env.PUBLIC_URL}/assets/my-dashboard/myaccounts.png`}
                alt="FPO Icon"
              />
            </div>
          </Link>
          <Link>
            <div class="outer circle at-8-oclock">
              <img
                className=""
                src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mywishllist.png`}
                alt=""
              />
            </div>
          </Link>
          <Link>
            <div class="outer circle at-10-oclock">
              <img
                className=""
                src={`${process.env.PUBLIC_URL}/assets/my-dashboard/socialmedia.png`}
                alt=""
              />
            </div>
          </Link>
        </div>
      </Grid>


    </>
  )
}
