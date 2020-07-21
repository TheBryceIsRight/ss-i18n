import React from 'react'
import useTranslation from '../hooks/useTranslation'

const imgStyles = {
  width: '100%',
};

const Painting: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1>{t('notAPipe')}</h1>
      <img src="/img/not_a_pipe.jpg" style={imgStyles} alt={t('notAPipe')}/>
    </div>
  )
}

export default Painting
