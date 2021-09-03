import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    width: 200,
  },
})

function valuetext(value) {
  return `${value} Kms`
}

const DistanceRange = () => {
  const classes = useStyles()
  const [value, setValue] = useState([0, 10])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Distance range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  )
}

export default DistanceRange
