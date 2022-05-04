import React, { useState } from "react";
import { styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Link from "@mui/material/Link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../images/playstation-logo.png";
import NavigationExpandLinks from "./NavigationExpandLinks";
import NavigationBottomLinks from "./NavigationBottomLinks";
import ExpandedLinks from "./ExpandedLinks";
import Collapse from "@mui/material/Collapse";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [expLinksNumber, setExpLinksNumber] = useState<number>(0);

  const expandLinkClickHandler = (n: number) => {
    if (expLinksNumber !== n) {
      setIsOpen(true);
      setExpLinksNumber(n);
    } else {
      setIsOpen(false);
      setExpLinksNumber(0);
    }
  };

  const BottomToolbar = styled(Toolbar)({
    minHeight: "unset",
    width: "100vw",
  });

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white", padding: 0 }}>
      <Toolbar sx={{ paddingRight: { sm: 0 }, paddingLeft: { sm: 0 } }}>
        <Box sx={{ marginRight: "auto", display: "flex" }}>
          <Link
            href="https://www.playstation.com/"
            underline="none"
            sx={{ display: "flex", alignItems: "center", zIndex: 20 }}
          >
            <img src={logo} alt="Play Station" style={{ height: "50px" }} />
          </Link>
          <NavigationExpandLinks
            expandLinkClickHandler={expandLinkClickHandler}
            expLinksNumber={expLinksNumber}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", zIndex: 20 }}>
          <Button variant="contained">Sign In</Button>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt="User image"
              src="https://sfatulparintilor.ro/wp-content/uploads/2018/01/rase-de-caini-sfatulparintilor.ro-pixabay_com-alaskan-malamute-1531351_1920.jpg"
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
      <Box sx={{ position: "relative" }}>
        <Collapse
          in={isOpen}
          sx={{
            backgroundColor: "white",
            position: "absolute",
            zIndex: 15,
            width: "100%",
            boxShadow: "0 11px 4px 0 rgba(0, 0, 0, 0.3)",
          }}
        >
          <ExpandedLinks isOpen={isOpen} expLinksNumber={expLinksNumber} />
        </Collapse>
      </Box>
      <BottomToolbar sx={{ paddingRight: { sm: 0 }, paddingLeft: { sm: 0 } }}>
        <NavigationBottomLinks />
      </BottomToolbar>
    </AppBar>
  );
}
