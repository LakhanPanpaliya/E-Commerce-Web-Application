import * as React from "react";
import "./Header.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "#",
  },
  {
    name: "Order",
    path: "/order",
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
 
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // CLOSE USER MENU
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
 
  const cart = useSelector((state) => state.Product.cart);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <AppBar position="sticky" className="header" elevation={1}>
      <Toolbar className="header-toolbar">
        {/* logo */}

        <Typography className="logo">
          <NavLink to="/" className="logo-link">
            LUXE SHOP
          </NavLink>
        </Typography>

        {/* DESKTOP  */}

        <div className="nav-links">
          {pages.map((page) => (
            <NavLink
              key={page.name}
              to={page.path}
              onClick={(e) => {
                if (page.name === "About") {
                  e.preventDefault();
                }
              }}
              className="nav-link"
              style={{
                fontWeight:"500",
                color: page.name === "About" ? "rgba(8, 8, 8, 0.9)" : "",
              }}
            >
              {page.name}
            </NavLink>
          ))}
        </div>

        {/* right side */}

        <div className="header-icons">
          <IconButton>
            <SearchIcon sx={{ color: "black" }} />
          </IconButton>
          <NavLink to="/order" className="cart-link">
            <Badge badgeContent={totalQuantity} color="error">
              <ShoppingCartIcon sx={{ color: "black" }} />
            </Badge>
          </NavLink>

          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar />
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                {setting}
              </MenuItem>
            ))}
          </Menu>

          {/* mobile view */}

          <div className="mobile-menu">
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <NavLink
                    to={page.path}
                    onClick={(e) => {
                      if (page.name === "About") {
                        e.preventDefault();
                      }
                    }}
                    className="mobile-nav-link"
                    style={{
                      color: page.name === "About" ? "rgba(0, 0, 0, 0.6)" : "",
                    }}
                  >
                    {page.name}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
