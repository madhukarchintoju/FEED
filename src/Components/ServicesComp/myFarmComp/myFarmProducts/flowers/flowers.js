import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'

export default function Flowers() {
    const dataList = [
        {
            name: 'Mango',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Papaya',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png',
            link: '/analytics',
        },
        {
            name: 'Apple',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png',
            link: '/aboutSection',
        },
        {
            name: 'Grapes',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png',
            link: '/serviceSection',
        },
        {
            name: 'Orange',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png',
            link: '/eventSection',
        },
        {
            name: 'Kiwi',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png',
            link: '/feedWorkingSection',
        },
        {
            name: 'Pomogranate',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png',
            link: '/myfpo',
        },
        {
            name: 'Strawberry',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png',
            link: '/myexport',
        },
        {
            name: 'Blueberry',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png',
            link: '/analytics',
        },
        {
            name: 'Rasberry',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png',
            link: '/',
        },
        {
            name: 'Liche',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png',
            link: '/analytics',
        },
        {
            name: 'Banana',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png',
            link: '/aboutSection',
        },
        {
            name: 'Grapes',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png',
            link: '/serviceSection',
        },
        {
            name: 'Chikku',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png',
            link: '/eventSection',
        },
        {
            name: 'Ice Apple',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png',
            link: '/feedWorkingSection',
        },
        {
            name: 'Green Apple',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png',
            link: '/myfpo',
        },
        {
            name: 'Guava',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png',
            link: '/myexport',
        },
        {
            name: 'Water Melon',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png',
            link: '/myexport',
        },
    ]
    return (
        <>
            <MyFarmList
                dataList={dataList}
                title="MyFarm - Flowers"
            ></MyFarmList>
        </>
    )
}
