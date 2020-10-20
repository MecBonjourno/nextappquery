import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';

import NavBar from '../../components/NavBar';
import Layout from '../../components/Layout';

import { Container } from './styles';

const Header: React.FC = () => {

  const { scrollYProgress } = useViewportScroll()

   const headerY = useTransform(scrollYProgress, [0.188, 0.198], ['0%', '-100%'])

  return (
    <Container style={{ y: headerY }}>
      <Layout>
          <NavBar />
        </Layout>
    </Container>
  );
};

export default Header;
