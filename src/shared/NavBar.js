import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles  = {
  tabs: {
        width: '390px',
        position: 'absolute',
        right: '60px',
        textTransform: 'uppercase',
      },
      tab: {
        height: '64px',
        color: '#fff',
      },
      inkBar: {
        height: '4px',
        marginTop: '-4px',
      },
};
//class NavBar extends Component {
//  render() {
 //   return (
 const NavBar = () => (
      <div className="app-header">
      <MuiThemeProvider>
        <Tabs  tabItemContainerStyle={{ backgroundColor: 'transparent' }} style={styles.tabs}  inkBarStyle={styles.inkBar}>
          <Tab style={styles.tab} label="Home" />
          <Tab style={styles.tab} label="Account" />
          <Tab style={styles.tab} label="About" />
        </Tabs>
        </MuiThemeProvider>
      </div>
      );
 //   );
 // }
//}

export default NavBar;