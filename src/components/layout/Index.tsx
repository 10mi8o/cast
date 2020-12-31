import { Header } from 'components/layout/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;
