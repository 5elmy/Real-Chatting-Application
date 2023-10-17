import React from "react";
import { useTheme, styled } from "@mui/material/styles";
import logo from "../../assets/Images/logo.ico";
import {
  Stack,
  Box,
  IconButton,
  Divider,
  Avatar,
  Switch,
  Menu,
  MenuItem,
} from "@mui/material";
import { Nav_Buttons, Profile_Menu } from "../../data/index.js";
import { Gear } from "phosphor-react";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings.js";
import { NavLink, useNavigate } from "react-router-dom";

const getPath = (index) => {
  switch (index) {
    case 0:

      return "/app"
    case 1:
      return "/group"

    case 2:

      return "/calling"
    case 3:

      return "/settings"

    default:

  }
}

const getMenu=(index)=>{
  switch (index) {
    case 0: return "/profile"
    case 1: return "/settings"
    case 2:
      //update token and isauthenticated is false 
    return "/auth/login"
      
   
  
    default:
      break;
  }
}

export default function SideBar() {
  const [selected, setSelected] = useState(0);
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  console.log(theme);



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 20,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(20px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 16,
      height: 16,
      borderRadius: 9,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 20 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px  0px 2px rgba(0,0,0,.25)",
          height: "100vh",
          width: "70px",
        }}
      >
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ height: "100%" }}
          spacing={3}
        >
          <Stack direction={"column"} alignItems={"center"} spacing={3}>
            <Box
              p={1}
              sx={{
                backgroundColor: theme.palette.info.dark,
                height: "54px",
                width: "54px",
                borderRadius: 1.5,
              }}
            >
              <img src={logo} alt="Chat App" />
            </Box>

            <Stack
              sx={{ width: "max-content" }}
              direction={"column"}
              alignItems={"center"}
              spacing={3}
            >
              {Nav_Buttons.map((ele) => {
                return ele.index === selected ? (
                  <Box
                    key={ele.index}
                    sx={{
                      backgroundColor: theme.palette.info.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton sx={{ width: "max-content", color: "#fff" }}>
                      {" "}
                      {ele.icon}{" "}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => {
                      setSelected(ele.index);
                      navigate(getPath(ele.index))
                    }}
                    key={ele.index}
                    sx={{
                      width: "max-content",
                      color:
                        theme.palette.mode === "light"
                          ? "#000"
                          : theme.palette.text.primary,
                    }}
                  >
                    {" "}
                    {ele.icon}{" "}
                  </IconButton>
                );
              })}

              <Divider sx={{ width: "48px" }} />
              {selected === 3 ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.info.main,

                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    navigate(getPath(3))
                    setSelected(3);

                  }}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>

          <Stack spacing={4}>
            <AntSwitch
              onChange={() => {
                onToggleMode();
              }}
              defaultChecked
              color="info"
            />
            <Avatar
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              src={faker.image.avatar()}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
              }}
              transformOrigin={
                {
                  vertical: "bottom",
                  horizontal: "left"
                }
              }
            >
              <Stack spacing={1} px={1}>
                {Profile_Menu.map((ele, index) => {
                  return (
                    <MenuItem key={index} onClick={() => {
                      handleClick()
                      
                    }}>
                      <Stack
                        onClick={() => {
                          
                          navigate(getMenu(index))
                        }}
                        sx={{
                          width: 100,
                          direction: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>{ele.title}</span>
                        {ele.icon}
                      </Stack>
                    </MenuItem>
                  );
                })}
              </Stack>
            </Menu>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
