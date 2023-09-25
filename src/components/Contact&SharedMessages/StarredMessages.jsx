import { useTheme } from "@mui/material/styles";
import { Box, Grid, IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { updateSidebarType } from "../../Redux/Slices/app.js";
import { ArrowLeft } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { Shared_Docs, Shared_Links } from "../../data/index.js";
import { DocMsg, LinkMsg } from "../Conversation/MsgTypes(timeLine).jsx";
import Message from "../Conversation/Messages/Message.jsx";

export default function StarredMessages() {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: "350px", height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ p: 1, height: "100%" }}
            direction={"row"}
            alignItems={"center"}
            spacing={2}
          >
            <IconButton
              onClick={() => {
                dispatch(updateSidebarType("CONTACT"));
              }}
            >
              <ArrowLeft />
            </IconButton>
            <Typography variant="subtitle2">Starred Messages</Typography>
          </Stack>
        </Box>

        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={ 3}
        >
           <Message />

        </Stack>
      </Stack>
    </Box>
  );
}
