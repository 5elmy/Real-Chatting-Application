import { useTheme } from "@mui/material/styles";
import { Box, Grid, IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { updateSidebarType } from "../../Redux/Slices/app.js";
import { ArrowLeft } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { Shared_Docs, Shared_Links } from "../../data/index.js";
import { DocMsg, LinkMsg } from "../Conversation/MsgTypes(timeLine).jsx";

export default function SharedMessages() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>
        <Tabs sx={{px:2 , pt:2}} value={value} onChange={handleChange} centered>
        <Tab label="Media" />
        <Tab label="Links" />
        <Tab label="Docs" />
      </Tabs>
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={ value === 1?1:3}
        >
            {(()=>{
                switch (value) {
                    case 0:
                       return ( <Grid container  spacing={2}>
                        {
                            [0,1,2,3,4,5,6].map((ele,index)=>{
                                return   <Grid key={index} item xs={4}>
                                <img src={faker.image.avatar()} alt={faker.name.fullName()} />
                              </Grid>
                            })
                        }

                    </Grid>)
                    case 1:
                       return Shared_Links.map((ele,index)=> <LinkMsg ele={ele} />)
                    case 2:
                       return Shared_Docs.map((ele,index)=> <DocMsg ele={ele} />)
                
                    default:
                        break;
                }
            })()}

        </Stack>
      </Stack>
    </Box>
  );
}
