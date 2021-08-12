import React from 'react'
import { Grid, TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
export default function ImportRegulations() {
  const exportitems = [
    { title: 'Andhra Pradesh' },
    { title: 'Telangana' },
    { title: 'Tamil Nadu' },
    { title: 'Karnataka' },
    { title: 'Kerala' },
    { title: 'Goa' },
  ]
  return (
    <>
      <div>
        <Grid style={{ margin: '10px' }}>
          <p>
            Select the state to know the Export promotion policy and Industrial
            policy of the respective state.
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
                    label="Select State"
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
