import React, { Component } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import * as am4plugins_timeline from '@amcharts/amcharts4/plugins/timeline'
import * as am4plugins_bullets from '@amcharts/amcharts4/plugins/bullets'
import am4themes_dark from '@amcharts/amcharts4/themes/dark'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

am4core.useTheme(am4themes_dark)
am4core.useTheme(am4themes_animated)
let colorSet = new am4core.ColorSet()
colorSet.saturation = 0.5

const data = [
  {
    category: 'Path #1',
    start: '2019-01-1',
    end: '2019-01-30',
    color: 'white',
    task: 'Gathering requirements',
  },
  {
    category: '',
  },
  {
    category: 'Path #2',
    start: '2019-01-01',
    end: '2019-01-30',
    color: 'white',
    task: 'Producing specifications',
  },
  // {
  //   category: 'Module #2',
  //   start: '2019-01-16',
  //   end: '2019-02-05',
  //   color: colorSet.getIndex(5),
  //   task: 'Development',
  // },
  // {
  //   category: 'Module #2',
  //   start: '2019-02-10',
  //   end: '2019-02-18',
  //   color: colorSet.getIndex(5),
  //   task: 'Testing and QA',
  // },
  // {
  //   category: '',
  // },
  // {
  //   category: 'Module #3',
  //   start: '2019-01-01',
  //   end: '2019-01-19',
  //   color: colorSet.getIndex(9),
  //   task: 'Gathering requirements',
  // },
  // {
  //   category: 'Module #3',
  //   start: '2019-02-01',
  //   end: '2019-02-10',
  //   color: colorSet.getIndex(9),
  //   task: 'Producing specifications',
  // },
  // {
  //   category: 'Module #3',
  //   start: '2019-03-10',
  //   end: '2019-04-15',
  //   color: colorSet.getIndex(9),
  //   task: 'Development',
  // },
  // {
  //   category: 'Module #3',
  //   start: '2019-04-20',
  //   end: '2019-04-30',
  //   color: colorSet.getIndex(9),
  //   task: 'Testing and QA',
  //   disabled2: false,
  //   image2: '/wp-content/uploads/assets/timeline/rachel.jpg',
  //   location: 0,
  // },
  // {
  //   category: 'Module #4',
  //   start: '2019-01-15',
  //   end: '2019-02-12',
  //   color: colorSet.getIndex(15),
  //   task: 'Gathering requirements',
  //   disabled1: false,
  //   image1: '/wp-content/uploads/assets/timeline/monica.jpg',
  // },
  // {
  //   category: 'Module #4',
  //   start: '2019-02-25',
  //   end: '2019-03-10',
  //   color: colorSet.getIndex(15),
  //   task: 'Development',
  // },
  // {
  //   category: 'Module #4',
  //   start: '2019-03-23',
  //   end: '2019-04-29',
  //   color: colorSet.getIndex(15),
  //   task: 'Testing and QA',
  // },
]

class RoadMap extends Component {
  componentDidMount() {
    let chart = am4core.create('chartdiv', am4plugins_timeline.SerpentineChart)
    chart.curveContainer.padding(50, 20, 50, 20)
    chart.levelCount = 4
    chart.yAxisRadius = am4core.percent(25)
    chart.yAxisInnerRadius = am4core.percent(-25)
    chart.maskBullets = false

    let colorSet = new am4core.ColorSet()
    colorSet.saturation = 0.5

    chart.data = data

    chart.dateFormatter.dateFormat = 'yyyy-MM-dd'
    chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd'
    chart.fontSize = 11

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = 'category'
    categoryAxis.renderer.grid.template.disabled = true
    categoryAxis.renderer.labels.template.paddingRight = 25
    categoryAxis.renderer.minGridDistance = 10
    categoryAxis.renderer.innerRadius = -60
    categoryAxis.renderer.radius = 60

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.renderer.minGridDistance = 70
    dateAxis.baseInterval = { count: 1, timeUnit: 'day' }
    dateAxis.renderer.tooltipLocation = 0
    dateAxis.startLocation = -0.5
    dateAxis.renderer.line.strokeDasharray = '1,4'
    dateAxis.renderer.line.strokeOpacity = 0.6
    dateAxis.tooltip.background.fillOpacity = 0.2
    dateAxis.tooltip.background.cornerRadius = 5
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
      'alternativeBackground'
    )
    dateAxis.tooltip.label.paddingTop = 7

