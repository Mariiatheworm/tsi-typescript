import Container from "../components/Container";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="w-full font-inter">
      <Header />

      <Container>
        <Outlet />
      </Container>

      <Footer />
    </div>
  );
};

export default MainLayout;
