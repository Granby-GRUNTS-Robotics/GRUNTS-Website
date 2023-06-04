import ReactDOM from "react-dom";
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout.jsx";
// Import the Home page component
import Home from "./pages/home.jsx";
import Blog from "./pages/blog.jsx";
import About from "./pages/about.jsx";
import Sponsor from "./pages/sponsor";
import Events from "./pages/events";
import Gallery from "./pages/gallery";

import NoPage from "./pages/nopage.jsx";

// Import and apply CSS stylesheet
import "./styles/styles.css";
import "./styles/navigation.css";
import "./styles/blog.css";
//import "./styles/hero.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