    let labelTemplate = dateAxis.renderer.labels.template
    labelTemplate.verticalCenter = 'middle'
    labelTemplate.fillOpacity = 0.7
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor(
      'background'
    )
    labelTemplate.background.fillOpacity = 1
    labelTemplate.padding(7, 7, 7, 7)

    let series = chart.series.push(new am4plugins_timeline.CurveColumnSeries())
    series.columns.template.height = am4core.percent(20)
    series.columns.template.tooltipText =
      '{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]'

    series.dataFields.openDateX = 'start'
    series.dataFields.dateX = 'end'
    series.dataFields.categoryY = 'category'
    series.columns.template.propertyFields.fill = 'color' // get color from data
    series.columns.template.propertyFields.stroke = 'color'
    series.columns.template.strokeOpacity = 0

    let bullet = series.bullets.push(new am4charts.CircleBullet())
    bullet.circle.radius = 3
    bullet.circle.strokeOpacity = 0
    bullet.propertyFields.fill = 'color'
    bullet.locationX = 0

    let bullet2 = series.bullets.push(new am4charts.CircleBullet())
    bullet2.circle.radius = 3
    bullet2.circle.strokeOpacity = 0
    bullet2.propertyFields.fill = 'color'
    bullet2.locationX = 1

    let imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet())
    imageBullet1.disabled = true
    imageBullet1.propertyFields.disabled = 'disabled1'
    imageBullet1.locationX = 1
    imageBullet1.circle.radius = 20
    imageBullet1.propertyFields.stroke = 'color'
    imageBullet1.background.propertyFields.fill = 'color'
    imageBullet1.image = new am4core.Image()
    imageBullet1.image.propertyFields.href = 'image1'

    let imageBullet2 = series.bullets.push(new am4plugins_bullets.PinBullet())
    imageBullet2.disabled = true
    imageBullet2.propertyFields.disabled = 'disabled2'
    imageBullet2.locationX = 0
    imageBullet2.circle.radius = 20
    imageBullet2.propertyFields.stroke = 'color'
    imageBullet2.background.propertyFields.fill = 'color'
    imageBullet2.image = new am4core.Image()
    imageBullet2.image.propertyFields.href = 'image2'

    let eventSeries = chart.series.push(
      new am4plugins_timeline.CurveLineSeries()
    )
    eventSeries.dataFields.dateX = 'eventDate'
    eventSeries.dataFields.categoryY = 'category'
    eventSeries.data = [
      {
        category: '',
        eventDate: '2019-01-15',
        letter: 'A',
        description: 'Something happened here',
      },
      {
        category: '',
        eventDate: '2019-01-23',
        letter: 'B',
        description: 'Something happened here',
      },
      // {
      //   category: '',
      //   eventDate: '2019-02-10',
      //   letter: 'C',
      //   description: 'Something happened here',
      // },
      // {
      //   category: '',
      //   eventDate: '2019-02-29',
      //   letter: 'D',
      //   description: 'Something happened here',
      // },
      // {
      //   category: '',
      //   eventDate: '2019-03-06',
      //   letter: 'E',
      //   description: 'Something happened here',
      // },
      // {
      //   category: '',
      //   eventDate: '2019-03-12',
      //   letter: 'F',
      //   description: 'Something happened here',
      // },
      // {
      //   category: '',
      //   eventDate: '2019-03-22',
      //   letter: 'G',
      //   description: 'Something happened here',
      // },
    ]
    eventSeries.strokeOpacity = 0

    let flagBullet = eventSeries.bullets.push(
      new am4plugins_bullets.FlagBullet()
    )
    flagBullet.label.propertyFields.text = 'letter'
    flagBullet.locationX = 0
    flagBullet.tooltipText = '{description}'

    chart.scrollbarX = new am4core.Scrollbar()
    chart.scrollbarX.align = 'center'
    chart.scrollbarX.width = am4core.percent(85)

    let cursor = new am4plugins_timeline.CurveCursor()
    chart.cursor = cursor
    cursor.xAxis = dateAxis
    cursor.yAxis = categoryAxis
    cursor.lineY.disabled = true
    cursor.lineX.strokeDasharray = '1,4'
    cursor.lineX.strokeOpacity = 1

    dateAxis.renderer.tooltipLocation2 = 0
    categoryAxis.cursorTooltipEnabled = false

    this.chart = chart
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose()
    }
  }

  render() {
    return (
      <div
        id="chartdiv"
        style={{ width: '100%', height: '500px', backgroundColor: 'black' }}
      ></div>
    )
  }
}

export default RoadMap
