import React from "react";
import {   Box,  Stack } from "@mui/material";

import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Message from "./Messages/Message.jsx";

export default function Conversation() {



 
  return (
    <>
      <Stack height={"100%"} maxHeight={"100vh"} width="auto">
        {/* header */}
        <Header />
        {/* messages */}
        <Box width={"100%"} sx={{ flexGrow: "1"  , height:"100%" , overflowY:"scroll" }}>
            <Message menu={true} />
        </Box>

        {/* footer */}
        <Footer/>
       
      </Stack>
    </>
  );
}
