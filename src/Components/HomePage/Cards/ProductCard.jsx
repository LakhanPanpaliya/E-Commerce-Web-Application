import React from "react";

import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  Stack,
} from "@mui/material";

import { useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { getProducts } from "../../../Redux/ProductsStore";
import { useSelector, useDispatch } from "react-redux";

import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  fetchPending,
  fetchSuccess,
  fetchError,
} from "../../../Redux/ProductsStore";

function ProductCard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  // products
  const { products, loading, error } = useSelector((state) => state.Product);

  // cart items
  const cartItems = useSelector((state) => state.Product.cart);

  return (
    <Container maxWidth="xl" sx={{ mt: 7, ml: 26 }}>
      {/* Heading */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 6,
        }}
      >
        <Typography
          // variant="h3"
          fontWeight="bold" 
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize :"32px",
            fontWeight: "550",
          }}
        >
          Featured Selection
        </Typography>
      </Box>

      {/* Products  */}
      <Grid container spacing={3}>
        {products.map((product) => {
          // check product
          const cartItem = cartItems.find((item) => item.id === product.id);

          return (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card
                sx={{
                  borderRadius: "20px",
                  p: 2,
                  boxShadow: 3,
                  width: "325px",
                  height: "520px",
                  transition: "0.3s",

                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                {/* Image */}
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{
                      height: 250,
                      borderRadius: "15px",
                      objectFit: "contain",
                    }}
                  />

                  {/* like btn */}
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      backgroundColor: "white",
                      // color:'red'
                      // :onHover
                      "&:hover": {
                        bgcolor: "red",
                        opacity: [0.9, 0.8, 0.7],
                        color: "white",
                      },
                    }}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                </Box>

                {/* Product information*/}
                <CardContent sx={{ px: 0 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2, //added this for the if title is bigger than two line then hide it using ....
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      height: "60px",
                    }}
                  >
                    {product.title}
                  </Typography>

                  {/* <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    {product.description}
                  </Typography> */}

                  {/* Price and  Quantity */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 3,
                    }}
                  >
                    {/* Price */}
                    <Typography variant="h5" fontWeight="bold" color="primary">
                      ${product.price}
                    </Typography>

                    {/* Quantity */}
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      sx={{
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        px: 1,
                      }}
                    >
                      {/* Minus */}
                      <IconButton
                        size="small"
                        onClick={() => dispatch(decrementQuantity(product.id))}
                      >
                        <RemoveIcon />
                      </IconButton>

                      {/* Quantity */}
                      <Typography sx={{ pt: 0.8 }}>
                        {cartItem ? cartItem.quantity : 0}
                      </Typography>

                      {/* Plus */}
                      <IconButton
                        size="small"
                        onClick={() => dispatch(incrementQuantity(product.id))}
                      >
                        <AddIcon />
                      </IconButton>
                    </Stack>
                  </Box>

                  {/* add to card */}
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<ShoppingBagOutlinedIcon />}
                    onClick={() => dispatch(addToCart(product))}
                    sx={{
                      mt: 3,
                      py: 1.5,
                      borderRadius: "10px",
                      bgcolor: "#091426",
                    }}
                  >
                    ADD TO CART
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default ProductCard;
