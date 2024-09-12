import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";

const PageContent = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default PageContent;
