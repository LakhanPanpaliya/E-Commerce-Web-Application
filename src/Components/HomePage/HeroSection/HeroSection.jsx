import { Box, Typography, Button } from "@mui/material";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-wrapper">
      <Box className="HeroSection">
        <Box className="hero-overlay" />
 
        <div className="content">
          <div className="collections">SS24 COLLECTION</div>

          <Typography className="hero-heading">
            Elevate Your Everyday Style
          </Typography>

          <Typography className="hero-subtitle">
            Experience the intersection of architectural precision and
            uncompromising luxury.
          </Typography>

          <Button
            variant="contained"
            className="hero-btn"
          >
            Shop Now
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default HeroSection;