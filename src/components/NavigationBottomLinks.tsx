import React from "react";

import { NavLink } from "react-router-dom";

import { styled, Box, Typography } from "@mui/material";

const NavigationBottomList = styled("ul")({
  display: "flex",
  listStyle: "none",
  padding: 0,
});

const NavigationLinks = styled("li")({
  display: "flex",
  alignItems: "center",
  marginRight: "0.2rem",
  cursor: "pointer",
});

const CustomNavLink = styled(NavLink)({
  textDecoration: "none",
  color: "#1f1f1f",
  padding: "0.3rem",
  paddingLeft: "0.8rem",
  paddingRight: "0.8rem",
  borderRadius: "15px",
  backgroundColor: "white",
  transition: "all 0.2s",
  "&:hover": {
    backgroundColor: "#ebeef0",
  },
  "&.active": {
    backgroundColor: "#ebeef0",
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
        padding: 0,
      }}
    >
      <Box sx={{ position: "absolute", left: "1rem", alignSelf: "center" }}>
        <NavLink
          to="/latest"
          style={{ textDecoration: "none", color: "#1f1f1f" }}
        >
          <Typography component="h6" variant="h6">
            PlayStation Store
          </Typography>
        </NavLink>
      </Box>
      <NavigationBottomList>
        <NavigationLinks>
          <CustomNavLink
            to="/latest"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Latest
          </CustomNavLink>
        </NavigationLinks>
        <NavigationLinks>
          <CustomNavLink
            to="/negdi2"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Collections
          </CustomNavLink>
        </NavigationLinks>
        <NavigationLinks>
          <CustomNavLink
            to="/negdi3"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Deals
          </CustomNavLink>
        </NavigationLinks>
        <NavigationLinks>
          <CustomNavLink
            to="/negdi4"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            PS5
          </CustomNavLink>
        </NavigationLinks>
        <NavigationLinks>
          <CustomNavLink
            to="/negdi5"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Subscriptions
          </CustomNavLink>
        </NavigationLinks>
        <NavigationLinks>
          <CustomNavLink
            to="/negdi6"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Browse
          </CustomNavLink>
        </NavigationLinks>
      </NavigationBottomList>
    </Box>
  );
}
//className={(navData) => navData.isActive ? classes.active : ""}
