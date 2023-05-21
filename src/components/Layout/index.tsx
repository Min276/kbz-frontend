import Footer from "../Footer";
import NavBar from "../NavBar";


const Layout = ({ children }: any) => {
  return (
    <div>
        <NavBar />
          <div>{children}</div>
        <Footer />
    </div>
  );
};

export default Layout;