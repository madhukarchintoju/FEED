import { Grid, makeStyles, Button } from '@material-ui/core'
import DataGrid from '../../datagrid/datagrid'
import PieChart from '../../analytics/pieChart/pieChart'
import Icon from '@material-ui/core/Icon'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    backgroundColor: '#f7941f',
    padding: ' 0.4em',
    fontWeight: '700',
  },
  yellowBtn: {
    backgroundColor: '#fdad12',
    color: 'black',
    width: '10em',
    margin: '1em',
  },
  blueBtn: {
    backgroundColor: '#008dd4',
    color: 'black',
    width: '10em',
    margin: '1em',
  },
  downloadText: {
    textAlign: ' center',
    fontWeight: '700',
    margin: '1em',
    fontSize: '1.1em',
  },
}))

export default function MyBusinessLeads() {
  const classes = useStyles()
  return (
    <>
      <h5 className={classes.title}> My Business Leads</h5>
      <Grid container direction="row" alignItems="center">
        <Grid item lg={9}>
          <DataGrid />
        </Grid>
        <Grid container direction="column" alignItems="center" item lg={3}>
          <Grid item lg={12}>
            <div className={classes.downloadText}>DOWNLOAD</div>
            <div>
              <Button variant="contained" className={classes.yellowBtn}>
                Excel
              </Button>
            </div>
            <div>
              <Button variant="contained" className={classes.blueBtn}>
                PDF
              </Button>
            </div>
          </Grid>
          <Grid item lg={12}>
            <PieChart />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
