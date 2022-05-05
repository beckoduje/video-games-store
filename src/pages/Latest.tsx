import React from "react";

import { NavLink } from "react-router-dom";

import hotDealsImage from "../images/hot-deals.jpg";
import { Box, Typography, Button, styled } from "@mui/material";

export default function Latest() {
  const SeeMoreButton = styled(Button)({
    backgroundColor: "#0070cc",
    padding: "1rem",
    paddingTop: "0.2rem",
    paddingBottom: "0.2rem",
    borderRadius: "20px",
    boxShadow: "none",
    color: "white",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#005499",
      boxShadow: "none",
    },
  });
  return (
    <section>
      <Box
        sx={{
          height: "98vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.12)",
        }}
      >
        <Box
          sx={{
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          <Box
            component="img"
            sx={{
              height: "390px",
              width: "100vw",
              marginBottom: "1rem",
            }}
            src={hotDealsImage}
            alt="hot deals"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "2rem",
              paddingLeft: "4rem",
              paddingRight: "4rem",
            }}
          >
            <Typography
              component="h6"
              sx={{
                textTransform: "uppercase",
                color: "#363636",
                fontSize: "1.2rem",
              }}
            >
              Hot deals
            </Typography>
            <SeeMoreButton variant="contained">
              <NavLink
                to="#"
                style={{ textDecoration: "none", color: "white" }}
              >
                See more
              </NavLink>
            </SeeMoreButton>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
