import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { AtomDevtools } from './components/AtomDevtools.jsx';
import GlobalStyles from './styles/globalStyles.js';
import { theme } from './styles/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AtomDevtools>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </AtomDevtools>
    </BrowserRouter>
  </React.StrictMode>,
);
