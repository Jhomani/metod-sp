import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Layout from "../layout";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
