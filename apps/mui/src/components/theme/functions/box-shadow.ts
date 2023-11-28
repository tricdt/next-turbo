import rgba from './rgba';
import pxToRem from './px-to-rem';

function boxShadow(
   offset: number[],
   radius: number[],
   color: string,
   opacity: number,
   inset: string = ''
): string {
   const [x, y] = offset;
   const [blur, spread] = radius;

   return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(
      spread
   )} ${rgba(color, opacity)}`;
}

export default boxShadow;
