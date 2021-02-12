import React from "react";
import "./Home.css";
import Header from "../components/Header";
import About from "../components/About";
import Middle from "../components/Middle";
import TopDishes from "../components/TopDishes";
import Footer from "../components/Footer";
import "font-awesome/css/font-awesome.min.css";

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <About />
      <Middle />
      <TopDishes />
      <Footer />
    </div>
  );
}
