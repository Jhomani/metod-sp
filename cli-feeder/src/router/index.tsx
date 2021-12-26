import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Layout from "../Layout";

// pages
import { Home, Products, Product } from '../pages'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:name" element={<Product />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}