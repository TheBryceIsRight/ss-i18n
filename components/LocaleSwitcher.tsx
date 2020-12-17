import React from 'react';
import { useRouter } from 'next/router';
import { locales, languageNames } from '../translations/config';
import MenuItem from '@material-ui/core/MenuItem';
import TranslateIcon from '@material-ui/icons/Translate';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, createStyles } from '@material-ui/core/styles'
import useTranslation from '../hooks/useTranslation';
import InputAdornment from '@material-ui/core/InputAdornment';


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
  const { t } = useTranslation();


  const handleLocaleChange = React.useCallback( (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      const regex = new RegExp(`^/(${locales.join('|')})`)
      router.push(router.pathname, router.asPath.replace(regex, `/${e.target.value}`))
    },
    [router]
  )

  return ( 
        <FormControl 
        aria-haspopup="true" 
        variant="outlined" 
        className={classes.formControl}
        aria-label='change the language' 
        role='button'>
        <TextField 
          select
          variant="outlined"
          label = {t('language')}
          onChange= {handleLocaleChange} 
          InputProps={{
            startAdornment: <InputAdornment position="start"><TranslateIcon/> </InputAdornment>,
        }} 
        >
          {locales.map((locale, index) => (
            <MenuItem key={index} value={locale} id={languageNames[locale]}>
              {languageNames[locale]}
            </MenuItem>
          ))}
        </TextField>       
        </FormControl>
  )
}

export default LocaleSwitcher
