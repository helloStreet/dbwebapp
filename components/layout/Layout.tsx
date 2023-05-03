import React, { FC } from 'react';
import { Container } from 'reactstrap';
import { iLayout } from '../../src/utils/interfaces';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout: FC<iLayout> = ({ children }) => (
  <>
    <main id="app" className="d-flex flex-column h-100" data-testid="layout">
      <NavBar />
      <Container className="flex-grow-1 mt-5">{children}</Container>
      <Footer />
    </main>
  </>
);

export default Layout;
