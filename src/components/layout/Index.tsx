import React, { FC, useState } from 'react';
import { Header } from 'components/layout/Header';
import { Footer } from 'components/layout/Footer';
import { Menu } from 'components/layout/Nav/Menu';

//https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
const Layout: FC = ({ children }): JSX.Element => {
  const [openMenuFlg, setOpenMenuFlg] = useState(false);

  const openFlg = () => {
    setOpenMenuFlg(!openMenuFlg);
  };

  return (
    <>
      <div className={openMenuFlg ? 'fixed' : 'relative'}>
        <Header open={openMenuFlg} openFlg={openFlg} />
        <Menu open={openMenuFlg} setOpen={setOpenMenuFlg} />
        <div className="container">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
