import { Components, Theme } from '@mui/material/styles';
import pxToRem from '../functions/px-to-rem';
declare module '@mui/material/Button' {
   interface ButtonPropsVariantOverrides {
      gradient: true;
   }
   interface ButtonOwnProps {
      template?: 'dashboard';
      circular?: boolean;
      iconOnly?: boolean;
   }
}

const button: Components<Theme> = {
   MuiButton: {
      styleOverrides: {
         root: ({ theme, ownerState }) => ({
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: theme.typography.size.xs,
            fontWeight: theme.typography.fontWeightBold,
            borderRadius: theme.borders.borderRadius.lg,
            padding: `${pxToRem(6.302)} ${pxToRem(16.604)}`,
            lineHeight: 1.4,
            textAlign: 'center',
            textTransform: 'uppercase',
            userSelect: 'none',
            backgroundSize: '150% !important',
            backgroundPositionX: '25% !important',
            transition: 'all 150ms ease-in',

            '&:disabled': {
               pointerEvent: 'none',
               opacity: 0.65,
            },

            '& .material-icons': {
               fontSize: pxToRem(15),
               marginTop: pxToRem(-2),
            },
            ...(ownerState.variant === 'contained' && {
               backgroundColor: theme.palette.white.main,
               minHeight: pxToRem(40),
               color: theme.palette.text.main,
               padding: `${pxToRem(10)} ${pxToRem(24)}`,

               '&:hover': {
                  backgroundColor: theme.palette.white.main,
               },

               '&:active, &:active:focus, &:active:hover': {
                  opacity: 0.85,
               },

               '& .material-icon, .material-icons-round, svg': {
                  fontSize: `${pxToRem(16)} !important`,
               },
            }),
            ...(ownerState.variant === 'contained' &&
               ownerState.size === 'small' && {
                  minHeight: pxToRem(32),
                  padding: `${pxToRem(6)} ${pxToRem(16)}`,
                  fontSize: theme.typography.size.xs,

                  '& .material-icon, .material-icons-round, svg': {
                     fontSize: `${pxToRem(12)} !important`,
                  },
               }),
            ...(ownerState.variant === 'contained' &&
               ownerState.size === 'large' && {
                  minHeight: pxToRem(47),
                  padding: `${pxToRem(12)} ${pxToRem(28)}`,
                  fontSize: theme.typography.size.sm,

                  '& .material-icon, .material-icons-round, svg': {
                     fontSize: `${pxToRem(22)} !important`,
                  },
               }),
            ...(ownerState.variant === 'contained' &&
               ownerState.color === 'primary' && {
                  backgroundColor: theme.palette.info.main,

                  '&:hover': {
                     backgroundColor: theme.palette.info.main,
                  },

                  '&:focus:not(:hover)': {
                     backgroundColor: theme.palette.info.focus,
                  },
               }),
            ...(ownerState.variant === 'contained' &&
               ownerState.color === 'secondary' && {
                  backgroundColor: theme.palette.secondary.main,

                  '&:hover': {
                     backgroundColor: theme.palette.secondary.main,
                  },

                  '&:focus:not(:hover)': {
                     backgroundColor: theme.palette.secondary.focus,
                  },
               }),
            ...(ownerState.variant === 'outlined' && {
               minHeight: pxToRem(40),
               color: theme.palette.light.main,
               borderColor: theme.palette.light.main,
               padding: `${pxToRem(10)} ${pxToRem(24)}`,

               '&:hover': {
                  opacity: 0.75,
                  backgroundColor: theme.palette.transparent.main,
               },

               '& .material-icon, .material-icons-round, svg': {
                  fontSize: `${pxToRem(16)} !important`,
               },
            }),
            ...(ownerState.variant === 'outlined' &&
               ownerState.size === 'small' && {
                  minHeight: pxToRem(32),
                  padding: `${pxToRem(6)} ${pxToRem(16)}`,
                  fontSize: theme.typography.size.xs,

                  '& .material-icon, .material-icons-round, svg': {
                     fontSize: `${pxToRem(12)} !important`,
                  },
               }),
            ...(ownerState.variant === 'outlined' &&
               ownerState.size === 'large' && {
                  minHeight: pxToRem(47),
                  padding: `${pxToRem(12)} ${pxToRem(28)}`,
                  fontSize: theme.typography.size.sm,

                  '& .material-icon, .material-icons-round, svg': {
                     fontSize: `${pxToRem(22)} !important`,
                  },
               }),
            ...(ownerState.variant === 'outlined' &&
               ownerState.color === 'primary' && {
                  backgroundColor: theme.palette.transparent.main,
                  borderColor: theme.palette.info.main,

                  '&:hover': {
                     backgroundColor: theme.palette.transparent.main,
                  },
               }),
            ...(ownerState.variant === 'outlined' &&
               ownerState.color === 'secondary' && {
                  backgroundColor: theme.palette.transparent.main,
                  borderColor: theme.palette.secondary.main,

                  '&:hover': {
                     backgroundColor: theme.palette.transparent.main,
                  },
               }),
            ...(ownerState.variant === 'text' && {
               backgroundColor: theme.palette.transparent.main,
               minHeight: pxToRem(40),
               color: theme.palette.text.main,
               boxShadow: 'none',
               padding: `${pxToRem(10)} ${pxToRem(24)}`,

               '&:hover': {
                  backgroundColor: theme.palette.transparent.main,
                  boxShadow: 'none',
               },

               '&:focus': {
                  boxShadow: 'none',
               },

               '&:active, &:active:focus, &:active:hover': {
                  opacity: 0.85,
                  boxShadow: 'none',
               },

               '&:disabled': {
                  boxShadow: 'none',
               },

               '& .material-icon, .material-icons-round, svg': {
                  fontSize: `${pxToRem(16)} !important`,
               },
            }),
            ...(ownerState.variant === 'text' &&
               ownerState.size === 'small' && {
                  minHeight: pxToRem(32),
                  padding: `${pxToRem(6)} ${pxToRem(16)}`,
                  fontSize: theme.typography.size.xs,

                  '& .material-icon, .material-icons-round, svg': {
                     fontSize: `${pxToRem(12)} !important`,
                  },
               }),
            ...(ownerState.variant === 'text' &&
               ownerState.size === 'large' && {
                  minHeight: pxToRem(47),
                  padding: `${pxToRem(12)} ${pxToRem(28)}`,
                  fontSize: theme.typography.size.sm,

                  '& .material-icon, .material-icons-round, svg': {
                     fontSize: `${pxToRem(22)} !important`,
                  },
               }),
            ...(ownerState.variant === 'text' &&
               ownerState.color === 'primary' && {
                  color: theme.palette.info.main,

                  '&:hover': {
                     color: theme.palette.info.main,
                  },

                  '&:focus:not(:hover)': {
                     color: theme.palette.info.focus,
                     boxShadow: 'none',
                  },
               }),
            ...(ownerState.variant === 'text' &&
               ownerState.color === 'secondary' && {
                  color: theme.palette.secondary.main,

                  '&:hover': {
                     color: theme.palette.secondary.main,
                  },

                  '&:focus:not(:hover)': {
                     color: theme.palette.secondary.focus,
                     boxShadow: 'none',
                  },
               }),
         }),
      },
   },
};
export default button;
