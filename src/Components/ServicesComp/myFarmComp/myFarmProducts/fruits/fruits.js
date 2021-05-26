import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyFarmGuide from '../../myFarmGuide/myFarmGuide'

export default function MyFarmFruits() {
    const dataList = [
        {
            name: 'Mango',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Papaya',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/papaya',
        },
        {
            name: 'Apple',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/apple',
        },
        {
            name: 'Grapes',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Orange',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Kiwi',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Pomogranate',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Strawberry',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Blueberry',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Rasberry',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Liche',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Banana',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Grapes',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Chikku',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Ice Apple',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Green Apple',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Guava',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Water Melon',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/mango',
        },
    ]

    const dataGuide = [
        {
            name: 'Climate',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'Soil Preparation',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'Seeds',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'Cultivation',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'Irrigation',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'Fertilizers',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'Dieases',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'Pesticides',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'Internal Crop',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'Pre-harvesting',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'Harvesting',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'Post-Harvesting',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'Crop Expenditure Tools',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'Crop-Advisory',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'Agri Equipments',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'Agri Experts',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'Value Addition Unit',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'Marketing',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'FAQ',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
        {
            name: 'Farmer Connect Social Media',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
            link: '/myfarm/aqua/fish',
        },
    ]
    return (
        <>
            <Switch>
                <Route path="/myfarm/fruits/home">
                    <MyFarmList
                        dataList={dataList}
                        title="MyFarm - Fruits"
                    ></MyFarmList>
                </Route>
                <Route path="/myfarm/fruits/mango">
                    <MyFarmGuide
                        dataGuide={dataGuide}
                        title="Fruits - Mango"
                    ></MyFarmGuide>
                </Route>
                <Route path="/myfarm/fruits/papaya">
                    <MyFarmGuide
                        dataGuide={dataGuide}
                        title="Fruits - Papaya"
                    ></MyFarmGuide>
                </Route>
                <Route path="/myfarm/fruits/apple">
                    <MyFarmGuide
                        dataGuide={dataGuide}
                        title="Fruits - Apple"
                    ></MyFarmGuide>
                </Route>
                <Redirect to="/myfarm/fruits/home" />
            </Switch>
        </>
    )
}
