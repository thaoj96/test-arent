import React from "react";
import { Outlet } from "react-router-dom";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import { gui } from "../utils/gui";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <div
        style={{
          height: gui.screenHeight - 193,
          backgroundColor: "#FFF",
          overflow: "hidden",
          color: "#333",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;