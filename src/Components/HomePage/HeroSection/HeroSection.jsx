import { Box, Typography, Button } from "@mui/material";
import "./HeroSection.css";

function HeroSection() {
  return (
    <Box
      className="HeroSection"
      sx={{
        position: "relative",
        maxWidth: "100%",
        height: "500px",
        backgroundImage: "url('./clothes.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      />

      {/* Content */}
      <div className="content" style={{ position: "relative", zIndex: 1 }}>
        <div className="collections">SS24 COLLECTION</div>
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: {
              xs: "1.5rem", 
              md: "4rem",  
            },
          }} 
        >
          Elevate Your Everyday Style
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Experience the intersection of architectural precision and
          uncompromising luxury.
        </Typography>
        <Button variant="contained" sx={{ mt: 3, width: "200px", p: 1.5 }}>
          Shop Now
        </Button>
      </div>
    </Box>
  );
}

export default HeroSection;
