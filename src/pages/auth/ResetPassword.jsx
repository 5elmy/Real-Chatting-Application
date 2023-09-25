import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { CaretLeft } from "phosphor-react";
import ResetPasswordForm from "../../Sections/auth/ResetPasswordForm.jsx";

export default function ResetPassword() {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Forget your password?
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          please enter the email address associated with your account and we
          will email you a link to reset your password
        </Typography>
        {/* reset password form */}
        <ResetPasswordForm />
        <Link
          component={RouterLink}
          to="/auth/login"
          color={"inherit"}
          variant="subtitle2"
          sx={{
            mt: 3,
            mx: "auto",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
            <CaretLeft />
            Return to sign in
        </Link>
      </Stack>
    </>
  );
}
