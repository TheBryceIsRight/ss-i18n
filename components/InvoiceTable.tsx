import React from 'react';
import clsx from 'clsx';
import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FilterListIcon from '@material-ui/icons/FilterList';
import DetailsIcon from '@material-ui/icons/Details';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PrintIcon from '@material-ui/icons/Print';
import ArchiveIcon from '@material-ui/icons/Archive';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ListSubheader from '@material-ui/core/ListSubheader';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import PersonIcon from '@material-ui/icons/Person';
import EventIcon from '@material-ui/icons/Event';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ReceiptIcon from '@material-ui/icons/Receipt';
import StoreIcon from '@material-ui/icons/Store';
import EventNoteIcon from '@material-ui/icons/EventNote';
import NoteIcon from '@material-ui/icons/Note';
import Grid from '@material-ui/core/Grid';


interface Data {
  date: string;
  customer_name: string;
  payment: number;
  order_no: number;
  status: string;
}

function createData(
  date: string,
  customer_name: string,
  payment: number,
  order_no: number,
  status: string,
): Data {
  return { date, customer_name, payment, order_no, status };
}

const useStyles1 = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const rows = [
  createData('20 / 02 / 2020   09:42 PM', 'Jenny Bradley', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:41 PM', 'Srinivas Malluri', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:40 PM', 'Aarti Rao', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:39 PM', 'Allan Santos', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:38 PM', 'Andrew Hessleberg', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:37 PM', 'Anna Ananicz', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:36 PM', 'Brian Twamley', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:35 PM', 'Bryce Watson', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:34 PM', 'Craig Bruce', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:33 PM', 'Cristane Baraghoush', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:32 PM', 'Cristina Hinz', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:31 PM', 'Elvis Isakovic', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:30 PM', 'Frank Stanton', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:29 PM', 'John Key', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:28 PM', 'John Lee', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:27 PM', 'John Wirth', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:26 PM', 'Joshua Whittle', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:25 PM', 'Kanhaiyalal Khatik', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:24 PM', 'Kate Cao', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:23 PM', 'Kathleen Lemmons', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:22 PM', 'Luke Blanchford', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:21 PM', 'Madhvi Sharma', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:20 PM', 'Matt Ault', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:19 PM', 'Michael Loussaint', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:18 PM', 'Monica Moore', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:17 PM', 'Murugapiran Natanasigaman', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:16 PM', 'NJ Matias', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:15 PM', 'Rajesh Jivangikar', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:14 PM', 'Ravichander Rama', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:13 PM', 'Shanmukeswara Manukonda', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:12 PM', 'Sharmila Kancherla', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:11 PM', 'Srinivas Malluri', 1234, 1234567890, 'Completed'),
  createData('20 / 02 / 2020   09:10 PM', 'Tanvir Mustafiz', 1234, 1234567890, 'Completed'),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: HeadCell[] = [
  { id: 'date', numeric: false, disablePadding: true, label: 'Transaction Date (EST)' },
  { id: 'customer_name', numeric: true, disablePadding: false, label: 'Customer Name' },
  { id: 'payment', numeric: true, disablePadding: false, label: 'Payment' },
  { id: 'order_no', numeric: true, disablePadding: false, label: 'Invoice Number' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
];

interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>;
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };



  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
  }),
);

