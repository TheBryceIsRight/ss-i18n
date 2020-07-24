import React from 'react';
import { useRouter } from 'next/router';
import { locales, languageNames } from '../translations/config';
import { LocaleContext } from '../context/LocaleContext';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TranslateIcon from '@material-ui/icons/Translate';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';


const LocaleSwitcher: React.FC = () => {
  const router = useRouter()
  const { locale } = React.useContext(LocaleContext)
  

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
          <Typography variant='body1'>Language</Typography>
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
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label = {locale}
          onChange= {handleLocaleChange}
        >
          {locales.map((locale, index) =>
            <MenuItem key={index} value={locale} >{languageNames[locale]}</MenuItem>
          )}
        </Select>
        </Grid>
      </Grid>
  </React.Fragment>
  )
}

export default LocaleSwitcher
