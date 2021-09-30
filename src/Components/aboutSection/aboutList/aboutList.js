import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import CoreTeam from './coreTeam/coreTeam'
import FounderMessage from './founderMessage/founderMessage'
export default function AboutList() {
  return (
    <>
      <div className="row m-0">
        <div className="col p-0">
          <Switch>
            {/* <Route path='/aboutsectionlist/boarddirectors' component={}></Route> */}
            <Route path="/aboutlist/coreteam" component={CoreTeam}></Route>
            {/* <Route path="/aboutlist/foundermessage" component={FounderMessage}></Route> */}
          </Switch>
        </div>
      </div>
    </>
  )
}
