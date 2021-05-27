import React from 'react'
import { Link } from 'react-router-dom'
import {
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'

export default function SwipeableNav(props) {
  const { t } = useTranslation()
  const mainMenu = [
    {
      name: t('home'),
      icon: 'fa fa-home',
      link: '/',
    },
    {
      name: t('analytics'),
      icon: 'fa fa-plus-circle',
      link: '/analytics',
    },
    {
      name: t('about_us'),
      icon: 'fa fa-address-card',
      link: '/aboutSection',
    },
    {
      name: t('services'),
      icon: 'fa fa-check',
      link: '/serviceSection',
    },
    {
      name: t('events'),
      icon: 'fa fa-calendar',
      link: '/eventSection',
    },
    {
      name: t('how_feed_works'),
      icon: 'fa fa-sitemap',
      link: '/feedWorkingSection',
    },
    {
      name: t('fpo'),
      icon: 'fa fa-building',
      link: '/myfpo',
    },
    {
      name: t('exports'),
      icon: 'fa fa-angle-double-up',
      link: '/myexport',
    },
    {
      name: t('contact_us'),
      icon: 'fa fa-address-book',
      link: '/analytics',
    },
  ]

  const authData = [
    {
      name: t('login_caps'),
      icon: 'fa fa-truck',
      link: '/login',
    },
    {
      name: t('register_caps'),
      icon: 'fa fa-registered',
      link: '/register',
    },
  ]

  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    setOpen(props.open)
  }, [props])

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setOpen(open)

    if (open === false) {
      props.navOpened(false)
    }
  }

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {mainMenu.map((item, index) => (
          <div key={index}>
            <ListItem button component={Link} to={item.link}>
              <ListItemIcon>
                <Icon className={item.icon} />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </div>
        ))}
      </List>
      <Divider />
      <List>
        {authData.map((item, index) => (
          <div key={index}>
            <ListItem button component={Link} to={item.link}>
              <ListItemIcon>
                <Icon className={item.icon} />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  )
}
