import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CardHeader } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';
import useTranslation from '../hooks/useTranslation';



const useStyles = makeStyles({
  root: {
    minWidth: 588,
    maxWidth: 588,
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

const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 100,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

export default function OrderCard() {
  const classes = useStyles();
  const classes1 = useStyles1();
  const { locale } = useTranslation();

  return ( <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="shopping bag">
                    <LocalMallIcon/>
                </Avatar>
                }
                action={
                <Link href="/[lang]/orders" as={`/${locale}/orders`} passHref >
                    <IconButton aria-label="settings">
                        <NavigateNextIcon />
                    </IconButton>
                </Link>
                
                }
                title="Your Recent Orders"
                subheader=""
            />
            <CardContent>
                <Grid container spacing={3} direction='column' alignItems='flex-start' justify='flex-start' className={classes1.root} >
                    <Grid item>
                        <Grid container spacing={10} direction='row' alignItems='flex-start' justify='flex-start' className={classes1.root} >
                            <Grid item>
                                <Grid container spacing={1} direction='column' alignItems='flex-start' justify='flex-start' className={classes1.root} >
                                    <Grid item>
                                        <Typography variant="h6">
                                            Order Placed
                                        </Typography>
                                        </Grid>
                                        <Grid item>
                                        <Typography variant="body1">
                                            October 22, 2020
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container spacing={1} direction='column' alignItems='flex-start' justify='flex-start' className={classes1.root} >
                                    <Grid item>
                                        <Typography variant="h6">
                                            Total
                                        </Typography>
                                        </Grid>
                                        <Grid item>
                                        <Typography variant="body1">
                                            $20.00
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container spacing={1} direction='column' alignItems='flex-end' justify='flex-start' className={classes1.root} >
                                    <Grid item>
                                        <Typography variant="h6">
                                            Ship to
                                        </Typography>
                                        </Grid>
                                        <Grid item>
                                        <Typography variant="body1">
                                            Bryce Watson
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">
                            Expected Delivery Friday Afternoon
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">
                            Talech on Poynt
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={7} direction='row' alignItems='flex-start' justify='flex-end' className={classes1.root} >
                            <Grid item>
                                <img src='/poynt.svg' alt='next' width='100%'/>
                            </Grid>
                            <Grid item>
                                <Grid container spacing={1} direction='column' alignItems='flex-start' justify='flex-start' className={classes1.root} >
                                    <Grid item>
                                        <Button variant='contained' style={{minWidth: '280px'}}>Track Package</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant='outlined' style={{minWidth: '280px'}}>Return or Replace Items</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant='outlined' style={{minWidth: '280px'}}>View your item</Button>
                                    </Grid>
                                </Grid>

                                
                            </Grid>
                        </Grid>

                        
                    </Grid>
                </Grid>
            </CardContent>
        <CardActions>
            <Button size="small" >Archive Order</Button>
        </CardActions>
    </Card>
    
  );
}