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

const SidebarList = ({ toggleDrawer }) => (
  <List>
    {/* Add ListItem components for each navigation item */}
    <ListItem button key="Home" onClick={toggleDrawer(false)}>
      <ListItemIcon><HomeIcon /></ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button key="Rockets" onClick={toggleDrawer(false)}>
      <ListItemIcon><RocketLaunchIcon /></ListItemIcon>
      <ListItemText primary="Rockets" />
    </ListItem>
    <ListItem button key="Crew" onClick={toggleDrawer(false)}>
      <ListItemIcon><PeopleIcon /></ListItemIcon>
      <ListItemText primary="Crew" />
    </ListItem>
    <ListItem button key="History" onClick={toggleDrawer(false)}>
      <ListItemIcon><HistoryEduIcon /></ListItemIcon>
      <ListItemText primary="History" />
    </ListItem>
    <ListItem button key="Starlink" onClick={toggleDrawer(false)}>
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
    <>
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
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <SidebarList toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
};

export default Sidebar;
