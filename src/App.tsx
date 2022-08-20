import { useTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import Layout from './includes/Layout';
import { appTheme, routes } from './utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App () {
  const theme = useTheme();
  const { dark, light } = appTheme;
  const selectedTheme = light;
  return (
    <ThemeProvider theme={{...theme, colors : selectedTheme}}>
        <ToastContainer />
      <Layout
        routes={routes}
      />
    </ThemeProvider>
  )
}
