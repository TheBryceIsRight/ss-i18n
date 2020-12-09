import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 'auto',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Personal Information" {...a11yProps(0)} />
        <Tab label="Bank Information" {...a11yProps(1)} />
        <Tab label="Email Notifications" {...a11yProps(2)} />
        <Tab label="Authorized Representatives" {...a11yProps(3)} />
        <Tab label="Security" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <Grid container spacing={6} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
        <Grid item>
        <Typography variant='h3'>Profile</Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} > 
            <Grid item>
                <Typography variant='h4'>Basic Information</Typography>
              </Grid>
              <Grid item>
              <TextField variant='outlined' label='Business Name' placeholder='Rreal Tacos'></TextField>
              </Grid>
              <Grid item>
              <TextField variant='outlined' label='Email Address' placeholder='user@elavon.com'></TextField>
              </Grid>
            </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} > 
            <Grid item>
              <Typography variant='h4'>Password</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1'>A strong password contains a mix of letters and numbers. It is hard to guess, does not resemble a real word, and should only be used for this account.</Typography>
            </Grid>
            <Grid item>
              <Button variant='contained'>Update Password</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} > 
            <Grid item>
              <Typography variant='h4'>Multi-Factor Authentication</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1'>Add an extra layer of security to your account. A confirmation code will be required every time someone logs onto the Elavon Dashboard.</Typography>
            </Grid>
            <Grid item>
              <Button variant='contained'>Enable Multi-factor Authentication</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} > 
            <Grid item>
              <Typography variant='h4'>Deactivate Account</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1'>Deactivating your Elavon accout means that you will be unable to recieve or recover any of your payment or account information.</Typography>
            </Grid>
            <Grid item>
              <Button variant='outlined'>deactivate account</Button>
            </Grid>
          </Grid>
        </Grid>

      </Grid>

      </TabPanel>
      <TabPanel value={value} index={1}>
      Bank Information
      </TabPanel>
      <TabPanel value={value} index={2}>
      Email Notifications
      </TabPanel>
      <TabPanel value={value} index={3}>
      Authorized Representatives
      </TabPanel>
      <TabPanel value={value} index={4}>
      Security
      </TabPanel>

    </div>
  );
}
