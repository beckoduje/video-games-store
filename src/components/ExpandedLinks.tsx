import React from "react";

import { NavLink } from "react-router-dom";

import { styled, Box, Typography } from "@mui/material";

import CircleIcon from "@mui/icons-material/Circle";

import ps5icon from "../images/ps5icon.jpg";
import ps4icon from "../images/ps4icon.jpg";
import psVrIcon from "../images/ps-vr.jpg";
import psPlusIcon from "../images/ps-plus-icon.jpg";
import buyIcon from "../images/buyicon.jpg";
import ps4proIcon from "../images/ps4pro-icon.jpg";
import psBlogIcon from "../images/ps-blog.jpg";
import calendarIcon from "../images/calendar-icon.jpg";
import supportIcon from "../images/support-icon.jpg";
import psnStatusIcon from "../images/psn-status.jpg";

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
                <CircleIcon
                  sx={{
                    color: "#0072ce",
                    fontSize: "0.6rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography component="span">PlayStation Indies</Typography>
              </NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#" style={{ color: "#1f1f1f" }}>
                <CircleIcon
                  sx={{
                    color: "#0072ce",
                    fontSize: "0.6rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography component="span">PS4 games on PS5</Typography>
              </NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#" style={{ color: "#1f1f1f" }}>
                <CircleIcon
                  sx={{
                    color: "#0072ce",
                    fontSize: "0.6rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography component="span">Free to Play</Typography>
              </NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#" style={{ color: "#1f1f1f" }}>
                <CircleIcon
                  sx={{
                    color: "#0072ce",
                    fontSize: "0.6rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography component="span">Deals &#38; offers</Typography>
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
                <img src={ps4proIcon} alt="PS4" style={{ height: "55px" }} />
                <Typography
                  component="span"
                  sx={{
                    color: "#1f1f1f",
                    fontFamily: "SST, helvetica, arial, sans-serif",
                    fontSize: "1rem",
                    marginTop: "0.5rem",
                  }}
                >
                  PS4 Pro
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
                <CircleIcon
                  sx={{
                    color: "#0072ce",
                    fontSize: "0.6rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography component="span">
                  DualSense wireless controller
                </Typography>
              </NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#" style={{ color: "#1f1f1f" }}>
                <CircleIcon
                  sx={{
                    color: "#0072ce",
                    fontSize: "0.6rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography component="span">Pulse 3D headset</Typography>
              </NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#" style={{ color: "#1f1f1f" }}>
                <CircleIcon
                  sx={{
                    color: "#0072ce",
                    fontSize: "0.6rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography component="span">PS5 accessories</Typography>
              </NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#" style={{ color: "#1f1f1f" }}>
                <CircleIcon
                  sx={{
                    color: "#0072ce",
                    fontSize: "0.6rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography component="span">PlayStation VR2</Typography>
              </NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#" style={{ color: "#1f1f1f" }}>
                <CircleIcon
                  sx={{
                    color: "#0072ce",
                    fontSize: "0.6rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography component="span">PS4 accessories</Typography>
              </NavLink>
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
                <CircleIcon
                  sx={{
                    color: "#0072ce",
                    fontSize: "0.6rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography component="span">PS5 entertainment</Typography>
              </NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#" style={{ color: "#1f1f1f" }}>
                <CircleIcon
                  sx={{
                    color: "#0072ce",
                    fontSize: "0.6rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography component="span">PS4 entertainment</Typography>
              </NavLink>
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
              <NavLink
                to="#"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={psBlogIcon}
                  alt="PS blog"
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
                  PS Blog
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
                  src={calendarIcon}
                  alt="calendar icon"
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
                  This month on PlayStation
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
                <CircleIcon
                  sx={{
                    color: "#0072ce",
                    fontSize: "0.6rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography component="span">Competition Center</Typography>
              </NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#" style={{ color: "#1f1f1f" }}>
                <CircleIcon
                  sx={{
                    color: "#0072ce",
                    fontSize: "0.6rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography component="span">Accessibility</Typography>
              </NavLink>
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
              <NavLink
                to="#"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={buyIcon} alt="Buy games" style={{ height: "55px" }} />
                <Typography
                  component="span"
                  sx={{
                    color: "#1f1f1f",
                    fontFamily: "SST, helvetica, arial, sans-serif",
                    fontSize: "1rem",
                    marginTop: "0.5rem",
                  }}
                >
                  Digital Games and Services
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
                <CircleIcon
                  sx={{
                    color: "#0072ce",
                    fontSize: "0.6rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography component="span">Buy PS5 games</Typography>
              </NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#" style={{ color: "#1f1f1f" }}>
                <CircleIcon
                  sx={{
                    color: "#0072ce",
                    fontSize: "0.6rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography component="span">Buy PS4 Games</Typography>
              </NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#" style={{ color: "#1f1f1f" }}>
                <CircleIcon
                  sx={{
                    color: "#0072ce",
                    fontSize: "0.6rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography component="span">Buy PlayStation Plus</Typography>
              </NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#" style={{ color: "#1f1f1f" }}>
                <CircleIcon
                  sx={{
                    color: "#0072ce",
                    fontSize: "0.6rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography component="span">Buy PS4</Typography>
              </NavLink>
            </ExpandedLinkBottom>
            <ExpandedLinkBottom>
              <NavLink to="#" style={{ color: "#1f1f1f" }}>
                <CircleIcon
                  sx={{
                    color: "#0072ce",
                    fontSize: "0.6rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography component="span">Buy PS VR</Typography>
              </NavLink>
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
              <NavLink
                to="#"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={supportIcon}
                  alt="Support"
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
                  Support
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
                  src={psnStatusIcon}
                  alt="psn status"
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
                  PSN Status
                </Typography>
              </NavLink>
            </ExpandedLink>
          </ExpandedLinksList>
        </Box>
      )}
    </>
  );
};

export default ExpandedLinks;
