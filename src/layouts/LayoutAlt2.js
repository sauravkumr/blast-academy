import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LayoutAlt2 = ({ children }) => (
  <React.Fragment>
    <Header className="" navPosition="right" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </React.Fragment>
);

export default LayoutAlt2;  