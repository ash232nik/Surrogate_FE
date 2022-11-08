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
import access_library from '../assets/images/access_library.svg';
import dashboard_icon from '../assets/images/dashboard_icon.svg';
import credit_rule_icon from '../assets/images/credit_rule_icon.svg';
import card_catalogue_icon from '../assets/images/card_catalogue_icon.svg';
import apply_credit_card_icon from '../assets/images/apply_credit_card_icon.svg';
import collape_icon from '../assets/images/collape_icon.svg';
import sales_icon from '../assets/images/sales_icon.svg';
import user_managemen_icon from '../assets/images/user_managemen_icon.svg';
import risk_management_icon from '../assets/images/risk_management_icon.svg';
import lms_icon from '../assets/images/lms_icon.svg';
import product_management_icon from '../assets/images/product_management_icon.svg';
import programme_management_icon from '../assets/images/programme_management_icon.svg';
import Collapse from '@mui/material/Collapse';
import BulkUpload from '../screens/bulkUpload';


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
  backgroundColor:'black',
  color:'white'
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
    setOpen(!open);
  };
  const handleClick = () =>{
    setOpenList(!openList)
  }
  const listStyle = {
    display:'block',
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
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton sx={{display: !open ? 'none' : 'block'}}
        //   onClick={handleDrawerClose}
          >
            <img src={YesBank}/>
            {/* <img src={theme.direction === 'rtl' ? collape_icon : collape_icon} /> */}
          </IconButton>
          <IconButton 
          onClick={handleDrawerClose}
          >
           
            <img src={theme.direction === 'rtl' ? collape_icon : collape_icon} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[{content:'HOME',image:Home,subContent:[]}, {content:'DASHBOARD',image:dashboard_icon,subContent:[]}, {content:'PRODUCT MNGMT.',image:product_management_icon,subContent:[{data:'Programme Mngmt.',img:programme_management_icon},{data:'Credit Rule',img:credit_rule_icon},{data:'Card Catalogue',img:card_catalogue_icon}]}, {content:'SALES',image:sales_icon,subContent:[]},{content:'APPLY CREDIT CARD',image:apply_credit_card_icon,subContent:[]},{content:'USER MNGMT.',image:user_managemen_icon,subContent:[]},{content:'LMS',image:lms_icon,subContent:[]},{content:'RISK MNGMT.',image:risk_management_icon,subContent:[]},{content:'ACCESS LIBRARY',image:access_library,subContent:[]}].map((text, index) => (
            <ListItem key={text.content} disablePadding sx={listStyle}>
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
                    <img src={text.image}/>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText primary={text.content}
                 sx={{
                     opacity: open ? 1 : 0,
                    padding:'0 0.5rem',
                     color:'white'
                 }}
                  />
              </ListItemButton>}
           { text.subContent.length > 0 && <>
            <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <img src={Home}  style={{marginLeft:'4px'}}/>
            </ListItemIcon>
            <ListItemText primary={text.content}  sx={{
                     opacity: open ? 1 : 0,
                    // padding:'0 0 0 1.7rem',
                    paddingLeft:'30px',
                     color:'white'
                 }}/>
         < img src={openList ? drop_up_arrow_icon :  drop_down_arrow_icon} />  
          </ListItemButton>
       { text.subContent.length > 0 && text.subContent.map((subData)=>{
        return(
            <Collapse in={openList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <img src={subData.img}  />
                  {/* <StarBorder /> */}
                </ListItemIcon>
                <ListItemText primary={subData.data} sx={{paddingLeft:'8px'}}/>
              </ListItemButton>
            </List>
          </Collapse>
        )
       }) }
          </>
           }
          
            </ListItem>
          ))}
        </List>
       
      </Drawer>
    <BulkUpload/>
    </Box>
  );
}
