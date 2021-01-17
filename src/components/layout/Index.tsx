import React, { FC } from 'react';
import { Header } from 'components/layout/Header';

const Layout: FC = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;
