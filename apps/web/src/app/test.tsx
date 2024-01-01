import React from 'react';
import { Button } from '@components/button';
import { NextButton } from '@components/NextButton';
const Test = () => {
   return (
      <>
         <Button as="a" href="#!">
            Test
         </Button>
         <NextButton as="a" href="#!" />
      </>
   );
};

export default Test;
