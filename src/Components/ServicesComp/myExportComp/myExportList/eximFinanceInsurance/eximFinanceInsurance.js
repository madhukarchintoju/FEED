import React from 'react'
import './eximFinanceInsurance.css'
import { Grid, TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
export default function EximFinanceInsurance() {
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
        <Grid container justifyContent="center">
          <h4>Export-Import Finance &amp; Insurance</h4>
        </Grid>
        <Grid style={{ margin: '8px' }}>
          <h6>Finance:</h6>
          <p>
            Finance in any business is necessary to meet working capital needs
            or to overcome unforeseen contingencies.
          </p>
          <p>
            Even in the export process, finance plays a major role at every
            stage. For example, a new exporter may require financial support for
            setting up of his business. An established entrepreneur may need
            export finance to expand into new global markets or to open new
            branches. Likewise, an exporter will need export finance to meet the
            working capital requirements.
          </p>
          <h6>There are different types of export finance namely:</h6>
          <ul style={{ marginLeft: '20px' }}>
            <li>Pre-shipment </li>
            <li>Post-shipment</li>
            <li>Export finance against collection of bills.</li>
            <li>Deferred export finance</li>
            <li>Export finance against allowances and subsidies</li>
          </ul>
          <p>
            Which type suits your needs or at what stage you need the finance
            solely depends on the type of business and its needs.
          </p>
          <p>
            To know more about the types of export finance and the institutions
            involved in export finance, click the link given below.
          </p>
          <a href="https://www.dripcapital.com/en-in/resources/blog/export-finance-types">
            https://www.dripcapital.com/en-in/resources/blog/export-finance-types
          </a>
          <Grid className="mt-3">
            <h6>Insurance:</h6>
            <p>
              ECGC Ltd. (Formerly Export Credit Guarantee Corporation of India
              Ltd.), wholly owned by Government of India, was set up in 1957
              with the objective of promoting exports from the country by
              providing Credit Risk Insurance and related services for exports.
            </p>
            <h6>What does ECGC do?</h6>
            <ul style={{ marginLeft: '20px' }}>
              <li>
                Provides a range of credit risk insurance covers to exporters
                against loss in export of goods and services
              </li>
              <li>
                Offers Export Credit Insurance covers to banks and financial
                institutions to enable exporters to obtain better facilities
                from them
              </li>
              <li>
                Provides Overseas Investment Insurance to Indian companies
                investing in joint ventures abroad in the form of equity or loan
              </li>
            </ul>
            <h6>How does ECGC help exporters?</h6>
            <p>
              ECGC Offers insurance protection to exporters against payment
              risks.
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li>Provides guidance in export-related activities.</li>
              <li>
                Makes available information on different countries with it’s own
                credit ratings.
              </li>
              <li>
                Makes it easy to obtain export finance from banks/financial
                institutions.
              </li>
              <li>Assists exporters in recovering bad debts.</li>
              <li>
                Provides information on credit-worthiness of overseas buyers.
              </li>
            </ul>
            <h6>Need for export credit insurance</h6>
            <p>
              Payments for exports are open to risks even at the best of times.
              The risks have assumed large proportions today due to the
              far-reaching political and economic changes that are sweeping the
              world. An outbreak of war or civil war may block or delay payment
              for goods exported. A coup or an insurrection may also bring about
              the same result. Economic difficulties or balance of payment
              problems may lead a country to impose restrictions on either
              import of certain goods or on transfer of payments for goods
              imported. In addition, the exporters have to face commercial risks
              of insolvency or protracted default of buyers. The commercial
              risks of a foreign buyer going bankrupt or losing his capacity to
              pay are aggravated due to the political and economic
              uncertainties. Export credit insurance is designed to protect
              exporters from the consequences of the payment risks, both
              political and commercial, and to enable them to expand their
              overseas business without fear of loss.
            </p>
            <h6>
              There are 3 types of products &amp; services offered by ECGC
              namely:
            </h6>
            <ul style={{ marginLeft: '20px' }}>
              <li>ECIE Short term - Turnover based</li>
              <li>ECIE Short term - Exposure based</li>
              <li>ECIE Short term - Medium &amp; Long term</li>
            </ul>
            <form>
              <Grid>
                <Autocomplete
                  options={exportitems}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Product/service"
                      variant="outlined"
                      margin="normal"
                    />
                  )}
                />
                <button className="btn btn-warning">
                  Export/Import Policy
                </button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
