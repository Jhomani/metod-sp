import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Layout from "../Layout";

// pages
import { Home, Products } from '../pages'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}