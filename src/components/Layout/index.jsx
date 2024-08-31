import PropTypes from "prop-types";

import { ContextGlobalProvider } from "@context/Global";

import Header from "@components/Header";
import Footer from "@components/Footer";

const Layout = ({ children }) => {
  return (
    <ContextGlobalProvider>
      <Header />
      {children}
      <Footer />
    </ContextGlobalProvider>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
