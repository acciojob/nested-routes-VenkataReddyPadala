import React from "react";
import { useParams, Link } from "react-router-dom";
function Category() {
  const { category } = useParams();
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/women">Women</Link>
        </li>
      </ul>
      <p>{`${category}'s Items:`}</p>
      <ul>
        <li>
          <Link to={`/${category}/shirt`}>Shirt</Link>
        </li>
        <li>
          <Link to={`/${category}/pant`}>Pant</Link>
        </li>
      </ul>
    </div>
  );
}

export default Category;
