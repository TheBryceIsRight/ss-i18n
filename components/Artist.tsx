import React from 'react'
import useTranslation from '../hooks/useTranslation'
import {Typography} from '@material-ui/core';
import {Link} from '@material-ui/core';


const imgStyles = {
  width: '100%',
};

const Artist: React.FC = () => {
  const { locale, t } = useTranslation()
  return (
    <div>
      <Typography variant='h2'>René Magritte</Typography>
      <br/>
      <img src="/img/magritte.jpg" alt="Rene Magritte" style={imgStyles}/>
      <br/>
      <br/>
      <Typography variant='body1'>{t('bio')}</Typography>
      <Link href={`http://${locale}.wikipedia.org/wiki/René_Magritte`}>{t('readMore')}</Link>
    </div>
  )
}

export default Artist
