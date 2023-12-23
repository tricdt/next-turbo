'use client';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import theme from '../theme';
import {
   Root,
   Header,
   EdgeSidebar,
   EdgeTrigger,
   SidebarContent,
} from '@mui-treasury/layout';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import { AppBar, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Sticky from '../layout';
ClassNameGenerator.configure((componentName) =>
   componentName.replace('Mui', '')
);
export default function ThemeRegistry({
   children,
}: {
   children: React.ReactNode;
}) {
   const trigger = useScrollTrigger({
      // target: window ? window() : undefined,
   });
   return (
      <ThemeProvider theme={theme}>
         {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
         <CssBaseline />
         {children}
      </ThemeProvider>
   );
}
