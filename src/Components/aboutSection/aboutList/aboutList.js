import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import CoreTeam from './coreTeam/coreTeam'
export default function AboutList() {
  return (
    <>
      <div className="row m-0">
        <div className="col p-0">
          <Switch>
            {/* <Route path='/aboutsectionlist/boarddirectors' component={}></Route> */}
            <Route path="/aboutlist/coreteam" component={CoreTeam}></Route>
          </Switch>
        </div>
      </div>
    </>
  )
}
