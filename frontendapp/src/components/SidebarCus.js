import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PeopleIcon from '@mui/icons-material/People';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SatelliteIcon from '@mui/icons-material/Satellite';
import { Link as RouterLink } from 'react-router-dom';

const SidebarList = ({ toggleDrawer }) => (
  <List>
    <ListItem button key="Home" onClick={toggleDrawer(false)} component={RouterLink} to="/">
      <ListItemIcon><HomeIcon /></ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button key="Rockets" onClick={toggleDrawer(false)} component={RouterLink} to="/rockets">
      <ListItemIcon><RocketLaunchIcon /></ListItemIcon>
      <ListItemText primary="Rockets" />
    </ListItem>
    <ListItem button key="Crew" onClick={toggleDrawer(false)} component={RouterLink} to="/crew">
      <ListItemIcon><PeopleIcon /></ListItemIcon>
      <ListItemText primary="Crew" />
    </ListItem>
    <ListItem button key="History" onClick={toggleDrawer(false)} component={RouterLink} to="/history">
      <ListItemIcon><HistoryEduIcon /></ListItemIcon>
      <ListItemText primary="History" />
    </ListItem>
    <ListItem button key="Starlink" onClick={toggleDrawer(false)} component={RouterLink} to="/starlink">
      <ListItemIcon><SatelliteIcon /></ListItemIcon>
      <ListItemText primary="Starlink" />
    </ListItem>
  </List>
);

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem'  }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={toggleDrawer(true)}
        sx={{ mr: 2, ...(isOpen && { display: 'none' }) }
      }

      style={{marginLeft:"2 rem"}}
      >
        <MenuIcon />
      </IconButton>
      </div>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <SidebarList toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
};

export default Sidebar;
