import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300,
    },
    margin: {
      height: theme.spacing(3),
    },
  }),
);

const marks = [
  {
    value: 0,
    label: '$50k',
  },
  {
    value: 30,
    label: '$500k',
  },
  {
    value: 50,
    label: '$1 mil',
  },
  {
    value: 80,
    label: '$10 mil',
  },
];

function valuetext(value: number) {
  return `${value}`;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-always" gutterBottom>
        Monthly Credit Card Sales      
    </Typography>
      <Slider
        defaultValue={80}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={5}
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
  );
}