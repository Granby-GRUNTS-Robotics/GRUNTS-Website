import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav">
          <li>
            <Link className="root" to="/"><h1 className="wordmark">3146</h1></Link>
          </li>
          <li className="ui">
            <Link to="/about">About</Link>
          </li>
          <li className="ui" id="blog">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="ui" id="sponsor">
            <Link to="/sponsor">Sponsors & Patrons</Link>
          </li>
          <li className="ui" id="events">
            <Link id="events" to="/events">Events</Link>
          </li>
          <li className="projects" id="gallery">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="dropdown" id="more">
            <div className="dropbtn">More▾</div>
            <div className="dropdown-content">
              <Link className="show" id="sponsor" to="/sponsor">Sponsors & Patrons</Link>
              <Link className="show" id="events" to="/events">Events</Link>
              <Link className="show" id="gallery" to="/gallery">Gallery</Link>
            </div>
          </li>
        </ul>
      </nav>
        <Outlet />
    </>
  );
};

export default Layout;
