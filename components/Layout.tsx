import React from 'react';
import Head from 'next/head';
import {Container} from '@material-ui/core';
import {ToolBar} from './Toolbar';

const Layout: React.FC = ({children}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <ToolBar/>
      <Container>
        {children}
      </Container>
    </>
  );
}

export default Layout;
