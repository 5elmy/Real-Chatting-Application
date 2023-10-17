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
import { useCallback } from "react";

export default function CreateProfileForm() {

  const loginSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required..."),
    about: Yup.string()
      .required("About is required..."),
    avaterUrl: Yup.string()
      .required("Avater is required...").nullable(true),
  });
  const defaultValues = {
    name: "",
    about: "",
  };
  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitSuccessful },
  } = methods;

  const values= watch()
  const handleDrop = useCallback((accetedFiles)=>{
      const  file  = accetedFiles[0] ;
      const newFile = Object.assign(file ,{
        preview :URL.createObjectURL(file)
      })
      if(file){
        setValue('avaterUrl',newFile ,{shouldValidate:true})
      }

  },[setValue])
  const onSubmit = async (data) => {
    try {
      //submit data from backend
      console.log('data');
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
        <RHFTextField name="name" label="Name" helperText={'This name is visbile to your contacts'} />
       <RHFTextField multiline rows={3} maxRows={5} name={'about'} label='About' />
      </Stack>
      <Stack direction={'row'} justifyContent={'end'} sx={{mt:2}}>
        <Button size="large" color="primary" type="submit" variant="outlined">Save</Button>
      </Stack>

    </FormProvider>
  );
}
