import { Box, Divider, IconButton, Link, Stack, Typography } from "@mui/material";

import React from 'react'
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { SimpleBarStyle } from "../../components/Scrollbar";
import {useTheme} from "@mui/material/styles"
import CallLogsElement from "../../components/CallElement/CallElement";
import { callLogs } from "../../data";
import StartCall from "../../Sections/main/StartCall";
import { useState } from "react";

export default function Call()
{
    const theme = useTheme()
    const [openDialog, setOpenDialog] = useState(false)
    const handleCloseDialog =()=>{
      setOpenDialog(false)
    }
    return(
        <>
        <Stack direction={"row"} sx={{ width: "100%" }}>
          {/* left */}
          <Box
            sx={{
               height: "100vh",
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? "#f8fAff"
                  : theme.palette.background,
              width: 320,
              boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            }}
          >
            <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
              <Stack>
                <Typography variant="h5">Call Logs</Typography>
              </Stack>
              <Stack sx={{ width: "100%" }}>
                <Search >
                  <SearchIconWrapper>
                    <MagnifyingGlass color="#709CE6" />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search..."
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Stack >
             <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
             <Typography variant="subtitle2" component={Link}>
                  Start Conversation
              </Typography>
              <IconButton onClick={()=>{
                setOpenDialog(true)
              }}>
                  <Plus style={{color:(theme)=>theme.palette.primary.main}}/>
              </IconButton>
             </Stack>
             <Divider/>
             <Stack >   
                {/* sx={{ flexGrow:1 ,overflowY:"scroll" , height:"100%"}} */}
             <SimpleBarStyle timeout={500} clickOnTrack={false} >
            <Stack spacing={2.4}>
             
              {/* Calling */}
              {callLogs?.map((ele)=>  <CallLogsElement  {...ele} />)}
             
              
             
  
              </Stack>
  
{/*   
              <Stack spacing={2.4}>
  
              <Typography variant="subtitle2" sx={{color:"#676767" ,marginTop:"20px"}}>
                All Groups
              </Typography>

             
  
              </Stack> */}
  
            </SimpleBarStyle>
  
             </Stack>
            </Stack>
          </Box>
          {/* right */}
          {/* reuse conversion component */}
        </Stack>
        {/* {openDialog && <CreateGroup open={openDialog}  handleClose={handleCloseDialog} />} */}
        {openDialog && <StartCall open={openDialog}  handleClose={handleCloseDialog} />}
      </>
   
    )
}