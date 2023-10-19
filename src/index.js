import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import './langs/i18n'
import signButton from './img/sign.png';

let theme = createTheme({
  typography: {
    fontFamily: 'Minecraft',
    h1: {
      fontFamily: 'Minecrafter',
      fontSize: '60px',
    },
    h2: {
      fontFamily: 'Minecrafter',
      fontSize: '40px',
    },
    h3: {
      fontFamily: 'Minecrafter',
      fontSize: '20px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundImage: `url(${signButton})`,
          backgroundSize: '128px 55px',
          height: '55px',
          width: '128px',
          fontFamily: 'Minecraft',
          fontSize: '16px',
          border: 'black',
          textShadow: 'none',
          textDecoration: 'none',
          color: 'black',
          '&:hover': {
            MozBoxShadow: '0 0 15px #ccc',
            WebkitBoxShadow: '0 0 15px #ccc',
            boxShadow: '0 0 15px #ccc',
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
