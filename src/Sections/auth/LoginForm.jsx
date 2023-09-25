import React from "react";
import FormProvider from "../../components/hook-form/FormProvider.js";
import { useState } from "react";
import {Link as RouterLink} from 'react-router-dom'
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
} from "@mui/material";

import RHFTextField from "../../components/hook-form/RHFTextFields.js";
import { Eye, EyeSlash } from "phosphor-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required...")
      .email("Email must br a vaild email address..."),
    password: Yup.string().required("Password is required..."),
  });
  const defaultValues = {
    email: "",
    password: "",
  };
  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      //submit data from backend
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error"> {errors.afterSubmit.message} </Alert>
        )}
        <RHFTextField name="email" label="Email address" />
        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack alignItems={"flex-end"} sx={{ my: 2 }}>
        <Link component={RouterLink} to={'/auth/reset-password'} variant="body2" color={"inherit"} underline="always">
          Forget Password?
        </Link>
      </Stack>
      <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        sx={{
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover": {
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
          },
        }}
      >
        login
      </Button>
    </FormProvider>
  );
}
