import { createContext, useMemo, useReducer } from 'react';

const MaterialUI = createContext<{}>(null);
interface StateTypes {
   miniSidenav: boolean;
   transparentSidenav: boolean;
   whiteSidenav: boolean;
   sidenavColor:
      | 'primary'
      | 'secondary'
      | 'info'
      | 'success'
      | 'warning'
      | 'error'
      | 'light'
      | 'dark';
   transparentNavbar: boolean;
   fixedNavbar: boolean;
   openConfigurator: boolean;
   direction: 'ltr' | 'rtl';
   layout: 'dashboard' | 'page';
   darkMode: boolean;
}
interface ActionTypes {
   type:
      | 'MINI_SIDENAV'
      | 'TRANSPARENT_SIDENAV'
      | 'WHITE_SIDENAV'
      | 'SIDENAV_COLOR'
      | 'TRANSPARENT_NAVBAR'
      | 'FIXED_NAVBAR'
      | 'OPEN_CONFIGURATOR'
      | 'DIRECTION'
      | 'LAYOUT'
      | 'DARKMODE';
   value: any;
}

function reducer(state: StateTypes, action: ActionTypes) {
   switch (action.type) {
      case 'MINI_SIDENAV': {
         return { ...state, miniSidenav: action.value };
      }
      case 'TRANSPARENT_SIDENAV': {
         return { ...state, transparentSidenav: action.value };
      }
      case 'WHITE_SIDENAV': {
         return { ...state, whiteSidenav: action.value };
      }
      case 'SIDENAV_COLOR': {
         return { ...state, sidenavColor: action.value };
      }
      case 'TRANSPARENT_NAVBAR': {
         return { ...state, transparentNavbar: action.value };
      }
      case 'FIXED_NAVBAR': {
         return { ...state, fixedNavbar: action.value };
      }
      case 'OPEN_CONFIGURATOR': {
         return { ...state, openConfigurator: action.value };
      }
      case 'DIRECTION': {
         return { ...state, direction: action.value };
      }
      case 'LAYOUT': {
         return { ...state, layout: action.value };
      }
      case 'DARKMODE': {
         return { ...state, darkMode: action.value };
      }
      default: {
         throw new Error(`Unhandled action type: ${action.type}`);
      }
   }
}

function MaterialUIControllerProvider({
   children,
}: {
   children: React.ReactNode;
}) {
   const initialState: StateTypes = {
      miniSidenav: false,
      transparentSidenav: false,
      whiteSidenav: false,
      sidenavColor: 'info',
      transparentNavbar: true,
      fixedNavbar: true,
      openConfigurator: false,
      direction: 'ltr',
      layout: 'page',
      darkMode: false,
   };
   const [controller, dispatch] = useReducer(reducer, initialState);

   const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

   return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
}
