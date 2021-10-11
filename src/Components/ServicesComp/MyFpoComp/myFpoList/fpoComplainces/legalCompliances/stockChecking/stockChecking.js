import React, { useState, useEffect } from 'react'
import './stockChecking.css'
import { Grid, makeStyles } from '@material-ui/core'
import { DropzoneArea } from 'material-ui-dropzone'
function StockChecking() {
  const [productFiles, setProductFiles] = useState()
  useEffect(() => {
    console.log(productFiles)
  })
  const onDropzoneAreaChange = (productFiles) => {
    setProductFiles(productFiles)
    console.log(productFiles)
    //console.log("Files:", files);
  }
  const useStyles = makeStyles((theme) => ({}))
  const classes = useStyles()

  return (
    <>
      <Grid>
        <DropzoneArea
          acceptedFiles={['image/*', 'video/*', 'application/*']}
          filesLimit={10}
          showFileNames
          dropzoneText="Drag or upload Images/Files here or click here"
          onChange={onDropzoneAreaChange}
        />
      </Grid>
    </>
  )
}

export default StockChecking
