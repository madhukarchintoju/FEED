import React from 'react'
import './startExport.css'
import { Grid } from '@material-ui/core'
export default function StartExport() {
  return (
    <>
      <div>
        <Grid
          style={{
            color: 'white',
            height: '400px',
            padding: '5px',
            backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/my-exports/startexport/startexportbnr.png")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        >
          <h1>How to Start Export</h1>
          <h4>
            Comprehensive guide on export process starting from <br />
            registration of company to claiming the export incentives from
            government{' '}
          </h4>
        </Grid>
        <Grid>
          <Grid style={{ textAlign: 'center' }}>
            <h3>Starting Exports</h3>
            <p>
              Export process is a tedious process with numerous documents to be
              submitted to different authorities at different point of time. We
              provide step-by-step guidance throughout the export process along
              with the usage and importance of each and every document used in
              the export process.
            </p>
            <h6>What are the preliminary requirements to start exports ?</h6>
          </Grid>
          <Grid container justifyContent="space-around">
            <Grid lg={5} className="text-center">
              <div className="m-2">
                <i
                  className="fab fa-first-order"
                  style={{ fontSize: '60px' }}
                ></i>
                <div>
                  <h6>How do I proceed with an export order?</h6>
                </div>
              </div>
            </Grid>
            <Grid lg={5} className="text-center">
              <div className="m-2">
                <i
                  className="fas fa-file-word"
                  style={{ fontSize: '60px' }}
                ></i>
                <div>
                  <h6>What are the documents to be submitted to Customs ?</h6>
                </div>
              </div>
            </Grid>
            <Grid lg={5} className="text-center">
              <div className="m-2">
                <i
                  className="fas fa-folder-open"
                  style={{ fontSize: '60px' }}
                ></i>
                <div>
                  <h6>What are Negotiable set of documents ?</h6>
                </div>
              </div>
            </Grid>
            <Grid lg={5} className="text-center">
              <div className="m-2">
                <i
                  className="fas fa-hourglass-start"
                  style={{ fontSize: '60px' }}
                ></i>
                <div>
                  <h6>How do I send export advice to importer ?</h6>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
