import React, { useState } from "react";
import {
  Box,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];
const StyledInput = styled(TextField)((theme) => ({
  "& .MuiInputBase-input": {
    paddingTop: "6px",
    paddingBottom: "6px",
  },
}));

export default function Footer() {
  const theme = useTheme();

  const [openPicker, setOpenPicker] = useState(false);
  const [action, setAction] = useState(false);

  return (
    <>
      <Box
        p={1}
        sx={{
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.default,

          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          width={"100%"}
          spacing={2}
        >
          <Box
            display={openPicker ? "inline" : "none"}
            sx={{ zIndex: 10, position: "fixed", bottom: 77, right: 70 }}
          >
            <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            />
          </Box>

          {/* *********************Chat input**************** */}

          <StyledInput
            fullWidth
            placeholder="write a message...."
            variant="filled"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <Stack sx={{ width: "max-content" }}>
                  <Stack sx={{ position: "relative", display:action?"inline-block":"none" }}>
                    {actions.map((ele) => {
                      return (
                        <Tooltip placement="right" title={ele.title}>
                          <Fab
                            sx={{
                              position: "absolute",
                              width: "45px",
                              height: "45px",
                              top: -ele.y,
                              backgroundColor: ele.color,
                            }}
                          >
                            {ele.icon}
                          </Fab>
                        </Tooltip>
                      );
                    })}
                  </Stack>
                  <InputAdornment>
                    <IconButton onClick={()=>{
                      setAction(prev=>!prev)
                    }}>
                      <LinkSimple />
                    </IconButton>
                  </InputAdornment>
                </Stack>
              ),
              endAdornment: (
                <InputAdornment>
                  <IconButton
                    onClick={() => {
                      setOpenPicker((prev) => !prev);
                    }}
                  >
                    <Smiley />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {/* ************************ */}
          <Box
            sx={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <IconButton>
                <PaperPlaneTilt color="#fff" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
