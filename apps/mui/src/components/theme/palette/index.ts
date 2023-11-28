import { PaletteMode, PaletteOptions } from '@mui/material';
import light from './light';
import dark from './dark';

export default (mode: PaletteMode): PaletteOptions => {
   return {
      mode,
      ...(mode === 'light' ? light : dark),
   };
};
