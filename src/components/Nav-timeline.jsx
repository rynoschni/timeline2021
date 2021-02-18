import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Ghost from './Ghost';
import GhostLoad from './GhostLoad';
import VertTimeline from './Vert-timeline';
import genDataItems from '../data/generalData';
import aapaItems from '../data/aapaData';
import './style.css';

const drawerWidth = 150;

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#008AD2',
//       main: '#01426a',
//       accent: '#F99F33'
//     }
//   }
// })

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    palette: {
      primary: {
        light: '#008AD2',
        main: '#01426a',
        accent: '#F99F33'
      }
    }
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      background: '#01426a',
      color: 'white',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const NavTimeline = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [yearData, setYearData] = useState(null);
  const [ghostLoad, setGhostLoad] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const _handleYearClick = (yearData) =>{
    setYearData(yearData)
    setGhostLoad(true)
    setTimeout(() => {
    setGhostLoad(false)
    },1500)
    ;
    
  };


  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Typography className="aapa-lightBlue"

        >
          General PA History
        </Typography>
        {genDataItems.map((item) => (
          <ListItem button key={item.year} type='button' onClick={(e) => _handleYearClick(item)}>
            <ListItemText primary={item.year} />
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <Typography
        className="aapa-lightBlue"
        >
          AAPA History
        </Typography>
        {aapaItems.map((item, index) => (
          <ListItem button key={item.year} type='button' onClick={(e) => _handleYearClick(item)}>
          <ListItemText primary={item.year} />
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
        </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" noWrap>
            Historical Timeline
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      {yearData !== null ?  
        (!!ghostLoad === true ? <GhostLoad /> :
        <VertTimeline yearData={yearData}/>) : <Ghost />}
    </div>
  );
}

NavTimeline.propTypes = {
  window: PropTypes.func,
  };

export default NavTimeline;