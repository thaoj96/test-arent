import React from "react";
import { Outlet } from "react-router-dom";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import { gui } from "../utils/gui";
import { IconScrollToTop } from "../Icons/orther";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div onClick={() => {
        // window.scrollTo(0, 0);
      }} style={{ position: "absolute", bottom: 150, right: 80, cursor: "pointer" }}><IconScrollToTop /></div>

      <Header />
      <div
        className="scroll-content"
        style={{
          height: gui.screenHeight - 193,
          backgroundColor: "#FFF",
          overflow: "auto",
          color: "#333",
          scrollbarWidth: "thin",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
