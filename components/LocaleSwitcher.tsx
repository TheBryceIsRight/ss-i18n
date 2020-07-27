import React from 'react';
import { useRouter } from 'next/router';
import { locales, languageNames } from '../translations/config';
import MenuItem from '@material-ui/core/MenuItem';
import TranslateIcon from '@material-ui/icons/Translate';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, createStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const LocaleSwitcher: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();
  

  const handleLocaleChange = React.useCallback( (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      const regex = new RegExp(`^/(${locales.join('|')})`)
      router.push(router.pathname, router.asPath.replace(regex, `/${e.target.value}`))
    },
    [router]
  )

  return ( <React.Fragment>
      <Grid container spacing={1} direction='row' alignItems='center'>
        <Grid item>
          <TranslateIcon />
        </Grid>
        <Grid item>
        {/*
        <select value={locale} onChange={handleLocaleChange}>
          {locales.map(locale => (
            <option key={locale} value={locale}>
              {languageNames[locale]}
            </option>
          ))}
        </select>
        */}

        <FormControl variant="outlined" className={classes.formControl}>
        <TextField 
          id="outlined-basic" 
          select
          variant="outlined"
          label = 'Language'
          onChange= {handleLocaleChange} 
        >
          {locales.map((locale, index) => (
            <MenuItem key={index} value={locale} >
              {languageNames[locale]}
            </MenuItem>
          ))}
        </TextField>       
        </FormControl>

        </Grid>
      </Grid>
  </React.Fragment>
  )
}

export default LocaleSwitcher
