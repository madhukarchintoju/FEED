import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function PieChart() {
    const options = {
        chart: {
            type: 'pie',
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
    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    )
}
export default PieChart
