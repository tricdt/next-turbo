import { HTMLNextUIProps } from '@types';
export type ReactRef<T> =
   | React.RefObject<T>
   | React.MutableRefObject<T>
   | React.Ref<T>;
import { useDOMRef } from '../util/dom';
interface Props extends HTMLNextUIProps {
   /**
    * Ref to the DOM node.
    */
   /**
    * Whether the button should display a ripple effect on press.
    * @default false
    */
   disableRipple?: boolean;
   ref?: ReactRef<HTMLButtonElement | null>;
}
export type UseButtonProps = Props;
export function useButton(props: UseButtonProps) {
   const { as, ref } = props;
   const domRef = useDOMRef(ref);
   const Component = as || 'button';
   return {
      Component,
      domRef,
   };
}
