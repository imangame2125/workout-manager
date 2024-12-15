import React from "react";
import PackageList from "./pages/packageList";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import PackageDetails from "./pages/packageDetails";
import Layout from "./layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<PackageList />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
