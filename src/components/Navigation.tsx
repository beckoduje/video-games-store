import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

export default function Navigation() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ marginRight: "auto" }}>livo</Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button variant="contained">Sign In</Button>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt="User image"
              //src="https://sfatulparintilor.ro/wp-content/uploads/2018/01/rase-de-caini-sfatulparintilor.ro-pixabay_com-alaskan-malamute-1531351_1920.jpg"
            />
            <IconButton>
              <Badge badgeContent={4} color="error">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={2}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
          <SearchIcon />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
