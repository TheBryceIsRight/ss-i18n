import React from 'react'
import useTranslation from '../hooks/useTranslation'
import { Typography } from '@material-ui/core';


const imgStyles = {
  width: '100%',
};

const Painting: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Typography variant='h2'>{t('notAPipe')}</Typography>
      <br/>
      <img src="/img/not_a_pipe.jpg" style={imgStyles} alt={t('notAPipe')}/>
    </div>
  )
}

export default Painting
