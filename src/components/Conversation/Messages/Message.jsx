import { Box, Stack } from '@mui/material'

import React from 'react'
import { Chat_History } from '../../../data/index.js'
import Timeline, { DocMsg, LinkMsg, MediaMessage, ReplyMsg, TextMsg } from '../MsgTypes(timeLine).jsx'

export default function Message({menu}) {
  return (
    <>
     <Box p={3}  >
        <Stack  spacing={3} >

            {Chat_History?.map((ele)=>{
                switch (ele.type) {
                    case "divider":
                        return <Timeline ele={ele}  />
                    case "msg":
                        switch (ele?.subtype) {
                            case "img":
                                return <MediaMessage ele={ele} menu={menu} />
                            
                            case "link":
                                return <LinkMsg ele={ele} menu={menu} />
                                
                            
                            case "doc":
                                
                            return <DocMsg ele={ele} menu={menu} />
                            case "reply":
                                return <ReplyMsg ele={ele}  menu={menu}/>
                                
                        
                            default:
                            return   <TextMsg ele={ele} menu={menu} />

                                
                        }
                       
                        
                    
                    
                
                    default:
                        
                        break;
                }
            })}

        </Stack>

     </Box>
    </>
  )
}

