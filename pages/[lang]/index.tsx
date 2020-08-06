import React from 'react'
import Layout from '../../components/Layout'
import Painting from '../../components/Painting'
import withLocale from '../../hocs/withLocale'
import Footer from '../../components/footer';


const IndexPage: React.FC = () => {
  return (
    <Layout titleKey="notAPipe">
      <Painting />
      <Footer/>
    </Layout>
  )
}

export default withLocale(IndexPage)
