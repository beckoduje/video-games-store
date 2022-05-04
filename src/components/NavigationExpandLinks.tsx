import React, { useState } from "react";

import { styled, Box, Button, Typography } from "@mui/material";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandedLinks from "./ExpandedLinks";

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

// const ExpandedLinksBackground = styled(Box)({
//   padding: "1rem",
//   paddingTop: "4.8rem",
//   position: "absolute",
//   top: 0,
//   left: 0,
//   backgroundColor: "red",
//   height: "0px",
//   width: "100%",
//   zIndex: 10,
//   boxShadow: "0 11px 4px 0 rgba(0, 0, 0, 0.3)",
//   "&.open": {
//     height: "200px",
//   },
// });

export default function NavigationExpandLinks(props: any) {
  const { expandLinkClickHandler, expLinksNumber } = props;
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [expLinksNumber, setExpLinksNumber] = useState<number>(0);

  // const expandLinkClickHandler = (n: number) => {
  //   if (expLinksNumber !== n) {
  //     setIsOpen(true);
  //     setExpLinksNumber(n);
  //   } else {
  //     setIsOpen(false);
  //     setExpLinksNumber(0);
  //   }
  // };

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
