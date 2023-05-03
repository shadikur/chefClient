import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import PageHeader from "../components/pageHeader/PageHeader";

const StandardPages = () => {
  return (
    <>
      <PageHeader></PageHeader>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default StandardPages;
