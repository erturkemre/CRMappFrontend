import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const PageContent = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default PageContent;
