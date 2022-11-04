import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import YesBank from '../assets/images/bank_axis_logo.svg';
import Home from '../assets/images/home_icon.svg';
import drop_up_arrow_icon from '../assets/images/drop_up_arrow_icon.svg';
import drop_down_arrow_icon from '../assets/images/drop_down_arrow_icon.svg';
import Collapse from '@mui/material/Collapse';


const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor:'black',
  color:'white'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDivider-root':{borderColor:'grey'},
    '& .MuiListItemIcon-root':{minWidth:'unset',marginLeft:'4px'},
    '& .MuiButtonBase-root-MuiListItemButton-root ':{padding:'0 1.5rem'},
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
      
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openList, setOpenList] = React.useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = () =>{
    setOpenList(!openList)
  }
  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
           
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer variant="permanent" open={true}>
        <DrawerHeader>
          <IconButton 
        //   onClick={handleDrawerClose}
          >
            <img src={YesBank}/>
            {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[{content:'HOME',subContent:[{data:'Programme Mngmt.'},{data:'Credit Rule'},{data:'Card Catalogue'}]}, {content:'DASHBOARD',subContent:[]}, {content:'PRODUCT MNGMT.',subContent:[]}, {content:'SALES',subContent:[]},{content:'APPLY CREDIT CARD',subContent:[]},{content:'USER MNGMT.',subContent:[]},{content:'LMS',subContent:[]},{content:'RISK MNGMT.',subContent:[]},{content:'ACCESS LIBRARY',subContent:[]}].map((text, index) => (
            <ListItem key={text.content} disablePadding sx={{ display: 'block' }}>
          {  text.subContent.length === 0 && <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    <img src={Home}/>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText primary={text.content}
                 sx={{
                    //  opacity: open ? 1 : 0,
                    padding:'0 0.5rem',
                     color:'white'
                 }}
                  />
              </ListItemButton>}
           { text.subContent.length > 0 && <>
            <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <img src={Home}/>
            </ListItemIcon>
            <ListItemText primary={text.content}  sx={{
                    //  opacity: open ? 1 : 0,
                    // padding:'0 0 0 1.7rem',
                    paddingLeft:'8px',
                     color:'white'
                 }}/>
         < img src={openList ? drop_up_arrow_icon :  drop_down_arrow_icon} />  
          </ListItemButton>
          <Collapse in={openList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
          </>
           }
          
            </ListItem>
          ))}
        </List>
       
      </Drawer>
    
    </Box>
  );
}
