import React from 'react';
import { useRouter } from 'next/router';
import { locales, languageNames } from '../translations/config';
import MenuItem from '@material-ui/core/MenuItem';
import TranslateIcon from '@material-ui/icons/Translate';
import useTranslation from '../hooks/useTranslation';
import Menu from '@material-ui/core/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';


const LocaleSwitcher: React.FC = () => {
  const router = useRouter();
  const { locale } = useTranslation();

  const [languageAnchorEl, setlanguageAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setlanguageAnchorEl(null);
    const { myValue } = event.currentTarget.dataset;
    console.log(myValue);
    console.log(index);
    const regex = new RegExp(`^/(${locales.join('|')})`);
    router.push(router.pathname, router.asPath.replace(regex, `/${myValue}`));
    setSelectedIndex(index);
  };

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setlanguageAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setlanguageAnchorEl(null);
  };


  // const handleLocaleChange = React.useCallback( (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
  //     const regex = new RegExp(`^/(${locales.join('|')})`)
  //     router.push(router.pathname, router.asPath.replace(regex, `/${e.target.value}`))
  //   },
  //   [router]
  // )


  return (
        <React.Fragment>
          <List component="nav" aria-label="Language settings" >
            <ListItem
              button
              aria-haspopup="true"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              onClick={handleClickListItem}
              
            >
              <ListItemIcon>
                <TranslateIcon/>
              </ListItemIcon>
              <ListItemText 
                primary={languageNames[locale]} 
                primaryTypographyProps={{color:'primary'}} />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={languageAnchorEl}
            keepMounted
            open={Boolean(languageAnchorEl)}
            onClose={handleClose}
          >
            {locales.map((option, index) => (
              <MenuItem
                key={option}
                data-my-value={[option]}
                id={languageNames[option]}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {languageNames[option]}
              </MenuItem>
            ))}
          </Menu>
        </React.Fragment> 
        
  )
}

export default LocaleSwitcher
