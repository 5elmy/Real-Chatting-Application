import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import { useDispatch } from "react-redux";
import { toggleSidebar, updateSidebarType } from "../../Redux/Slices/app.js";
import { faker } from "@faker-js/faker";
import AntSwitch from "../AntSwitch.js";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const BlockDialog=({open , handleClose})=>{
  return (
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>Block this contact</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
       Are you sure you want to block this contact?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleClose}>Yes</Button>
    </DialogActions>
  </Dialog>

  )

}
const DeleteDialog =({open , handleClose})=>{
  return (
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>Delete this chat</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
       Are you sure you want to delete this chat?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleClose}>Yes</Button>
    </DialogActions>
  </Dialog>

  )

}

export default function Contact() {
  const [openBlock, setOpenBlock] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  const handleCloseBlock = () => {
    setOpenBlock(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <>
      <Box sx={{ width: "350px",height:"100vh" }}>
        <Stack sx={{height:'100%'}} >
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
              sx={{ p: 2, height: "100%" }}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={3}
              
            >
              <Typography variant="subtitle2">Contact Info</Typography>
              <IconButton
                onClick={() => {
                  dispatch(toggleSidebar());
                }}
              >
                <X />
              </IconButton>
            </Stack>
          </Box>
          {/* body....*/}
          <Stack
            sx={{
               height:"100%",
               position:"relative",
               flexGrow:1,
               overflowY:"scroll"
              }}
            p={3}
            spacing={3}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Avatar
                src={faker.image.avatar()}
                alt={faker.name.firstName()}
                sx={{ width: "64px", height: "64px" }}
              />
              <Stack spacing={"0.5"}>
                <Typography variant="article" fontWeight={600}>
                  {faker.name.fullName()}
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  {"01095895972"}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Stack alignItems={"center"} spacing={1}>
                <IconButton>
                  <VideoCamera />
                </IconButton>
                <Typography variant="overline">Audio</Typography>
              </Stack>

              {/*  */}
              <Stack alignItems={"center"} spacing={1}>
                <IconButton>
                  <Phone />
                </IconButton>
                <Typography variant="overline">Voice</Typography>
              </Stack>
            </Stack>

            <Divider />
            <Stack spacing={0.5}>
              <Typography variant="article">About</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet.
              </Typography>
            </Stack>

            <Divider />
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="subtitle2">Media , Links & docs</Typography>
              <Button onClick={()=>{
                 dispatch(updateSidebarType("SHARED"))
              }} endIcon={<CaretRight />}>401</Button>
            </Stack>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              {[1, 2, 3].map((ele, index) => {
                return (
                  <Box key={index}>
                    <img src={faker.image.fashion()} alt="" srcset="" />
                  </Box>
                );
              })}
            </Stack>
            <Divider />
            <Stack
              direction={"row"}
              spacing={2}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <Star size={21} />
                <Typography variant="subtitle2">Startted Message</Typography>
              </Stack>
              <IconButton onClick={()=>{dispatch(updateSidebarType('STARRED'))}}>
              <CaretRight/>
              </IconButton>
            </Stack>
            <Divider />

            {/*  */}
            <Stack
              direction={"row"}
              spacing={1}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <Bell size={21} />
                <Typography variant="subtitle2">Mute Notification</Typography>
              </Stack>
              <AntSwitch  />
            </Stack>
            <Divider />
            <Typography>1 group in  common</Typography>
            <Stack direction={'row'}spacing={2} justifyContent={'space-between'} alignItems={'center'}>
              <Avatar src={faker.image.avatar()} />
              <Stack spacing={0.5} >
                <Typography variant="subtitle2">coding Monk</Typography>
                <Typography variant="captain">Owl , Parret , Rabbit</Typography>

              </Stack>
            </Stack>
            <Stack direction={'row'}spacing={2}  alignItems={'center'}>
              <Button onClick={()=>{
                setOpenBlock(true)
              }} startIcon={<Prohibit />} fullWidth variant="outlined">
                Block
              </Button>
              <Button onClick={()=>{
                setOpenDelete(true)
              }} startIcon={<Trash/>} fullWidth variant="outlined">
               Delete
              </Button>

            </Stack>

          </Stack>
        </Stack>
        {openBlock && <BlockDialog open={openBlock} handleClose={ handleCloseBlock} />}
        {openDelete && <DeleteDialog open={openDelete} handleClose={ handleCloseDelete} />}
      </Box>
    </>
  );
}
