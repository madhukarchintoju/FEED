import React from 'react'
import { Grid, TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
export default function ExportPolicy() {
  const exportitems = [
    { title: 'Banana' },
    { title: 'Apple' },
    { title: 'Grapes' },
    { title: 'Kiwi' },
    { title: 'Orange' },
    { title: 'Papaya' },
  ]
  return (
    <>
      <div>
        <Grid style={{ margin: '10px' }}>
          <p>
            DGFT has embarked on digitising the entire import and export policy
            for HS Codes. Here you can explore the Export Import Policy for
            various 8-Digit HS Codes.
          </p>
          <form>
            <Grid item lg={6} className="m-auto">
              <Autocomplete
                id="combo-box-demo"
                options={exportitems}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Policy List"
                    variant="outlined"
                    margin="normal"
                  />
                )}
              />
              <button className="btn btn-warning">Export/Import Policy</button>
            </Grid>
          </form>
        </Grid>
      </div>
    </>
  )
}
