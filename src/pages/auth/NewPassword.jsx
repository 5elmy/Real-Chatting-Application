import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { Link  as RouterLink} from "react-router-dom";
import NewPasswordForm from "../../Sections/auth/NewPasswordForm.jsx";

export default function NewPassword() {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Reset password
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          please set your new password
        </Typography>
          {/* new password form */}
      <NewPasswordForm/>
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
