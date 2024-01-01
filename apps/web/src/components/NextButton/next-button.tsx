import React from 'react';
import { useButton, UseButtonProps } from './use-next-button';
import { forwardRef } from '../util/forward-ref';
export interface ButtonProps extends UseButtonProps {}
const NextButton = forwardRef<'button', ButtonProps>((props, ref) => {
   const { Component, domRef } = useButton({});
   return <Component ref={domRef}>NextButton</Component>;
});

export default NextButton;
