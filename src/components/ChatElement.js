import { faker } from "@faker-js/faker";
import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import { styled, useTheme} from "@mui/material/styles";
import { StyledBadge } from "./StyledBadge";




// const StyledBadge = styled(Badge)(({ theme }) => ({
//     "& .MuiBadge-badge": {
//       backgroundColor: "#44b700",
//       color: "#44b700",
//       boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//       "&::after": {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         borderRadius: "50%",
//         animation: "ripple 1.2s infinite ease-in-out",
//         border: "1px solid currentColor",
//         content: '""',
//       },
//     },
//     "@keyframes ripple": {
//       "0%": {
//         transform: "scale(.8)",
//         opacity: 1,
//       },
//       "100%": {
//         transform: "scale(2.4)",
//         opacity: 0,
//       },
//     },
//   }));
  

export const ChatElement = ({id,img,name, msg,time,unread,pinned,online}) => {
  const theme = useTheme()

    return (
      <Box
        p={2}
        sx={{
          width: "100%",
          borderRadius: "10px",
          backgroundColor:  theme.palette.mode==='light'? "#fff" :theme.palette.background.default,
        }}
      >
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>

          <Stack direction={'row' } spacing={2} alignItems={'center'}>
          {online? <StyledBadge
          
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar src={faker.image.avatar()} />
        </StyledBadge>:  <Avatar src={faker.image.avatar()} /> }
           

            <Stack spacing={.36}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>

            </Stack>
            

          </Stack>

          <Stack spacing={2} alignItems={'center'}>
            <Typography sx={{fontWeight:600}} variant="caption">
              {time}
            </Typography>
            <Badge color="primary" badgeContent={unread}>
              
            </Badge>

          </Stack>


        </Stack>
      </Box>
    );
  };