import React from "react";
import "./Homepage.scss";

import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="Homepage__bg"></div>

      <div className="Homepage__content">
        <div className="Homepage__content-item">
          <Link to="/posts">
            <div className="container-img">
              <div className="container-img__title">
                <h2>LISTA POSTS</h2>
              </div>
              <img src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"></img>
            </div>
          </Link>
        </div>

        <div className="Homepage__content-item">
          <Link to="/posts">
            <div className="container-img">
              <div className="container-img__title">
                <h2>WORK IN PROGRESS</h2>
              </div>
              <img src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"></img>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
