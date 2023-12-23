import { Theme, Components } from '@mui/material/styles';
declare module '@mui/material/tabs' {
   interface TabsPropsVariantOverrides {
      hihi: true;
   }
   interface TabsOwnProps {
      template: 'dashboard';
   }
}
const tabs: Components<Theme> = {
   MuiTabs: {
      styleOverrides: {
         root: ({ theme, ownerState }) => ({
            ...(ownerState.template === 'dashboard' &&
               ownerState.variant === 'hihi' &&
               {}),
         }),
      },
   },
};
export default tabs;
