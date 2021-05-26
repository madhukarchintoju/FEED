import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'

export default function Vegetables() {
    const dataList = [
        {
            name: 'Tamato',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
            link: '/myfarm/fruits/mango',
        },
        {
            name: 'Pumpkin',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
            link: '/analytics',
        },
        {
            name: 'Ladies Finger',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
            link: '/aboutSection',
        },
        {
            name: 'Potato',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
            link: '/serviceSection',
        },
        {
            name: 'Drumstick',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
            link: '/eventSection',
        },
        {
            name: 'Onion',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
            link: '/feedWorkingSection',
        },
        {
            name: 'Chilli',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
            link: '/myfpo',
        },
        {
            name: 'Raw Mango',
            icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
            link: '/myexport',
        },
    ]
    return (
        <>
            <MyFarmList
                dataList={dataList}
                title="MyFarm - Vegetables"
            ></MyFarmList>
        </>
    )
}
