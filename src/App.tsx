import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import KBZMoneyAlerts from "./components/KBZMoneyAlerts";

function App() {
  return (
    <Layout>
      <HeroSection />
      <KBZMoneyAlerts />
    </Layout>
  );
}

export default App;
