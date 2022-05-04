import React from "react";

import { NavLink } from "react-router-dom";

import { styled, Box, Typography } from "@mui/material";

import ps5icon from "../images/ps5icon.jpg";
import ps4icon from "../images/ps4icon.jpg";
import psVrIcon from "../images/ps-vr.jpg";
import psPlusIcon from "../images/ps-plus-icon.jpg";
import buyIcon from "../images/buyicon.jpg";

const ExpandedLinksList = styled("ul")({
  display: "flex",
  listStyle: "none",
  padding: 0,
});

const ExpandedLink = styled("li")({
  display: "flex",
  alignItems: "center",
  padding: "2rem",
  paddingLeft: "3rem",
  paddingRight: "3rem",
  cursor: "pointer",
  "& > a": {
    textDecoration: "none",
    color: "white",
  },
});

const ExpandedLinkBottom = styled("li")({
  display: "flex",
  alignItems: "center",
  marginRight: "1.8rem",
  cursor: "pointer",
  "& > a": {
    textDecoration: "none",
    color: "white",
  },
});

const ExpandedLinks = (props: any) => {
  const { isOpen, expLinksNumber } = props;

  return (
    <>
      {isOpen && expLinksNumber === 1 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 20,
          }}
        >
          <ExpandedLinksList>
            <ExpandedLink>
              <NavLink
                to="#"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={ps5icon} alt="PS5" style={{ height: "55px" }} />
                <Typography
                  component="span"
                  sx={{
                    color: "#1f1f1f",
                    fontFamily: "SST, helvetica, arial, sans-serif",
                    fontSize: "1rem",
                    marginTop: "0.5rem",
                  }}
                >
                  PS5
                </Typography>
              </NavLink>
            </ExpandedLink>
            <ExpandedLink>
              <NavLink
                to="#"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={ps4icon} alt="PS4" style={{ height: "55px" }} />
                <Typography
                  component="span"
                  sx={{
                    color: "#1f1f1f",
                    fontFamily: "SST, helvetica, arial, sans-serif",
                    fontSize: "1rem",
                    marginTop: "0.5rem",
                  }}
                >
                  PS4
                </Typography>
              </NavLink>
            </ExpandedLink>
            <ExpandedLink>
              <NavLink
                to="#"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={psVrIcon} alt="PS-VR" style={{ height: "55px" }} />
                <Typography
                  component="span"
                  sx={{
                    color: "#1f1f1f",
                    fontFamily: "SST, helvetica, arial, sans-serif",
                    fontSize: "1rem",
                    marginTop: "0.5rem",
                  }}
                >
                  PS VR
                </Typography>
              </NavLink>
            </ExpandedLink>
            <ExpandedLink>
              <NavLink
                to="#"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={psPlusIcon}
                  alt="PS Plus"
                  style={{ height: "55px" }}
                />
                <Typography
                  component="span"
                  sx={{
                    color: "#1f1f1f",
                    fontFamily: "SST, helvetica, arial, sans-serif",
                    fontSize: "1rem",
                    marginTop: "0.5rem",
                  }}
                >
                  PS Plus
                </Typography>
              </NavLink>
            </ExpandedLink>
            <ExpandedLink>
              <NavLink
                to="#"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={buyIcon} alt="PS Plus" style={{ height: "55px" }} />
                <Typography
                  component="span"
                  sx={{
                    color: "#1f1f1f",
                    fontFamily: "SST, helvetica, arial, sans-serif",
                    fontSize: "1rem",
                    marginTop: "0.5rem",
                  }}
                >
                  Buy games
                </Typography>
              </NavLink>
            </ExpandedLink>
          </ExpandedLinksList>
          <ExpandedLinksList
            sx={{
              borderTop: "1px solid #ccc",
              width: "100%",
              justifyContent: "center",
              padding: "1.5rem",
            }}
          >
            <ExpandedLinkBottom>
              <NavLink to="#" style={{ color: "#1f1f1f" }}>
                PlayStation Indies
              </NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#" style={{ color: "#1f1f1f" }}>
                PS4 games on PS5
              </NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#" style={{ color: "#1f1f1f" }}>
                Free to Play
              </NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#" style={{ color: "#1f1f1f" }}>
                Deals &#38; offers
              </NavLink>
            </ExpandedLinkBottom>
          </ExpandedLinksList>
        </Box>
      )}
      {isOpen && expLinksNumber === 2 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 20,
          }}
        >
          <ExpandedLinksList>
            <ExpandedLink>
              <NavLink to="#">PS5</NavLink>
            </ExpandedLink>
            <ExpandedLink>
              <NavLink to="#">PS4</NavLink>
            </ExpandedLink>
            <ExpandedLink>
              <NavLink to="#">PS4 Pro</NavLink>
            </ExpandedLink>
            <ExpandedLink>
              <NavLink to="#">PS VR</NavLink>
            </ExpandedLink>
          </ExpandedLinksList>
          <ExpandedLinksList>
            <ExpandedLinkBottom>
              <NavLink to="#">DualSense wireless controller</NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#">Pulse 3D headset</NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#">PS5 accessories</NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#">PlayStation VR2</NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#">PS4 accessories</NavLink>
            </ExpandedLinkBottom>
          </ExpandedLinksList>
        </Box>
      )}
      {isOpen && expLinksNumber === 3 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 20,
          }}
        >
          <ExpandedLinksList>
            <ExpandedLink>
              <NavLink to="#">PS Plus</NavLink>
            </ExpandedLink>
          </ExpandedLinksList>
          <ExpandedLinksList>
            <ExpandedLinkBottom>
              <NavLink to="#">PS5 entertainment</NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#">PS4 entertainment</NavLink>
            </ExpandedLinkBottom>
          </ExpandedLinksList>
        </Box>
      )}
      {isOpen && expLinksNumber === 4 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 20,
          }}
        >
          <ExpandedLinksList>
            <ExpandedLink>
              <NavLink to="#">PS Blog</NavLink>
            </ExpandedLink>
            <ExpandedLink>
              <NavLink to="#">This month on PlayStation</NavLink>
            </ExpandedLink>
          </ExpandedLinksList>
          <ExpandedLinksList>
            <ExpandedLinkBottom>
              <NavLink to="#">Competition Center</NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#">Accessibility</NavLink>
            </ExpandedLinkBottom>
          </ExpandedLinksList>
        </Box>
      )}
      {isOpen && expLinksNumber === 5 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 20,
          }}
        >
          <ExpandedLinksList>
            <ExpandedLink>
              <NavLink to="#">Digital Games and Services</NavLink>
            </ExpandedLink>
          </ExpandedLinksList>
          <ExpandedLinksList>
            <ExpandedLinkBottom>
              <NavLink to="#">Buy PS5 games</NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#">Buy PS4 Games</NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#">Buy PlayStation Plus</NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#">Buy PS4</NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#">Buy PS VR</NavLink>
            </ExpandedLinkBottom>
          </ExpandedLinksList>
        </Box>
      )}
      {isOpen && expLinksNumber === 6 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 20,
          }}
        >
          <ExpandedLinksList>
            <ExpandedLink>
              <NavLink to="#">Support</NavLink>
            </ExpandedLink>
            <ExpandedLink>
              <NavLink to="#">PSN Status</NavLink>
            </ExpandedLink>
          </ExpandedLinksList>
        </Box>
      )}
    </>
  );
};

export default ExpandedLinks;
