import { Grid } from '@material-ui/core'
import DataGrid from '../../datagrid/datagrid'

export default function MyBusinessLeads() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item lg={12}>
        <DataGrid />
      </Grid>
      {/* <Grid item lg={6}>
               <div></div>
            </Grid> */}
    </Grid>
  )
}
