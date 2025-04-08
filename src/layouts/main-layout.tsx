import React from "react";
import Container from "../components/container";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

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
