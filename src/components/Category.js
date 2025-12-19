import React from "react";
import { useParams, Link } from "react-router-dom";

function Category() {
  const { category } = useParams();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
        </ul>
      </nav>

      <p>{`${category}'s Items:`}</p>

      <ul>
        <li>
          <Link to={`/${category}/Shirt`}>Shirt</Link>
        </li>
        <li>
          <Link to={`/${category}/Pant`}>Pant</Link>
        </li>
      </ul>
    </div>
  );
}

export default Category;
