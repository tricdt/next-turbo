import { ButtonComponent, ButtonProps } from './button.types';
import { PolymorphicComponentProp, PolymorphicRef } from '@types';
import {} from '@salaui/system';
import { Card } from '@repo/ui/card';
import React from 'react';
const Button = React.forwardRef(
   <C extends React.ElementType = 'button'>(
      props: PolymorphicComponentProp<C, ButtonProps>,
      ref?: PolymorphicRef<C>
   ) => {
      const { as } = props;
      const Component = as || 'button';
      return <Component ref={ref}></Component>;
   }
);
Button.displayName = 'SalaUI.Button';
export default Button as ButtonComponent;
