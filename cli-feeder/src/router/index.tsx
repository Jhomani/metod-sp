import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Layout from "../Layout";

import { Home, Products, Product, Informe } from '../pages'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/informe" element={<Informe />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:name" element={<Product />} />
        </Routes>
      </Layout>
    </Router>
  );
}
