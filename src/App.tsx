import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@app/contexts/ThemeContext';
import { Router } from '@app/router';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
