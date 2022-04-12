import React, { useState } from 'react'
import {
  MenuItem,
  MenuList,
  TextField,
  Grid,
  Menu,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Radio,
  FormControlLabel,
  FormLabel,
  FormControl,
  RadioGroup,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { TramRounded } from '@material-ui/icons'
import PurchaseRegForm from './purchaseRegForm/purchaseRegForm'
import SalesRegForm from './saleRegForm/saleRegForm'
import TransactionRegForm from './transRegForm/transReg'

function Form() {
  const [selected, setSelected] = useState('')
  const changeHandler = (e) => {
    setSelected(e.target.value)
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h6 style={{ margin: '10px 0px' }}>Select Register Form</h6>
        <Grid
          lg={11}
          item
          style={{
            margin: '10px auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Grid lg={4} item>
            <input
              type="radio"
              name="gender"
              label="Purchase Register"
              value="purchaseregister"
              id="purchaseregister"
              checked={selected === 'purchaseregister'}
              onChange={changeHandler}
              style={{
                height: '20px',
                width: '20px',
                verticalAlign: 'middle',
                margin: '0px 5px',
              }}
            />
            <label for="purchaseregister">Purchase Register</label>
          </Grid>
          <Grid lg={4} item>
            <input
              type="radio"
              name="gender"
              label="Sale Register"
              value="saleregister"
              id="saleregister"
              checked={selected === 'saleregister'}
              onChange={changeHandler}
              style={{
                height: '20px',
                width: '20px',
                verticalAlign: 'middle',
                margin: '0px 5px',
              }}
            />
            <label for="saleregister">Sale Register</label>
          </Grid>
          <Grid lg={4} item>
            <input
              type="radio"
              name="gender"
              label="Transaction Register"
              value="transactionregister"
              id="transactionregister"
              checked={selected === 'transactionregister'}
              onChange={changeHandler}
              style={{
                height: '20px',
                width: '20px',
                verticalAlign: 'middle',
                margin: '0px 5px',
              }}
            />
            <label for="transactionregister">Transaction Register</label>
          </Grid>
        </Grid>
        {selected === 'purchaseregister' ? (
          <Grid lg={12} item style={{ margin: '10px auto' }}>
            <PurchaseRegForm />
          </Grid>
        ) : (
          ''
        )}
        {selected === 'saleregister' ? (
          <Grid lg={12} item style={{ margin: '10px auto' }}>
            <SalesRegForm />
          </Grid>
        ) : (
          ''
        )}
        {selected === 'transactionregister' ? (
          <Grid lg={12} item style={{ margin: '10px auto' }}>
            <TransactionRegForm />
          </Grid>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default Form
