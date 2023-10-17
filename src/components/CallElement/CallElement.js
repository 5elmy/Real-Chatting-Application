import { faker } from '@faker-js/faker'
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { StyledBadge } from '../StyledBadge'
import { ArrowDownLeft, ArrowUUpLeft, ArrowUpRight, Phone, PhoneCall, VideoCamera } from 'phosphor-react'

export default function CallLogsElement({ online, incoming, missed }) {
    return (
        <>
            <Box
                p={2}
                sx={{
                    width: "100%",
                    borderRadius: "10px",
                    backgroundColor: (theme) => theme.palette.mode === 'light' ? "#fff" : theme.palette.background.default,
                }}
            >
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>

                    <Stack spacing={2} direction={'row'} alignItems={'center'}>

                        {online ? <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            variant="dot"
                        >
                            <Avatar src={faker.image.avatar()} />
                        </StyledBadge> : <Avatar src={faker.image.avatar()} />}

                        <Stack spacing={.36}>

                            <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
                            {/* <Typography variant="caption">{msg}</Typography> */}
                            <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                {incoming ? 
                                            <ArrowDownLeft color={missed ? "red" : "green"} /> 
                                          : <ArrowUpRight color={missed ? "red" : "green"} />}
                                <Typography variant='caption'>
                                    Yesterday  21:24:09
                                </Typography>
                            </Stack>

                        </Stack>

                    </Stack>
                    <IconButton >
                        <Phone color='green' />
                    </IconButton>



                </Stack>
            </Box>

        </>
    )


}

export function CallElement({online}) {

    return (
        <>
             <Box
                p={2}
                sx={{
                    width: "100%",
                    borderRadius: "10px",
                    backgroundColor: (theme) => theme.palette.mode === 'light' ? "#fff" : theme.palette.background.default,
                }}
            >
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>

                    <Stack spacing={2} direction={'row'} alignItems={'center'}>

                        {online ? <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            variant="dot"
                        >
                            <Avatar src={faker.image.avatar()} />
                        </StyledBadge> : <Avatar src={faker.image.avatar()} />}

                        <Stack spacing={.36}>

                            <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
                            {/* <Typography variant="caption">{msg}</Typography> */}
                          

                        </Stack>

                    </Stack>

                    <Stack direction={'row'} alignItems={'center'} >

                    <IconButton >
                        <Phone color='green' />
                    </IconButton>

                    <IconButton>
                        <VideoCamera color='green' />
                    </IconButton>

                    </Stack>



                </Stack>
            </Box>
        
        
        </>
    )

}

