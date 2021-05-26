import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'

export default function Dairy() {
    const dataList = [
        {
            name: 'Milk',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Panner',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/analytics',
        },
        {
            name: 'Lassi',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/aboutSection',
        },
        {
            name: 'Badam Milk',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/serviceSection',
        },
        {
            name: 'Curd',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/eventSection',
        },
        {
            name: 'Butter Milk',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/feedWorkingSection',
        },
        {
            name: 'Ghee',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png',
            link: '/myfpo',
        },
    ]
    return (
        <>
            <MyFarmList dataList={dataList} title="MyFarm - Dairy"></MyFarmList>
        </>
    )
}
