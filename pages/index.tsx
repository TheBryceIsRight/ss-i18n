import React from 'react'
import Head from 'next/head'
import { getInitialLocale } from '../translations/getInitialLocale'
import App from '../components/App/App';
import { BrowserRouter } from 'react-router-dom';

const Index: React.FC = () => {
  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`)
  })

  return (
        <App />
  )
}

export default Index
