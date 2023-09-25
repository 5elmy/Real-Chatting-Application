import React from "react";
import { Box, Divider, IconButton, Link, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DotsThreeVertical, DownloadSimple, Image } from "phosphor-react";
import { Message_options } from "../../data/index.js";


export function DocMsg({ ele }) {
  const theme = useTheme();

  return (
    <>
      <Stack direction={"row"} justifyContent={ele.incoming ? "start" : "end"}>
        <Box
          p={1.5}
          sx={{
            backgroundColor: ele.incoming
              ? theme.palette.background.default
              : theme.palette.primary.main,
            borderRadius: 1.5,
            width: "max-content",
          }}
        >
          <Stack spacing={2}>
            <Stack
              p={2}
              direction={"row"}
              spacing={3}
              alignItems={"center"}
              sx={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: 1,
              }}
            >
                <Image size={48} />
                <Typography variant="caption">1134548l5565popop.png</Typography>
                <IconButton>
                    <DownloadSimple />
                </IconButton>
               

            </Stack>
            <Typography variant="body2" sx={{color: ele.incoming? theme.palette.text :"#fff"}} >{ele.message}</Typography>
          </Stack>
        </Box>
        <MessageOptions/>
      </Stack>
    </>
  );
}

export function LinkMsg({ ele }) {
  const theme = useTheme();

  return (
    <>
      <Stack direction={"row"} justifyContent={ele.incoming ? "start" : "end"}>
        <Box
          p={1.5}
          sx={{
            backgroundColor: ele.incoming
              ? theme.palette.background.default
              : theme.palette.primary.main,
            borderRadius: 1.5,
            width: "max-content",
          }}
        >
          <Stack spacing={2}>
            <Stack
              p={2}
              spacing={3}
              //   alignItems={"center"}
              direction={"column"}
              sx={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: 1,
              }}
            >
              <img
                src={ele.preview}
                alt={ele.message}
                style={{ maxHeight: "210px", borderRadius: "10px" }}
              />
              <Stack spacing={2}>
                <Typography variant="subtitle2">hamada</Typography>
                <Typography
                  to=""
                  variant="subtitle2"
                  sx={{ color: theme.palette.primary.main }}
                  component={Link}
                >
                  hamada
                </Typography>
              </Stack>
              <Typography
                variant="body2"
                sx={{
                  color: ele.incoming ? theme.palette.primary.text : "#fff",
                }}
              >
                {ele.message}
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <MessageOptions/>
      </Stack>
    </>
  );
}

export function ReplyMsg({ ele }) {
  const theme = useTheme();

  return (
    <>
      <Stack direction={"row"} justifyContent={ele.incoming ? "start" : "end"}>
        <Box
          p={1.5}
          sx={{
            backgroundColor: ele.incoming
              ? theme.palette.background.default
              : theme.palette.primary.main,
            borderRadius: 1.5,
            width: "max-content",
          }}
        >
          <Stack spacing={2}>
            <Stack
              p={2}
              direction={"column"}
              spacing={3}
              alignItems={"center"}
              sx={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: 1.5,
              }}
            >
              <Typography variant="body2" color={theme.palette.text}>
                {ele.message}
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              color={ele.incoming ? theme.palette.text : "#fff"}
            >
              {ele.reply}
            </Typography>
          </Stack>
        </Box>
        <MessageOptions/>
      </Stack>
    </>
  );
}

//img and captain msg
export function MediaMessage({ ele ,menu }) {
  const theme = useTheme();

  return (
    <>
      <Stack direction={"row"} justifyContent={ele.incoming ? "start" : "end"}>
        <Box
          p={1.5}
          sx={{
            backgroundColor: ele.incoming
              ? theme.palette.background.default
              : theme.palette.primary.main,
            borderRadius: 1.5,
            width: "max-content",
          }}
        >
          <Stack spacing={1}>
            <img
              src={ele.img}
              alt={ele.message}
              style={{ maxHeight: 210, borderRadius: "10px" }}
            />
            <Typography
              variant="body2"
              color={ele.incoming ? theme.palette.text : "#fff"}
            >
              {ele.message}
            </Typography>
          </Stack>
        </Box>
        {menu && <MessageOptions/> }
        
      </Stack>
    </>
  );
}

export function TextMsg({ ele ,menu }) {
  const theme = useTheme();

  return (
    <>
      <Stack direction={"row"} justifyContent={ele.incoming ? "start" : "end"}>
        <Box
          p={1.5}
          sx={{
            backgroundColor: ele.incoming
              ? theme.palette.background.default
              : theme.palette.primary.main,
            borderRadius: 1.5,
            width: "max-content",
          }}
        >
          <Typography
            variant="body2"
            color={ele.incoming ? theme.palette.text : "#fff"}
          >
            {ele.message}
          </Typography>
        </Box>

       {menu && <MessageOptions/>}
      </Stack>
    </>
  );
}

export default function Timeline({ ele }) {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Divider sx={{ width: "46%" }} />
        <Typography variant="caption" sx={{ color: theme.palette.text }}>
          {" "}
          {ele.text}
        </Typography>
        <Divider sx={{ width: "46%" }} />
      </Stack>
    </>
  );
}



 function MessageOptions() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 return (
  <>

<DotsThreeVertical id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} size={20} />

<Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Stack spacing={1} px={1}>
          {Message_options.map((ele)=>{
         return  <MenuItem onClick={handleClick}>{ele.title}</MenuItem>

          })}
          </Stack>        
      </Menu>
  </>
 )
  
}
