import React from "react";

import { NavLink } from "react-router-dom";

import { styled, Box } from "@mui/material";

const NavigationBottomList = styled("ul")({
  display: "flex",
  listStyle: "none",
  padding: 0,
});

const NavigationLinks = styled("li")({
  display: "flex",
  alignItems: "center",
  marginRight: "1.8rem",
  cursor: "pointer",
  "& > a": {
    textDecoration: "none",
    color: "white",
  },
});

export default function NavigationBottomLinks() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        width: "100%",
      }}
    >
      <Box sx={{ position: "absolute", left: "1rem", alignSelf: "center" }}>
        <NavLink to="/home" style={{ textDecoration: "none", color: "white" }}>
          PlayStation Store
        </NavLink>
      </Box>
      <NavigationBottomList>
        <NavigationLinks>
          <NavLink to="#">Latest</NavLink>
        </NavigationLinks>
        <NavigationLinks>
          <NavLink to="#">Collections</NavLink>
        </NavigationLinks>
        <NavigationLinks>
          <NavLink to="#">Deals</NavLink>
        </NavigationLinks>
        <NavigationLinks>
          <NavLink to="#">PS5</NavLink>
        </NavigationLinks>
        <NavigationLinks>
          <NavLink to="#">Subscriptions</NavLink>
        </NavigationLinks>
        <NavigationLinks>
          <NavLink to="#">Browse</NavLink>
        </NavigationLinks>
      </NavigationBottomList>
    </Box>
  );
}
