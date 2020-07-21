import React from 'react'
import Link from 'next/link'
import useTranslation from '../hooks/useTranslation'
import LocaleSwitcher from './LocaleSwitcher'
import {Typography} from '@material-ui/core';


const Navigation = () => {
  const { locale, t } = useTranslation()

  return (
    <ul className="root">
      
      <li>
        <LocaleSwitcher />
      </li>
      <li>
      <Typography variant='body1'>
        <Link href="/[lang]" as={`/${locale}`}>
          <a>{t('painting')}</a>
        </Link>
        </Typography>
      </li>
      <li>
        <Typography variant='body1'>
        <Link href="/[lang]/artist" as={`/${locale}/artist`}>
          <a>{t('artist')}</a>
        </Link>
        </Typography>
      </li>
      <style jsx>{`
        .root {
          margin: 1rem 0 1rem 0;
          padding: 0;
          display: flex;
          list-style: none;
        }
        .root > li:not(:last-child) {
          margin-right: 1rem;
        }
        a:link,
        a:visited {
          text-decoration: none;
          color: white;
          text-transform: uppercase;
        }
        a:hover {
          text-decoration: underline;
          color: #B5CDFD
        }
      `}</style>
    </ul>
  )
}

export default Navigation
