import React from 'react'
import './analyticsMain.css'
import BarChart from '../barChart/barChart'
import PieChart from '../pieChart/pieChart'
import DependencyWheel from '../dependencyWheel/dependencyWheel'
import LineChart from '../lineChart/lineChart'

export default function AnalyticsMain() {
  return (
    <>
      <div className="row d-flex justify-content-around m-5">
        <BarChart className="col-lg-6 col-md-6 col-sm-12 col-xs-12" />
        <DependencyWheel className="col-lg-6 col-md-6 col-sm-12 col-xs-12" />
      </div>
      <div className="row d-flex justify-content-around m-5">
        <PieChart className="col-lg-6 col-md-6 col-sm-12 col-xs-12" />
        <LineChart className="col-lg-6 col-md-6 col-sm-12 col-xs-12" />
      </div>
    </>
  )
}
