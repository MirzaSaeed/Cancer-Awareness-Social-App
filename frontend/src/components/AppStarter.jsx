import { Container } from "@mui/material";
import React from "react";
import LandingPage from "./core/LandingPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./core/Header";
import About from "./core/About";
import Footer from "./core/Footer";
import ContactUs from "./core/Contactus";
import Timeline from "./roles/User/Timeline";
import Username from "./roles/User/Username";
import Relationship from "./roles/User/Relationship";
import Profile from "./core/Profile";
import SelectType from "./core/SelectType";
import Account from "./core/Account";
import Navbar from "./core/Navbar";
const containerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#232B3E",
  margin: 0,
  minHeight: "100vh",
  color: "#fff",
};

const AppStarter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <LandingPage />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Header />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/contactus",
      element: (
        <>
          <Header />
          <ContactUs />
          <Footer />
        </>
      ),
    },
    {
      path: "/timeline",
      element: (
        <>
          <Navbar />
          <Timeline />
          <Footer />
        </>
      ),
    },
    {
      path: "/setUsername",
      element: (
        <>
          <Navbar />
          <Username />
          <Footer />
        </>
      ),
    },
    {
      path: "/setRelation",
      element: (
        <>
          <Navbar />
          <Relationship />
          <Footer />
        </>
      ),
    },
    {
      path: "/Profile",
      element: (
        <>
          <Navbar />
          <Profile />
          <Footer />
        </>
      ),
    },
    {
      path: "/setType",
      element: (
        <>
          <Navbar />
          <SelectType />
          <Footer />
        </>
      ),
    },
    {
      path: "/Account",
      element: (
        <>
          <Navbar />
          <Account />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <Container maxWidth="false" sx={containerStyles}>
      <RouterProvider router={router} />
    </Container>
  );
};

export default AppStarter;
