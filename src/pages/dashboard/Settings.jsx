import { Avatar, Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { Bell, CaretLeft, Image, Info, Key, Keyboard, Lock, Note, PencilCircle } from "phosphor-react";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import ShortCuts from "../../Sections/Settings/ShortCuts.jsx";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Settings() {
  const theme = useTheme();
  const [openShortCut,setOpenShortCut] =useState(false)
  const handleOpenShortcuts=()=>{
    setOpenShortCut(true)
  }
  const handleCloseShortcuts=()=>{
    setOpenShortCut(false)
  }

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
    //   onclick: handleOpenTheme,
      onclick: () => {},

    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: handleOpenShortcuts,
    // onclick: () => {},

    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];
  return (
    <>
      <Stack direction={"row"} width={"100%"} height= "100vh">
        {/* left :sideBar */}
        <Box
          sx={{
            width: "320px",
            // overflowY: "scroll",
            height: "100vh",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack  p={3}  spacing={3}  >
            {/* header */}
            <Stack direction={"row"} alignItems={'center'} spacing={3}>
                <IconButton>
                  <NavLink to={'/app'}>  <CaretLeft size={24} color="#484848"/></NavLink>
                </IconButton>
                <Typography variant="h6"> Settings</Typography>
            </Stack>
            {/* profile */}
              <Stack direction={'row'} spacing={3} p={2}> 
                <Avatar sx={{width:"43px" , height:"43px"}} src={faker.image.avatar()} alt={faker.name.fullName()} />
                <Stack spacing={"0.5"}>
                    <Typography variant="article">
                       {faker.name.fullName()}
                    </Typography>
                    <Typography variant="caption">
                       {faker.name.gender()}
                    </Typography>

                </Stack>

                </Stack>
            {/* some options */}
            {list.map(({title,key,icon,onclick})=>{
                return <Stack spacing={2} sx={{cursor:"pointer"}} onClick={onclick}>
                    <Stack direction={'row'} spacing={2}>
                        {icon}
                        <Typography variant="body2"> {title} </Typography>

                    </Stack>
                    
                    {key !==7 && <Divider />}

                </Stack>
            })}

            </Stack>
        </Box>
        {/* right: img */}
      </Stack>
      {openShortCut && <ShortCuts   open={openShortCut} handleClose ={handleCloseShortcuts} />}
    </>
  );
}
