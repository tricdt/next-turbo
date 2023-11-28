import { Components, Theme } from '@mui/material/styles';
const button: Components<Theme> = {
   MuiButton: {
      styleOverrides: {
         root: {
            backgroundColor: 'green',
         },
      },
   },
};
export default button;
