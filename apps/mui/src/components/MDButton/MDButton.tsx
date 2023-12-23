import React from 'react';
import ButtonRoot, { ButtonProps } from './MDButtonRoot';
const Button: React.FC<ButtonProps> = React.forwardRef(
   (
      {
         color = 'primary',
         variant = 'contained',
         size,
         circular,
         iconOnly = false,
         children,
         ...rest
      },
      ref
   ) => {
      return (
         <ButtonRoot
            {...rest}
            ref={ref}
            size={size}
            ownerState={{ color, variant, size, circular, iconOnly }}
            variant={variant === 'gradient' ? 'contained' : variant}
         >
            {children}
         </ButtonRoot>
      );
   }
);

export default Button;
