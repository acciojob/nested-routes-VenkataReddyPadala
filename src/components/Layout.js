import React from "react";
import { Link } from "react-router-dom";
function Layout() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="women">Women</Link>
      </li>
    </ul>
  );
}

export default Layout;
