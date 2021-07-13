import React, { useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function PieChart() {
  let chartRef = null
  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Pie Chart',
    },
    series: [
      {
        data: [
          {
            y: 100,
          },
          {
            y: 200,
          },
          {
            y: 400,
          },
          {
            y: 80,
          },
          {
            y: 600,
          },
          {
            y: 50,
          },
        ],
      },
    ],
  }

  useEffect(() => {
    if (!!chartRef) {
      chartRef.reflow()
    }
  })

  const getChart = (chart) => {
    chartRef = chart
  }

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        callback={getChart}
      />
    </>
  )
}
export default PieChart
