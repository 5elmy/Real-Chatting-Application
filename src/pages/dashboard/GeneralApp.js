import React from "react";
import Chats from "./Chats.jsx";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation/Conversation.jsx";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact&SharedMessages/Contact.jsx";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/Contact&SharedMessages/SharedMessages.jsx";
import StarredMessages from "../../components/Contact&SharedMessages/StarredMessages.jsx";

const GeneralApp = () => {
  const theme = useTheme();
  const {sideBar} = useSelector((state)=>{return state.app})
   console.log({sideBar});

  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }} >
        <Chats />
        <Box
          sx={{
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F0F4FA"
                : theme.palette.background.paper,
            width: sideBar.open? "calc(100vw - 740px)":"calc(100vw - 390px)",
            
          }}
        >
          <Conversation />
        </Box>
        {sideBar.open &&  (()=>{
          switch (sideBar.type) {
            case "CONTACT":
              return <Contact />;
            
            case "STARRED":
             return <StarredMessages/>;
            
            case "SHARED":
              return <SharedMessages />;
            
          
            default:
              break;
          }

        })()}
      </Stack>
    </>
  );
};

export default GeneralApp;
