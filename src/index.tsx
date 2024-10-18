import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { LanguageProvider } from './context/LanguageProvider'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode> {/* Modo estricto de React */}
    <ChakraProvider> {/* Proveedor de estilos */}
      <LanguageProvider> {/* Proveedor de idiomas */}
        <App /> {/* Componente principal de la aplicación */}
      </LanguageProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
