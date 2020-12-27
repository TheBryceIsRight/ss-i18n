import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CardHeader } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/link';
import useTranslation from '../hooks/useTranslation';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import VerticalLinearStepperInvoice from '../components/VerticalLinearStepperInvoice';
import SendIcon from '@material-ui/icons/Send';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import BuildIcon from '@material-ui/icons/Build';
import VerticalLinearStepper from './VerticalLinearStepper';
import AssignmentIcon from '@material-ui/icons/Assignment';



const useStyles = makeStyles({
  root: {
    minWidth: 360,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


export default function QuickActionsMobile() {
  const classes = useStyles();
  const { locale, t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const [openRegistration, setOpenRegistration] = React.useState(false);

  const handleClickOpenRegistration = () => {
    setOpenRegistration(true);
  };
  const handleCloseRegistration = () => {
    setOpenRegistration(false);
  };

  return ( <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="shopping bag">
                    <AddCircleIcon/>
                </Avatar>
                }
                title="Quick Actions"
                subheader=""
            />
            <CardContent>
            <List component="nav" aria-label="main mailbox folders">
                <Link href="/[lang]/take_a_payment" as={`/${locale}/take_a_payment`} passHref >
                <ListItem button>
                <ListItemIcon>
                    <AttachMoneyIcon />
                </ListItemIcon>
                <ListItemText primary={t('take_a_payment')} />
                </ListItem>
                </Link>
                <ListItem button onClick={handleClickOpen}>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary={t('send_an_invoice')} />
                </ListItem>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Send an Invoice
                    </DialogTitle>
                    <DialogContent dividers>
                    <VerticalLinearStepperInvoice/>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Save changes
                    </Button>
                    </DialogActions>
                </Dialog>
                <ListItem>
                <ListItemIcon>
                    <AddShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary={t('add_an_item')} />
                </ListItem>
                <ListItem>
                <ListItemIcon>
                    <BuildIcon />
                </ListItemIcon>
                <ListItemText primary={t('read_the_set_up_guide')}  />
                </ListItem>
                <ListItem button onClick={handleClickOpenRegistration}>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Finish signing up" />
                </ListItem>
                <Dialog onClose={handleCloseRegistration} aria-labelledby="customized-dialog-title" open={openRegistration}>
                    <DialogTitle id="customized-dialog-title" onClose={handleCloseRegistration}>
                    Registration
                    </DialogTitle>
                    <DialogContent dividers>
                    <VerticalLinearStepper/>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleCloseRegistration} color="primary">
                        Save changes
                    </Button>
                    </DialogActions>
                </Dialog>
            </List>
               
            </CardContent>
        <CardActions>
            <Button size="small" >{t('archive_order')}</Button>
        </CardActions>
    </Card>
    
  );
}