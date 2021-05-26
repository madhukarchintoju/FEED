import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'

export default function PlantationCrop() {
    const dataList = [
        {
            name: 'Mango',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Papaya',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/analytics',
        },
        {
            name: 'Apple',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/aboutSection',
        },
        {
            name: 'Grapes',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/serviceSection',
        },
        {
            name: 'Orange',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/eventSection',
        },
        {
            name: 'Kiwi',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/feedWorkingSection',
        },
        {
            name: 'Pomogranate',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfpo',
        },
        {
            name: 'Strawberry',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myexport',
        },
        {
            name: 'Blueberry',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/analytics',
        },
        {
            name: 'Rasberry',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/',
        },
        {
            name: 'Liche',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/analytics',
        },
        {
            name: 'Banana',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/aboutSection',
        },
        {
            name: 'Grapes',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/serviceSection',
        },
        {
            name: 'Chikku',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/eventSection',
        },
        {
            name: 'Ice Apple',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/feedWorkingSection',
        },
        {
            name: 'Green Apple',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfpo',
        },
        {
            name: 'Guava',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myexport',
        },
        {
            name: 'Water Melon',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myexport',
        },
    ]
    return (
        <>
            <MyFarmList
                dataList={dataList}
                title="MyFarm - Fruits"
            ></MyFarmList>
        </>
    )
}
