import React from 'react'
import { Stack, Typography ,Link } from '@mui/material'

import AuthSocial from '../../Sections/auth/AuthSocial.jsx'
import LoginForm from '../../Sections/auth/LoginForm.jsx'
import { Link as RouterLink } from "react-router-dom"

export default function Login() {
  return (
        <>
        <Stack spacing={2} sx={{mb:5 , position:"relative"}}>
            <Typography variant='h4'> Login to Tawk </Typography>
            <Stack direction={'row'} spacing={0.5}>
                <Typography variant='body2'>New User? </Typography>
                <Link  to={"/auth/register"}
                     component={RouterLink}
            variant="subtitle2" > Create an account ? </Link>
            </Stack>
        </Stack>
            {/* login form */}
            <LoginForm/>
            {/* social app */}
            <AuthSocial/>
        </>
    
  )
}
