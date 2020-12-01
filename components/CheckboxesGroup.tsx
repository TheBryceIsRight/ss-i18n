import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DiscreteSlider from '../components/DiscreteSlider';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    Retail: false,
    Restaurant: false,
    Services: false,
    Hospitality: false,
    New: false,
    Existing: false,
    Growing: false,
    Same: false,
    Next: false,
    Ingenico: false,
    Poynt: false,
    Talech: false,
    Verifone: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { Retail, Restaurant, Services, Hospitality, New, Existing, Growing, Same, Next, Ingenico, Poynt, Talech, Verifone } = state;

  return (
    <div className={classes.root}>
        <Grid container spacing={1} direction='row' alignItems='flex-start' >
          <Grid item>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Industry</FormLabel>
                <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={Retail} onChange={handleChange} name="Retail" />}
                    label="Retail"
                />
                <FormControlLabel
                    control={<Checkbox checked={Restaurant} onChange={handleChange} name="Restaurant" />}
                    label="Restaurant"
                />
                <FormControlLabel
                    control={<Checkbox checked={Services} onChange={handleChange} name="Services" />}
                    label="Services"
                />
                <FormControlLabel
                    control={<Checkbox checked={Hospitality} onChange={handleChange} name="Hospitality" />}
                    label="Hospitality"
                />
                </FormGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Business Size</FormLabel>
                <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={New} onChange={handleChange} name="New" />}
                    label="New"
                />
                <FormControlLabel
                    control={<Checkbox checked={Existing} onChange={handleChange} name="Existing" />}
                    label="Existing"
                />
                <FormControlLabel
                    control={<Checkbox checked={Growing} onChange={handleChange} name="Growing" />}
                    label="Growing"
                />
                </FormGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Settlement</FormLabel>
                <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={Same} onChange={handleChange} name="Same" />}
                    label="Same day"
                />
                <FormControlLabel
                    control={<Checkbox checked={Next} onChange={handleChange} name="Next" />}
                    label="Next Day"
                />
                </FormGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Brand</FormLabel>
                <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={Ingenico} onChange={handleChange} name="Ingenico" />}
                    label="Ingenico"
                />
                <FormControlLabel
                    control={<Checkbox checked={Poynt} onChange={handleChange} name="Poynt" />}
                    label="Poynt"
                />
                <FormControlLabel
                    control={<Checkbox checked={Talech} onChange={handleChange} name="Talech" />}
                    label="Talech"
                />
                <FormControlLabel
                    control={<Checkbox checked={Verifone} onChange={handleChange} name="Verifone" />}
                    label="Verifone"
                />
                </FormGroup>
            </FormControl>
          </Grid>
          <Grid item>
          <DiscreteSlider/>
          </Grid>
      </Grid>
    
    </div>
  );
}