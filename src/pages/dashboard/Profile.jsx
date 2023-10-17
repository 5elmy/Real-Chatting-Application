import React from 'react'
import { Box, Button, IconButton, Stack, SvgIcon, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { NavLink } from 'react-router-dom'
import { CaretLeft } from 'phosphor-react'
import CreateProfileForm from '../../Sections/Settings/CreateProfileForm'

// const VisuallyHiddenInput = styled('input')`
//   clip: rect(0 0 0 0);
//   clip-path: inset(50%);
//   height: 1px;
//   overflow: hidden;
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   white-space: nowrap;
//   width: 1px;
// `;

export default function Profile() {
    const theme = useTheme()
    return (
        <>
            <Stack width={'100%'} height={'100vh'}>
                <Box sx={{
                    width: "320px",
                    // overflowY: "scroll",
                    height: "100vh",
                    backgroundColor:
                        theme.palette.mode === "light"
                            ? "#F8FAFF"
                            : theme.palette.background,
                    boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
                }}>

                    <Stack p={4} spacing={5}  >
                        {/* header */}
                        <Stack direction={"row"} alignItems={'center'} spacing={3}>
                            <IconButton>
                                <NavLink to={'/app'}>  <CaretLeft size={24} color="#484848" /></NavLink>
                            </IconButton>
                            <Typography variant="h6"> Profile</Typography>
                        </Stack>
                        {/* profile form  */}
                        <CreateProfileForm />


                        




                    </Stack>
                </Box>

            </Stack>
        </>
    )
}


