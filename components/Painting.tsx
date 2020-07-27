import React from 'react'
import useTranslation from '../hooks/useTranslation'
import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';


const imgStyles = {
  width: '100%',
};

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

const Painting: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <TypographyDemo/>
      <br/>
      <img src="/img/not_a_pipe.jpg" style={imgStyles} alt={t('notAPipe')}/>
    </div>
  )
}

export default Painting
