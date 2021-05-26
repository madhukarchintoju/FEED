import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'

export default function ForestProducts() {
    const dataList = [
        {
            name: 'Mango',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Papaya',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png',
            link: '/analytics',
        },
        {
            name: 'Apple',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png',
            link: '/aboutSection',
        },
        {
            name: 'Grapes',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png',
            link: '/serviceSection',
        },
        {
            name: 'Orange',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png',
            link: '/eventSection',
        },
        {
            name: 'Kiwi',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png',
            link: '/feedWorkingSection',
        },
        {
            name: 'Pomogranate',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png',
            link: '/myfpo',
        },
        {
            name: 'Strawberry',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png',
            link: '/myexport',
        },
        {
            name: 'Blueberry',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png',
            link: '/analytics',
        },
        {
            name: 'Rasberry',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png',
            link: '/',
        },
        {
            name: 'Liche',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png',
            link: '/analytics',
        },
        {
            name: 'Banana',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png',
            link: '/aboutSection',
        },
        {
            name: 'Grapes',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png',
            link: '/serviceSection',
        },
        {
            name: 'Chikku',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png',
            link: '/eventSection',
        },
        {
            name: 'Ice Apple',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png',
            link: '/feedWorkingSection',
        },
        {
            name: 'Green Apple',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png',
            link: '/myfpo',
        },
        {
            name: 'Guava',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png',
            link: '/myexport',
        },
        {
            name: 'Water Melon',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png',
            link: '/myexport',
        },
    ]
    return (
        <>
            <MyFarmList
                dataList={dataList}
                title="MyFarm - Forest Products"
            ></MyFarmList>
        </>
    )
}
