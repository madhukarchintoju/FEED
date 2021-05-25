import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'
export default function MyFarmFruits() {
    const dataList = [
        {
            name: 'Mango',
            icon: 'fa fa-home',
            link: '/',
        },
        {
            name: 'Papaya',
            icon: 'fa fa-plus-circle',
            link: '/analytics',
        },
        {
            name: 'Apple',
            icon: 'fa fa-address-card',
            link: '/aboutSection',
        },
        {
            name: 'Grapes',
            icon: 'fa fa-check',
            link: '/serviceSection',
        },
        {
            name: 'Orange',
            icon: 'fa fa-calendar',
            link: '/eventSection',
        },
        {
            name: 'Kiwi',
            icon: 'fa fa-sitemap',
            link: '/feedWorkingSection',
        },
        {
            name: 'Pomogranate',
            icon: 'fa fa-building',
            link: '/myfpo',
        },
        {
            name: 'Strawberry',
            icon: 'fa fa-angle-double-up',
            link: '/myexport',
        },
        {
            name: 'Blueberry',
            icon: 'fa fa-address-book',
            link: '/analytics',
        },
        {
            name: 'Rasberry',
            icon: 'fa fa-home',
            link: '/',
        },
        {
            name: 'Liche',
            icon: 'fa fa-plus-circle',
            link: '/analytics',
        },
        {
            name: 'Banana',
            icon: 'fa fa-address-card',
            link: '/aboutSection',
        },
        {
            name: 'Grapes',
            icon: 'fa fa-check',
            link: '/serviceSection',
        },
        {
            name: 'Chikku',
            icon: 'fa fa-calendar',
            link: '/eventSection',
        },
        {
            name: 'Ice Apple',
            icon: 'fa fa-sitemap',
            link: '/feedWorkingSection',
        },
        {
            name: 'Green Apple',
            icon: 'fa fa-building',
            link: '/myfpo',
        },
        {
            name: 'Guava',
            icon: 'fa fa-angle-double-up',
            link: '/myexport',
        },
        {
            name: 'Water Melon',
            icon: 'fa fa-angle-double-up',
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
