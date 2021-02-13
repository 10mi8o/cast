import React, { FC, useState } from 'react';
import { Header } from 'components/layout/Header';
import { Menu } from 'components/layout/Nav/Menu';
import { Footer } from 'components/layout/Footer';

//https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
const Layout: FC = ({ children }): JSX.Element => {
  const [openMenuFlg, setOpenMenuFlg] = useState(false);

  const openFlg = () => {
    setOpenMenuFlg(!openMenuFlg);
  };

  return (
    <>
      <Header open={openMenuFlg} openFlg={openFlg} />
      <Menu open={openMenuFlg} setOpen={setOpenMenuFlg} />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
