import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import MailIcon from '@mui/icons-material/Mail';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import BuildIcon from '@mui/icons-material/Build';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import Fab from '@mui/material/Fab';
import Header from '../../commons/header/header';
import DashboardTable from '../dashboard/dashboard-table';
import AddTaskLog from '../dashboard/addTaskLog';
import { END } from 'redux-saga';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
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
  justifyContent: 'flex-end',
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
export default function MiniDrawer(props: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openAddWindow, setOpenAddWindow] = React.useState(props);

  console.log(openAddWindow);
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            { !open ? <img src="images/favicon.png" style={{ width: '40px'}} />
              : ''
            }
            <IconButton onClick={() => setOpen(!open)}>
              <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab disabled aria-label="like">
                  { open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </Fab>
              </Box>
            </IconButton>
            <div style={{justifyContent: 'end'}}>
              <Header/>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
              <img src="https://rec-data.kalibrr.com/logos/LDC3AY6PVYPWEJD4SMTGGC63GX96WNTQMGSHWJBX-5bad80fb.png" style={{ width: 150, height: 50, margin: 'auto', display: 'flex'}}/>
          </DrawerHeader>
          <Divider />
          <List style={{zIndex: 1}}>
            {['dashboard', 'orders', 'sla leadtime', 'my task', 'users', 'reports', 'configuration', 'tools'].map((text, index) => (
              <Link to={`/${text}`}>
              <ListItem key={index} disablePadding sx={{ display: 'block', textTransform: 'capitalize' }}>
                <ListItemButton
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
                      key: {index},
                    }}
                  >
                    {
                      text === 'dashboard' ? <DashboardIcon color="primary" /> :
                      text === 'orders' ? <MailIcon color="primary" /> :
                      text === 'sla leadtime' ? <TimerOutlinedIcon color="primary" /> :
                      text === 'my task' ? <EventNoteIcon color="primary" /> :
                      text === 'users' ? <SupervisedUserCircleIcon color="primary" /> :
                      text === 'reports' ? <FileCopyIcon color="primary" /> :
                      text === 'configuration' ? <BuildIcon color="primary" /> :
                      text === 'tools' ? <MiscellaneousServicesIcon color="primary" /> :
                      <MailIcon /> 
                    }
                  </ListItemIcon>
                  <ListItemText primary={text} key={index} sx={{ opacity: open ? 1 : 0, textColor: 'yellow' }} />
                </ListItemButton>
              </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3}}>
          <DrawerHeader />
          <AddTaskLog />
          <DashboardTable />
        </Box>
      </Box>
    </>
  );
}
