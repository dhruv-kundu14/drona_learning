// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { products } from "../Card/data"; // Import the product data

// const ProductDetails = () => {
//   const { productId } = useParams(); // Get the product ID from the URL
//   const product = products.find((p) => p.id === parseInt(productId)); // Find the product
//   const navigate = useNavigate();

//   if (!product) {
//     return <h2>Product not found!</h2>;
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <button onClick={() => navigate(-1)} style={{ marginBottom: "20px" }}>
//         Go Back
//       </button>
//       <h1>{product.name}</h1>
//       <img
//         src={product.image}
//         alt={product.name}
//         style={{ width: "300px", height: "300px", objectFit: "cover" }}
//       />
//       <h2>Price: {product.price}</h2>
//       <p>{product.description}</p>
//       <h3>Course Type: {product.course}</h3>
//       <h3>Product Type: {product.type}</h3>
//     </div>
//   );
// };

// export default ProductDetails;


import { useParams } from "react-router-dom";
import { products } from "../Card/data"; // Import the product data

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
      <p>Price: ₹{product.price}</p>
    </div>
  );
};

export default ProductDetails;
