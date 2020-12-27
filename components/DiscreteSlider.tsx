import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import useTranslation from '../hooks/useTranslation';

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
    label: '$8 mil',
  },
];

function valuetext(value: number) {
  return `${value}`;
}

export default function DiscreteSlider() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-always" gutterBottom>
        {t('monthly_sales')}     
    </Typography>
      <Slider
        track={false}
        defaultValue={80}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={1}
        marks={marks}
        valueLabelDisplay="off"
      />
    </div>
  );
}