import React, { useRef } from 'react'
import './curtainRaiser.css'
import {
  makeStyles,
} from '@material-ui/core'

export default function Curtain(props) {
  const inputEl = useRef(null);
  const outerEl = useRef(null);
  const useStyles = makeStyles((theme) => ({
    rnOuter: {
      overflow: 'hidden',
      position: 'relative',
      height: '100vh',
    },
    rnInner: {
      width: '100%',
      position: 'absolute',
      top: '-10%',
      right: 0,
      bottom: 0,
      left: 0,
      margin: 'auto',
      transformStyle: 'preserve-3d',
      transition: 'transform 6s ease',
      transformOrigin: '-120% top',
      zIndex:500000
    },
    rnUnit: {
      width: '10vw',
      height: '120vh',
      background: 'repeating-linear-gradient(to left, hsl(0, 80%, 50%) 4vw, hsl(0, 80%, 30%) 8vw, hsl(0, 80%, 70%) 10vw)',
      backgroundSize: '100% 100%',
      display: 'inline-block',
      transformOrigin: '0 0%',
      transform: 'rotate(3deg)',
      animation: 'rnUnit 2s ease infinite',
    },
    "@keyframes rnUnit": {
      '50%': {
        transform: 'rotate(-3deg)',
      }
    },
    '&:nth-child(1)': {
      animationDelay: '-0.1s',
    },
    '&:nth-child(2)': {
      animationDelay: '-0.2s',
    },
    '&:nth-child(3)': {
      animationDelay: '-0.3s',
    },
    '&:nth-child(4)': {
      animationDelay: '-0.4s',
    },
    '&:nth-child(5)': {
      animationDelay: '-0.5s',
    },
    '&:nth-child(6)': {
      animationDelay: '-0.6s',
    },
    '&:nth-child(7)': {
      animationDelay: '-0.7s',
    },
    '&:nth-child(8)': {
      animationDelay: '-0.8s',
    },
    '&:nth-child(9)': {
      animationDelay: '-0.9s',
    },
    '&:nth-child(10)': {
      animationDelay: '-1s',
    },
    aoTable: {
      display: 'table',
      width: '100%',
      height: '100vh',
      textAlign: 'center',
    },
    aoTableCell: {
      color: 'hsl(0, 80%, 38%)',
      display: 'table-cell',
      verticalAlign: 'middle',
      transition: 'color 3s ease',
    }
  }))
  const classes = useStyles()
  const onCurtainClick = function () {
    inputEl.current.style.transforOrigin = '-120% top';
    inputEl.current.style.transform = 'scaleX(0)';
    setTimeout(() => {
      outerEl.current.style.height = '100%';
      outerEl.current.style.overflow= 'auto';
    }, 1500);
  }
  

  return (

    <div class={classes.rxWorld} >

      <section class={classes.rnOuter} ref={outerEl}>

        <section >
          {props.children}
        </section>

        <div class={classes.rnInner} ref={inputEl} onClick={onCurtainClick} >
          <div class={classes.rnUnit}></div>
          <div class={classes.rnUnit}></div>
          <div class={classes.rnUnit}></div>
          <div class={classes.rnUnit}></div>
          <div class={classes.rnUnit}></div>
          <div class={classes.rnUnit}></div>
          <div class={classes.rnUnit}></div>
          <div class={classes.rnUnit}></div>
          <div class={classes.rnUnit}></div>
          <div class={classes.rnUnit}></div>

        </div>
      </section>
    </div>
  )
}