interface EnhancedTableToolbarProps {
  numSelected: number;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Invoices and Quotes
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Details">
          <IconButton aria-label="details" >
            <DetailsIcon />
          </IconButton>            
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }),
);

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('customer_name');
  const [selected, setSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (_event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.date);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_event: React.MouseEvent<unknown>, date: string) => {
    const selectedIndex = selected.indexOf(date);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, date);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (date: string) => selected.indexOf(date) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const classes1 = useStyles1();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes1.list, {
        [classes1.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Invoice Paid - 100.00 USD
        </ListSubheader>
      }>
          
          <ListItem button>
            <ListItemIcon><PrintIcon/> </ListItemIcon>
            <ListItemText primary={"Print"} />
          </ListItem>
          <ListItem button>
          <ListItemIcon><ArchiveIcon/> </ListItemIcon>
            <ListItemText primary={"Archive"} />
          </ListItem>
          <ListItem button>
          <ListItemIcon><FileCopyIcon/> </ListItemIcon>
            <ListItemText primary={"Copy"} />
          </ListItem>
          <ListItem button>
          <ListItemIcon><NoteIcon/> </ListItemIcon>
            <ListItemText primary={"Add a note"} />
          </ListItem>
      </List>
      <Divider />
      <List subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Customer Information
        </ListSubheader>
      }>
        <ListItem >
          <ListItemIcon><PersonIcon/> </ListItemIcon>
            <ListItemText primary={"Bill To"} secondary={"Jorgulon Morgulies"} />
          </ListItem>
          <ListItem >
          <ListItemIcon><EventIcon/> </ListItemIcon>
            <ListItemText primary={"Due Date"} secondary={"2020/10/10"} />
          </ListItem>
      </List>
      <Divider />
      <List subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Invoice Details
        </ListSubheader>
      }>
        <ListItem >
        <ListItemIcon><ReceiptIcon/> </ListItemIcon>
            <ListItemText primary={"Invoice Number"} secondary={"90511599757059730"} />
          </ListItem>
          <ListItem >
          <ListItemIcon><StoreIcon/> </ListItemIcon>
            <ListItemText primary={"Merchant Transaction ID"} secondary={"80511599757059730"} />
          </ListItem>
          <ListItem >
          <ListItemIcon><EventNoteIcon/> </ListItemIcon>
            <ListItemText primary={"Issue Date"} secondary={"2020/09/10"} />
          </ListItem>
          <ListItem >
          <ListItemIcon><LocalShippingIcon/> </ListItemIcon>
            <ListItemText primary={"Ship to"} secondary={"123 Sesame Street NW, Atlanta, GA, 30318"} />
          </ListItem>
      </List>
      <Divider />
      <List subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Invoice History
        </ListSubheader>
      }>
        <ListItem >
            <ListItemIcon><CheckCircleIcon/> </ListItemIcon>
            <ListItemText primary={"Paid - 100.00 USD"} secondary={"12/12/2020 03:30 PM"} />
          </ListItem>
          <ListItem >
            <ListItemIcon><RadioButtonUncheckedIcon/> </ListItemIcon>
            <ListItemText primary={"Unpaid - 100.00 USD"} secondary={"12/12/2020 03:28 PM"} />
          </ListItem>
      </List>
      <Divider />
      <List subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Order Details
        </ListSubheader>
      }>
        <ListItem >
            <ListItemText primary={"Invoice Number"} secondary={"2222: 264264826"} />
          </ListItem>
          <ListItem >
            <ListItemText primary={"Unit Price"} secondary={"$10.00"} />
          </ListItem>
          <ListItem >
            <ListItemText primary={"Quantity"} secondary={"10"} />
          </ListItem>
          <ListItem >
            <ListItemText primary={"Subtotal"} secondary={"$100.00"} />
          </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
            <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.date);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.date)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.date}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.date}
                      </TableCell>
                      <TableCell align="right">{row.customer_name}</TableCell>
                      <TableCell align="right">{row.payment}</TableCell>
                      <TableCell align="right">{row.order_no}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      
      <div>
          <React.Fragment key={'right'}>
          <Grid container spacing={2} direction='column' alignItems='flex-end' justify='center' className={classes.root} >
                <Grid item>
                <FormControlLabel
                  control={<Switch checked={dense} onChange={handleChangeDense} />}
                  label="Dense padding"
                />
                </Grid>
                <Grid item>
                <Button onClick={toggleDrawer('right', true)} variant='outlined' startIcon={<DetailsIcon/> }>{'Invoice Details'}</Button>
                <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                  {list('right')}
                </Drawer>
                </Grid>
          </Grid>

            
          </React.Fragment>
      </div>
    </div>
  );
}