import React from 'react';
import Cryptocurrency from './screen/Cryptocurrency';
import Home from './screen/Home';
import TickerNew from './screen/TickerNew';
import SideBar from './screen/SideBar';
import { DrawerNavigator } from 'react-navigation';
import { Root } from "native-base";


const AppNavigator = DrawerNavigator(
  {
    Home: { screen: Home },
    TickerNew: { screen: TickerNew },
    Cryptocurrency: { screen: Cryptocurrency }
  },
  {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: props => <SideBar {...props} />
  }
);

export default () => (
  <Root>
    <AppNavigator />
  </Root>
);
