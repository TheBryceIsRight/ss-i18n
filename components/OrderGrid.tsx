import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import OrderCard from '../components/OrderCard';
import ComboBox from '../components/ComboBox';


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

export default function OrderGrid() {
  const classes1 = useStyles1();

  return (
    <Grid container spacing={4} direction='column' alignItems='center' justify='center' className={classes1.root} >
        <Grid item>
            <Grid container spacing={4} direction='column' alignItems='flex-start' justify='center' className={classes1.root} >
            <Grid item>
                <Typography variant="h3">
                    Your Orders
                </Typography>
            </Grid>
            <Grid item>
              <ComboBox/>
            </Grid>
            <Grid item>
                <OrderCard/>
            </Grid>
            <Grid item>
                <OrderCard/>
            </Grid>
            <Grid item>
                <OrderCard/>
            </Grid>
        </Grid>
        </Grid>    
    </Grid>

    

    
  );
}