import React from 'react';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
const Sticky = ({ children }: { children?: React.ReactNode }) => {
   const trigger = useScrollTrigger({
      // target: window ? window() : undefined,
   });
   return (
      <Box sx={{ backgroundColor: 'gray', height: '250vh' }}>
         <Slide in={!trigger}>
            <Box
               sx={{
                  backgroundColor: 'red',
                  position: 'fixed',
                  width: '100%',
                  height: trigger ? '0px' : '40px',
               }}
            >
               HEADER TOP
            </Box>
         </Slide>
         <Box
            sx={{
               height: '80px',
               backgroundColor: 'green',
               position: 'fixed',
               width: '100%',
               top: trigger ? '0px' : '40px',
               transitionProperty: 'top',
               transitionDuration: '300ms',
               transitionTimingFunction: 'ease',
            }}
         >
            HEADER MIDDLE
         </Box>
      </Box>
   );
};

export default Sticky;
