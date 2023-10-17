import { Faker, faker } from "@faker-js/faker";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { styled, alpha ,useTheme} from "@mui/material/styles";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import * as React from "react";

import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { ChatList } from "../../data/index.js";
import { SimpleBarStyle } from "../../components/Scrollbar.js";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search/index.js";
import { ChatElement } from "../../components/ChatElement.js";


export default function Chats() {
  const theme = useTheme()


  


  return (
    <>

      <Box
        sx={{
          position: "relative",
          width: "320px",
          backgroundColor:theme.palette.mode==='light'? "#f8fAff" :theme.palette.background.paper,
          boxShadow: " 0.5px .5px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack p={3} spacing={2}   sx={{height:"100vh"}}>
          
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h5">Chats</Typography>
            <IconButton>
              <CircleDashed />
            </IconButton>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="search..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Stack>

          <Stack spacing={2}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <ArchiveBox size={24} />
              <Button> Archive</Button>
            </Stack>
            <Divider />
          </Stack>

          <Stack direction="column"  spacing={2} sx={{flexGrow:1 , overflowY:"scroll", height:"100%"}}>
          <SimpleBarStyle timeout={500} clickOnTrack={false} >
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{color:"#676767"}}>
              Pinned
            </Typography>
            {ChatList.filter((ele)=>{
              return ele.pinned
            }).map((ele)=>{
              return  <ChatElement {...ele} />
            })
            }
           

            </Stack>


            <Stack spacing={2.4}>

            <Typography variant="subtitle2" sx={{color:"#676767" ,marginTop:"20px"}}>
              All Chats
            </Typography>
            {ChatList.filter((ele)=>{
              return !ele.pinned 
            }).map((ele)=>{
              return  <ChatElement {...ele} />
            })
            }
           

            </Stack>

          </SimpleBarStyle>





          

          </Stack>
        </Stack>
      </Box>
    </>
  );
}
