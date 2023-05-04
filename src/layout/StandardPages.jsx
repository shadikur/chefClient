import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import PageHeader from "../components/pageHeader/PageHeader";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const StandardPages = () => {
  return (
    <>
      <PageHeader></PageHeader>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default StandardPages;
