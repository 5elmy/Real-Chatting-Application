import { Button, Dialog, DialogContent, DialogTitle, Stack } from '@mui/material'
import { Slide } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from '../../components/hook-form/FormProvider.js';
import RHFTextField from '../../components/hook-form/RHFTextFields.js';
import RHFAutocomplete from '../../components/hook-form/AutoComlete.js';




const MEMEBERS = ['Name 1', 'Name 2', 'Name 3']
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const CreateGroupForm = ({ handleClose}) => {
    const CreateFormSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        members: Yup.array().min(2, 'Must have at least 2 memebers')
    })
    const defaultValues = {
        title: "",
        members: []
    }
    const methods = useForm({
        resolver: yupResolver(CreateFormSchema),
        defaultValues
    })
    const { reset, watch, setError, handleSubmit, formState: { errors, isSubmitted, isSubmitSuccessful, isValid } } = methods
    const onSubmit = async (data) => {
        try {
            console.log("Data", data);
        } catch (error) {
            console.log('error', error);
        }


    }

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}  >
                
                <RHFTextField  name='title' label='Title' />
                
                <RHFAutocomplete
                    name="members"
                    label="Members"
                    multiple
                    freeSolo
                    options={MEMEBERS.map((option) => option)}
                    ChipProps={{ size: "medium" }}
                />
                <Stack spacing={2} direction={'row'} alignItems={'center'} justifyContent={'end'}>
                    <Button onClick={handleClose} type='submit' variant='contained'>
                        Cancel
                    </Button>
                    <Button type='submit' variant='contained'>
                        Create
                    </Button>

                </Stack>

            </Stack>

        </FormProvider>
    )
}
export default function CreateGroup({ open, handleClose }) {
    return (
        <>
            <Dialog fullWidth maxWidth='xs' TransitionComponent={Transition} open={open} keepMounted sx={{ p: 4 }}>
                {/* title */}
                <DialogTitle sx={{mb:2}}>Create New Group</DialogTitle>
              
                
                <DialogContent >
                    <CreateGroupForm  handleClose={handleClose} />

                </DialogContent>

            </Dialog>
        </>
    )
}

