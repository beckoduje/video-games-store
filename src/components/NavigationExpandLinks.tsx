import React, { useState } from "react";

import { styled, Box, Button, Typography } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NavigationExpandList = styled("ul")({
  display: "flex",
  listStyle: "none",
  padding: 0,
});

const NavigationLinks = styled("li")({
  display: "flex",
  alignItems: "center",
  listStyle: "none",
  padding: 0,
  marginRight: "1rem",
  cursor: "pointer",
  color: "#757575",
  fontSize: "1rem",
});

const NavButton = styled(Button)({
  color: "inherit",
  textTransform: "capitalize",
  padding: 0,
  display: "block",
  minWidth: "unset",
  "& > span": {
    display: "none",
  },
});

export default function NavigationExpandLinks(props: any) {
  const { expandLinkClickHandler, expLinksNumber } = props;

  return (
    <>
      <NavigationExpandList>
        <NavigationLinks onClick={() => expandLinkClickHandler(1)}>
          <NavButton>Games</NavButton>
          <ExpandMoreIcon
            sx={{
              transition: "all 0.2s",
              transform: () => (expLinksNumber === 1 ? "rotate(180deg)" : ""),
            }}
          />
        </NavigationLinks>
        <NavigationLinks onClick={() => expandLinkClickHandler(2)}>
          <NavButton>Hardware</NavButton>
          <ExpandMoreIcon
            sx={{
              transition: "all 0.2s",
              transform: () => (expLinksNumber === 2 ? "rotate(180deg)" : ""),
            }}
          />
        </NavigationLinks>
        <NavigationLinks onClick={() => expandLinkClickHandler(3)}>
          <NavButton>Services</NavButton>
          <ExpandMoreIcon
            sx={{
              transition: "all 0.2s",
              transform: () => (expLinksNumber === 3 ? "rotate(180deg)" : ""),
            }}
          />
        </NavigationLinks>
        <NavigationLinks onClick={() => expandLinkClickHandler(4)}>
          <NavButton>News</NavButton>
          <ExpandMoreIcon
            sx={{
              transition: "all 0.2s",
              transform: () => (expLinksNumber === 4 ? "rotate(180deg)" : ""),
            }}
          />
        </NavigationLinks>
        <NavigationLinks onClick={() => expandLinkClickHandler(5)}>
          <NavButton>Shop</NavButton>
          <ExpandMoreIcon
            sx={{
              transition: "all 0.2s",
              transform: () => (expLinksNumber === 5 ? "rotate(180deg)" : ""),
            }}
          />
        </NavigationLinks>
        <NavigationLinks onClick={() => expandLinkClickHandler(6)}>
          <NavButton>Support</NavButton>
          <ExpandMoreIcon
            sx={{
              transition: "all 0.2s",
              transform: () => (expLinksNumber === 6 ? "rotate(180deg)" : ""),
            }}
          />
        </NavigationLinks>
      </NavigationExpandList>
    </>
  );
}
