import { Dialog, DialogContent, DialogTitle, Slide, Stack } from '@mui/material'
import React from 'react'
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import { MagnifyingGlass } from 'phosphor-react';
import { CallElement } from '../../components/CallElement/CallElement';
import { MemeberList } from '../../data';
// import {callElement} from '../../components/CallElement/CallElement'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function StartCall({open , handleClose}) {
  return (
    <>
         <Dialog fullWidth maxWidth='xs' TransitionComponent={Transition} open={open} keepMounted sx={{ p: 4 }} onClose={handleClose}>
                {/* title */}
                <DialogTitle sx={{mb:2}}>Start Call</DialogTitle> 
                <DialogContent >
                  <Stack >

                <Stack sx={{ width: "100%" }}>
                <Search >
                  <SearchIconWrapper >
                    <MagnifyingGlass color="#709CE6" />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search..."
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Stack >
              {/* call list */}
              {MemeberList?.map((ele)=> <CallElement {...ele}/> )}
                  </Stack>
                  
                   

                </DialogContent>
                </Dialog>
      
    </>
  )
}
