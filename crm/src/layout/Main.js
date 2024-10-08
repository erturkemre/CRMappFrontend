import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import PageContent from "./PageContent";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className=" ">
      <Header />
      <div className="flex flex-col sm:flex-row sm:flex-1">
        <NavBar />
        <div className="flex-1 p-4">
          <PageContent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
