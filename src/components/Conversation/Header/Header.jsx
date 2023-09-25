import React from 'react'
import { Avatar, Badge, Box, Divider, IconButton,  Stack,  Typography } from "@mui/material";
import { faker } from "@faker-js/faker";

import {  CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import {  useTheme } from "@mui/material/styles";
import { StyledBadge } from '../../StyledBadge.js';

import { toggleSidebar } from '../../../Redux/Slices/app.js';
import { useDispatch } from 'react-redux';

export default function Header() {
    const theme= useTheme()
    const dispatch = useDispatch()


    /*********************************************** */

  return (
    <>
         <Box
          
          sx={{
            width: "100%",
            backgroundColor: theme.palette.mode ==='light'? "#F8FAFF": theme.palette.background.default,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent={"space-between"}
            sx={{ width: "100%", height: "100%" }}
          >
            <Stack  onClick={()=>{dispatch(toggleSidebar())}} direction={"row"} spacing={1} alignItems={'center'}>
              <Box p={2}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    src={faker.image.avatar()}
                    alt={faker.name.fullName()}
                  />
                </StyledBadge>
             
              </Box>

              <Stack >
                  <Typography variant="subtitle2">
                    {faker.name.fullName()}
                  </Typography>
                  <Typography variant="caption">
                    online
                  </Typography>

                </Stack>
            </Stack>

            <Stack direction={'row'} alignItems={'center'} spacing={3} >
              <IconButton>
                <VideoCamera/>
              </IconButton>
              <IconButton>
                <Phone/>
              </IconButton>
              <IconButton>
                <MagnifyingGlass/>
              </IconButton>
              <Divider orientation="vertical" flexItem />
              <IconButton>
                <CaretDown/>
              </IconButton>

            </Stack>
          </Stack>
        </Box>
    </>
  )
}
