import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DiscreteSlider from '../components/DiscreteSlider';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import useTranslation from '../hooks/useTranslation';



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

  const { t } = useTranslation();
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

  const [value, setValue] = React.useState('new');
  const [value1, setValue1] = React.useState('new');

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleChangeRadio1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue1((event.target as HTMLInputElement).value);
  };


  const { Retail, Restaurant, Services, Hospitality, Ingenico, Poynt, Talech, Verifone } = state;

  return (
        <Grid container spacing={1} direction='row' alignItems='flex-start' justify='center'>
          <Grid item>
            <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">{t('industry')}</FormLabel>
                <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={Retail} onChange={handleChange} name="Retail" />}
                    label={t('retail')}
                />
                <FormControlLabel
                    control={<Checkbox checked={Restaurant} onChange={handleChange} name="Restaurant" />}
                    label={t('restaurant')}
                />
                <FormControlLabel
                    control={<Checkbox checked={Services} onChange={handleChange} name="Services" />}
                    label={t('services')}
                />
                <FormControlLabel
                    control={<Checkbox checked={Hospitality} onChange={handleChange} name="Hospitality" />}
                    label={t('hospitality')}
                />
                </FormGroup>
            </FormControl>
          </Grid>
          <Grid item>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">{t('business_size')}</FormLabel>
                <RadioGroup aria-label="business size" name="business_size" value={value} onChange={handleChangeRadio}>
                <FormControlLabel value="New" control={<Radio />} label={t('new')} />
                <FormControlLabel value="Existing" control={<Radio />} label={t('existing')} />
                <FormControlLabel value="Growing" control={<Radio />} label={t('growing')}/>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
          <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">{t('settlement')}</FormLabel>
                <RadioGroup aria-label="settlement" name="settlement" value={value1} onChange={handleChangeRadio1}>
                <FormControlLabel value="Same" control={<Radio />} label={t('same_day')} />
                <FormControlLabel value="Next" control={<Radio />} label={t('next_day')}/>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">{t('brand')}</FormLabel>
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
          <br/>
          <Grid container spacing={4} direction='column' alignItems='center' justify='center'>
            <Grid item>
            <DiscreteSlider/>
            </Grid>
          </Grid>
          </Grid>
      </Grid>
  );
}