import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import store from './redux/store'
import Curtain from './Components/curtainRaiser/curtainRaiser'

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Curtain>
        <App />
      </Curtain>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
