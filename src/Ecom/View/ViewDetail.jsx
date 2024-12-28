

// import { useParams } from "react-router-dom";
// import { products } from "../Card/data"; 
// import "./ViewDetail.css";

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const product = products.find((p) => p.id === parseInt(productId));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>{product.description}</p>
//       <img src={product.image} alt={product.name} />
//       <p>Price: ₹{product.price}</p>
//     </div>
//   );
// };

// export default ProductDetails;


// import { useParams } from "react-router-dom";
// import { products } from "../Card/data";
// import "./ViewDetail.css";

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const product = products.find((p) => p.id === parseInt(productId));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="product-container">
//       {/* Left Section */}
//       <div className="product-left">
//         <div className="product-tag">{product.name} {product.type}</div>
//         <img src={product.image} alt={product.name} className="product-image" />
//         <h2>{product.name}</h2>
//         <p className="product-plan">{product.type} Plan</p>
//         <p className="course-overview">
//           <strong>Course Overview:</strong> {product.overview}
//         </p>
//       </div>

//       {/* Right Section */}
//       <div className="product-right">
//         <h1>{product.name}</h1>
//         <p className="price">
//           <span className="original-price">₹{product.originalPrice}</span>{" "}
//           <span className="discounted-price">₹{product.price}</span>
//         </p>
//         <button className="add-to-cart">Add to Cart</button>

//         <div className="features-section">
//           <h3>Key Features</h3>
//           <ul>
//             {product.features?.map((feature, index) => (
//               <li key={index}>{feature}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;


import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Card/data";
import { useCart } from "../Cart/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import "./ViewDetail.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart, removeFromCart, cart } = useCart();

  // Find the product based on the productId from the URL
  const product = products.find((p) => p.id === parseInt(productId));
  const [activeSection, setActiveSection] = useState(null);

  const isInCart = cart.some((item) => item.id === product.id); // Check if product is in cart

  // Handle the addition of the product to the cart
  const handleCart = () => {
    if (isInCart) {
      removeFromCart(product.id); // Remove from cart if already added
    } else {
      addToCart(product); // Add to cart if not already added
      toast("Item added to cart!");
    }
  };

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <p>The product you're looking for is unavailable.</p>
      </div>
    );
  }

  // Toggle function for accordion sections
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="product-container">
      {/* Left Section */}
      <div className="product-left">
        <div className="product-tag">{product.name} {product.type}</div>
        <img src={product.image} alt={product.name} className="product-image" />
        <h2>{product.name}</h2>
        <p className="product-plan">{product.type} Plan</p>
        <p className="course-overview">
          <strong>Course Overview:</strong> {product.overview}
        </p>
      </div>

      {/* Right Section */}
      <div className="product-right">
        <h1>{product.name}</h1>
        <p className="price">
          <span className="original-price">₹{product.originalPrice}</span>{" "}
          <span className="discounted-price">₹{product.price}</span>
        </p>
        <button className="add-to-cart" onClick={handleCart}>Add to Cart</button>
        <ToastContainer />
        <div className="features-section">
          <h3>Key Features</h3>
          <ul>
            {product.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Accordion Section */}
        <div className="accordion">
          {[
            "Key Features",
            "Benefits",
            "Course Curriculum",
            "Learning Outcomes",
            "Enrollment Options",
            "Payment Methods",
            "How to Order",
            "Target Audience",
            "Technical Requirements",
            "Certification Details",
            "What is Assisted Self-Learning Program (ASLP)",
          ].map((section, index) => (
            <div key={index} className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => toggleSection(section)}
                aria-expanded={activeSection === section ? "true" : "false"}
              >
                {section}
                <span className="accordion-icon">
                  {activeSection === section ? "-" : "+"}
                </span>
              </div>
              {activeSection === section && (
                <div className="accordion-content">
                  <p>{`Details about ${section} will go here.`}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
