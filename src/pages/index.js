import React, {useEffect} from 'react';
import {navigate} from 'gatsby';

import Layout from '../components/layout';

const Index = () => {
  useEffect(() => {
    navigate("https://okdhslive.netlify.app");
  }, [])
  return (
    <Layout>
      <h1>Redirecting{/*getPeriods(counter())*/}</h1>
    </ Layout>
  )
}

export default Index;