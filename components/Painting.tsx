import React from 'react'
import useTranslation from '../hooks/useTranslation'
import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

function TypographyDemo(props: { loading?: boolean }) {
  const { loading = false } = props;
  const { t } = useTranslation()
  return (
    <div>
      <Typography component="div" variant='h2'>
        {loading ? <Skeleton /> : t('notAPipe')}
      </Typography>
    </div>
  );
}

function TypographyRectDemo(props: { loading?: boolean }) {
  const { loading = false } = props;
  const { t } = useTranslation()
  return (
    <div>
      <Typography component="div" variant='h2'>
        {loading ? <Skeleton  variant="rect" width={210} height={118} />
         : <img src="/img/not_a_pipe.jpg" style={imgStyles} alt={t('notAPipe')}/>}
      </Typography>
    </div>
  );
}

const imgStyles = {
  width: '100%',
};

const Painting: React.FC = () => {

  return (
    <div>
      <TypographyDemo />
      <br/>  
      <TypographyRectDemo />

    </div>
  )
}

export default Painting
