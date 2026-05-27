import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { setView } from "../../../Redux/NavigationSlice";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSelector,useDispatch } from "react-redux";
import { removeFromCart ,incrementQuantity,decrementQuantity} from "../../../Redux/ProductsStore";
import "./CardItems.css";
function CardItems() {
  // const products = [
  //   {
  //     id: 1,
  //     title: "Velocity Kinetic",
  //     desc: "High-performance athletic footwear for urban life.",
  //     price: "$145.00",
  //     img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  //   },
  //   {
  //     id: 2,
  //     title: "Aura Chrono",
  //     desc: "Precision engineered timepiece with titanium casing.",
  //     price: "$299.00",
  //     img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  //   },
  //   {
  //     id: 3,
  //     title: "Sonic Pure Pro",
  //     desc: "Active noise cancelling with 40-hour battery life.",
  //     price: "$380.00",
  //     img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  //   },
  // ];
const dispatch = useDispatch();
   const cartItems = useSelector(
    (state) => state.Product.cart
  ); 

// SUBTOTAL OF SINGLE PRODUCT
function getSubTotal(price, quantity) {
  // const cleanPrice = Number(price.replace("$", ""));
  return Number(price * quantity).toFixed(2);
}

// TOTAL QUANTITY OF PRODUCTS
function getTotalQuantity() {
  return Number(cartItems.reduce((total, item) => total + item.quantity,0).toFixed(2));
}


// TOTAL SUM OF ALL PRODUCTS
function getTotalSum() {
  return cartItems.reduce((total, item) => {
    // const cleanPrice = Number(
    //   item.price.replace("$", "")
    // );
    return Number((total + item.price * item.quantity).toFixed(2));
  }, 0);
}


// 10% TAX
function getEstimatedTax() {
  
  return  Number((getTotalSum() * 0.10).toFixed(2));  
}

function getTotalSumAfterTax(){
  let result =  (getTotalSum() + getEstimatedTax()).toFixed(2);
  return Number(result);
}
 
 
 
  return (
    <div className="shoopingCarddiv">
      <div className="addedProduct">
        {cartItems.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <div className="left-side">
                <div className="info">
                  <div className="imgShoppingcard">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="infor">
                    <div className="produ-info">
                      <h3>{product.title}</h3>
                      <p>{product.description.slice(0,150)}</p>
                    </div>

                    <div className="ternaryOperator">
                      <RemoveIcon onClick = {() => dispatch(decrementQuantity(product.id))}/>
                      <p>{product.quantity}</p>
                      <AddIcon onClick = {() => dispatch(incrementQuantity(product.id))}/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right-side">
                <h3>$ {product.price}</h3>

                <div className="subtotal-delete">
                  <div className="subtotal">
                    <p>Subtotal</p>
                    <h4>$ {getSubTotal(product.price,product.quantity)} </h4>
                    {/* {Number(product.price * product.quantity)}  */}
                  </div>
                  <DeleteIcon className="deleteIcon" onClick = {() => dispatch(removeFromCart(product.id))} />
                </div>
              </div>
            </div>
          );
        })}
        <div className="goToHomePage" onClick={() => dispatch(setView("Inventory"))} >
          <ArrowBackIcon />
          <p onClick={() => dispatch(setView("Inventory"))}  > Continue Shopping</p>
        </div>
      </div>

{/* billing section  */}
      <div className="billingSection">
        <h1>Order Summary</h1>
        <div className="bill-items">
          <div className="subHeading">
            {/* get the total count  */}
            <p>Items ({getTotalQuantity()})</p>
            <p>Shipping</p>
            <p>Estimated Tax</p>
          </div>
          <div className="details">
            <p>${getTotalSum()}</p>
            <p>Free</p>
            <p>${getEstimatedTax().toFixed(2)}</p>
          </div>
        </div>
        <hr />
        {/* total */}
        <div className="total">
            <h3>Total</h3> 
            <h3>${getTotalSumAfterTax()}</h3>
        </div>
        <button className="chekoutBtn">Proceed To checkout <ShoppingBagIcon fontSize="medium"/> </button>

        {/* promo code  */}
        <div className="promocode">
            <p>Promo Code</p>
            <input type="text" placeholder="Promo code" />
            <button className="promoApply">Apply</button>
        </div>
      </div>
    </div>
  );
}

export default CardItems;
