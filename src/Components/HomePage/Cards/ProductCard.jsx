import React, { useEffect } from "react";
import "./ProductCard.css";

import { useSelector, useDispatch } from "react-redux";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import {
  getProducts,
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../../../Redux/ProductsStore";

function ProductCard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

 
  const { products, loading, error } = useSelector(
    (state) => state.Product
  );

  // cart items
  const cartItems = useSelector((state) => state.Product.cart);

  if (loading) {
    return (
      <h2 className="loading-text">
        Loading Products Details...
      </h2>
    );
  }

  if (error) {
    return (
      <h2 className="error-text">
        Error: {error}
      </h2>
    );
  }

  return (
    <div className="product-container">
      {/* Heading */}
      <div className="heading-section">
        <h2 className="heading-title">Featured Selection</h2>
      </div>

      {/* Products */}
      <div className="products-grid">
        {products.map((product) => {
          const cartItem = cartItems.find(
            (item) => item.id === product.id
          );

          return (
            <div className="product-card" key={product.id}>
              <div className="image-wrapper">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <button className="wishlist-btn">
                  <FavoriteBorderIcon />
                </button>
              </div>

              {/* Product Info */}
              <div className="product-content">
                <h3 className="product-title">
                  {product.title}
                </h3>

                {/* Price + Quantity */}
                <div className="price-quantity">
                  <h2 className="product-price">
                    ${product.price}
                  </h2>
 
                  <div className="quantity-box">
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        dispatch(decrementQuantity(product.id))
                      }
                    >
                      <RemoveIcon fontSize="small" />
                    </button>
 
                    <span className="quantity-number">
                      {cartItem ? cartItem.quantity : 0}
                    </span>
 
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        dispatch(incrementQuantity(product.id))
                      }
                    >
                      <AddIcon fontSize="small" />
                    </button>
                  </div>
                </div>

                {/* Add To Cart */}
                <button
                  className="add-cart-btn"
                  onClick={() => dispatch(addToCart(product))}
                >
                  <ShoppingBagOutlinedIcon />
                  ADD TO CART
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCard;