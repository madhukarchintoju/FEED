import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function LineChart() {
  const options = {
    xAxis: {
      categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    },
    series: [{ data: [1, 12, 3, 22, 2.2, 62, 3, 4] }],
    plotOptions: {
      series: {
        point: {},
      },
    },
  }
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  )
}
export default LineChart
