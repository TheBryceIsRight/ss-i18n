import React from 'react'
import Layout from '../../components/Layout'
import Painting from '../../components/Painting'
import withLocale from '../../hocs/withLocale'
import Footer from '../../components/footer';
import FeedbackForm from '../../components/feedbackForm';


const IndexPage: React.FC = () => {
  return (
    <Layout titleKey="notAPipe">
      <Painting />
      <FeedbackForm/>
      <Footer/>
    </Layout>
  )
}

export default withLocale(IndexPage)
