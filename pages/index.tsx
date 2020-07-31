import React from 'react'
import { getInitialLocale } from '../translations/getInitialLocale'
import App from '../components/App/App';


const Index: React.FC = () => {
  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`)
  })

  return (
      <App />
  )
}

export default Index
