import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import useDebounce from '../../hooks/debounce'

const useStyles = makeStyles({
  root: {
    width: 200,
  },
})

function valuetext(value) {
  return `Rs.${value}`
}

const PriceRange = ({ categoryId, setProductsArr }) => {
  const classes = useStyles()
  const [value, setValue] = useState([0, 10])
  const [debounceValue, setDebounceValue] = useState([])

  const debounce = useDebounce()
  const handleChange = (event, newValue) => {
    setValue(newValue)
    debounce(() => {
      setDebounceValue(newValue)
    })
  }

  useEffect(() => {
    // const fetchMatches=async ()=>{
    //   try{
    //       let serializedStr=qs.stringify({
    //         searchValue:value
    //       });
    //       let response=await axiosInstance.post('/products/filter',serializedStr);
    //       let APIResponse=response.data;
    //       setProductsArr(APIResponse.data);
    //   }
    //   catch(e){
    //     console.log(e);
    //     swal("Error",`${e.message}`,"error");
    //   }
    // };
    // fetchMatches();
    console.log(debounceValue)
  }, [debounceValue])
  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Price range
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

export default PriceRange
