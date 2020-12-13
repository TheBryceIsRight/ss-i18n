import React from 'react';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import EnhancedTable from '../components/InvoiceTable';
import EnhancedTable1 from '../components/InvoiceTable1';
import EnhancedTable2 from '../components/InvoiceTable2';
import Box from '@material-ui/core/Box';


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
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
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

interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles((theme: Theme) =>
createStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 80,
      width: '100%',
      backgroundColor: theme.palette.primary.main,
      },
    },
  }),
)((props: StyledTabsProps) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

interface StyledTabProps {
  label: string;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
  }),
)((props: StyledTabProps) => <Tab {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo2: {
    backgroundColor: theme.palette.background.default,
  },
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo2}>
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label="All"> 
            <EnhancedTable/>
            </StyledTab>
          <StyledTab label="Invoices">
            <EnhancedTable1/>
          </StyledTab>
          <StyledTab label="Quotes">
            <EnhancedTable2/>
          </StyledTab>
        </StyledTabs>
        <TabPanel value={value} index={0}>
        <EnhancedTable/>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <EnhancedTable1/>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <EnhancedTable2/>
        </TabPanel>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
}