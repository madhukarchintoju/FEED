import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyFarmGuide from '../../myFarmGuide/myFarmGuide'

export default function Vegetables() {
  const dataList = [
    {
      name: 'Rajma',
      icon: 'vegetables/rajma.png',
      link: '/myfarm/vegetables/rajma',
    },
    {
      name: 'Ridge Gourd',
      icon: 'vegetables/ridge-goud.png',
      link: '/myfarm/vegetables/ridgegourd',
    },
    {
      name: 'Snake Gourd',
      icon: 'vegetables/snake-gourd.png',
      link: '/myfarm/vegetables/snakegourd',
    },
    {
      name: 'Sweet Corn',
      icon: 'vegetables/sweet-corn.png',
      link: '/myfarm/vegetables/sweetcorn',
    },
    {
      name: 'Tomatoes',
      icon: 'vegetables/tomatoes.png',
      link: '/myfarm/vegetables/tomatoes',
    },
    {
      name: 'Bengal Gram',
      icon: 'vegetables/bengal-gram.png',
      link: '/myfarm/vegetables/bengalgram',
    },
    {
      name: 'Bitter Gourd',
      icon: 'vegetables/bitter-gourd.png',
      link: '/myfarm/vegetables/bittergourd',
    },
    {
      name: 'Black Gram',
      icon: 'vegetables/black-gram.png',
      link: '/myfarm/vegetables/blackgram',
    },
    {
      name: 'Bottle Gourd',
      icon: 'vegetables/bottle-gourd.png',
      link: '/myfarm/vegetables/bottlegourd',
    },
    {
      name: 'Carrot',
      icon: 'vegetables/carrot.png',
      link: '/myfarm/vegetables/carrot',
    },
    {
      name: 'Cassava',
      icon: 'vegetables/cassava.png',
      link: '/myfarm/vegetables/cassava',
    },
    {
      name: 'Cauliflower',
      icon: 'vegetables/cauliflower.png',
      link: '/myfarm/vegetables/cauliflower',
    },
    {
      name: 'Drumstick',
      icon: 'vegetables/drumstick.png',
      link: '/myfarm/vegetables/drumstick',
    },
    {
      name: 'Garlic',
      icon: 'vegetables/garlic.png',
      link: '/myfarm/vegetables/garlic',
    },
    {
      name: 'Green Chilli',
      icon: 'vegetables/green-chilli.png',
      link: '/myfarm/vegetables/greenchilli',
    },
    {
      name: 'Green Grams',
      icon: 'vegetables/green-grams.png',
      link: '/myfarm/vegetables/greengrams',
    },
    {
      name: 'Green Peas',
      icon: 'vegetables/green-peas.png',
      link: '/myfarm/vegetables/greenpeas',
    },
    {
      name: 'Cow Peas',
      icon: 'vegetables/cow-peas.png',
      link: '/myfarm/vegetables/cowpeas',
    },
    {
      name: 'Cucumber',
      icon: 'vegetables/cucumber.png',
      link: '/myfarm/vegetables/cucumber',
    },
    {
      name: 'Curry Leaves',
      icon: '',
      link: '/myfarm/vegetables/curryleaves',
    },
    {
      name: 'Green Pepper',
      icon: 'vegetables/green-pepper.png',
      link: '/myfarm/vegetables/greenpepper',
    },
    {
      name: 'Kabuli Chena',
      icon: 'vegetables/kabuli-chena.png',
      link: '/myfarm/vegetables/kabulichena',
    },
    {
      name: 'Lentils - Kayadanyalu',
      icon: 'vegetables/lentils-kayadanyalu.png',
      link: '/myfarm/vegetables/lentils',
    },
    {
      name: 'Mint Leaves',
      icon: 'vegetables/mint-leaves.png',
      link: '/myfarm/vegetables/mintleaves',
    },
    {
      name: 'Onion',
      icon: 'vegetables/onion.png',
      link: '/myfarm/vegetables/onion',
    },
    {
      name: 'Potato',
      icon: 'vegetables/potato.png',
      link: '/myfarm/vegetables/potato',
    },
    {
      name: 'Pumpkin',
      icon: 'vegetables/pumpkin.png',
      link: '/myfarm/vegetables/pumpkin',
    },
    {
      name: 'Toordal',
      icon: 'vegetables/toordal.png',
      link: '/myfarm/vegetables/toordal',
    },
    {
      name: 'Yams',
      icon: 'vegetables/yams.png',
      link: '/myfarm/vegetables/yams',
    },
  ]

  const dataGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '',
      download: 'mango.pdf',
    },
  ]
  return (
    <>
      <Switch>
        <Route path="/myfarm/vegetables/home">
          <MyFarmList
            dataList={dataList}
            title="MyFarm - Vegetables"
          ></MyFarmList>
        </Route>
        <Route path="/myfarm/vegetables/rajma">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Rajma"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/ridgegourd">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Ridge Gourd"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/snakegourd">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Snake Gourd"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/sweetcorn">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Sweet Corn"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/tomatoes">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Tomatoes"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/bengalgram">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Bengal Gram"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/bittergourd">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Bitter Gourd"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/blackgram">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Black Gram"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/carrot">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Carrot"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/cauliflower">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Cauliflower"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/bottlegourd">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Bottle Gourd"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/drumstick">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Drum Stick"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/cassava">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Cassava"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/garlic">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Garlic"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/greenchilli">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Green Chilli"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/greengrams">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Green grams"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/greanpeas">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Grean Peas"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/cowpeas">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Cow Peas"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/cucumber">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Cucumber"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/curryleaves">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Curry Leaves"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/greenpepper">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Green Pepper"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/kabulichena">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Kabuli Chena"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/lentils">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Lentils"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/mintleaves">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Mint Leaves"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/onino">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Onion"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/potato">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Potato"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/pumpkin">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Pumpkin"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/toordal">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Toordal"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/vegetables/yams">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Vegetables - Yams"
          ></MyFarmGuide>
        </Route>
        <Redirect to="/myfarm/vegetables/home" />
      </Switch>
    </>
  )
}
