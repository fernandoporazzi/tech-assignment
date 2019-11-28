
import Header from '../header/header';

const Layout = (props) => {
  return (
    <>
      <Header />

      <main>
        {props.children}
      </main>

      <footer>
        footer
      </footer>
    </>
  );
};

export default Layout;