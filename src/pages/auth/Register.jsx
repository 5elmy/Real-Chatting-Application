import { Link, Stack, Typography } from '@mui/material'
import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import RegisterForm from '../../Sections/auth/RegisterForm.jsx'
import AuthSocial from '../../Sections/auth/AuthSocial.jsx'

export default function Register() {
  return (
    <>
        <Stack spacing={2} sx={{mb:5 , position:'relative'}}>
            <Typography variant='h4'>
                Get Start With Tawk 
            </Typography>
            <Stack  direction={'row'} spacing={0.5}>
              <Typography variant='body2'> Already have Account ? </Typography>
               <Link component={RouterLink} to={"/auth/login"} variant='subtitle2'>
                Sign in
               </Link>

            </Stack>

            {/* form for register */}

              <RegisterForm/>

            <Typography component={'div'} sx={{color:"text.secondary", mt:3 ,typography:'captain' , textAlign:'center'}}>
              {'By Signing up ,I agree to'}
              <Link underline='always' color={'text.primary'}>
                Terms of service
              </Link>
              {' and '}
              <Link underline='always' color={'text.primary'}>
                privacy Policy
              </Link>
             <Typography textAlign={'center'}>  {' Ahmed Adel Helmy'}</Typography>
              

            </Typography>
             <AuthSocial/>

        </Stack>
    </>
  )
}
