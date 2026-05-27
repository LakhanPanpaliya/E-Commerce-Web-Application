import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import AssessmentIcon from "@mui/icons-material/Assessment";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="left-part">
        <h2>LUXE SHOP</h2>
        <p>
          Curating the world's finest minimal design for the discerning professional.
        </p>
        <div className="footer-symbols">
          <PublicIcon />
          <AssessmentIcon />
        </div>
        <p>© 2026 Luxe Shop. All rights reserved.</p>
      </div>
      <div className="right-part">
        <div className="shop">
          <h2>Shop</h2>
          <p>Best Sellers</p>
          <p>Gift Cards</p>
          <p>New Arrivals</p>
        </div>
        <div className="support">
          <h2>SUPPORT</h2>
          <p>Contact Us</p>
          <p>Shipping Info</p>
          <p>Returns</p>
        </div>
        <div className="legal">
          <h2>LEGAL</h2>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
