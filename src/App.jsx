import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material';

// routing
import AppRoutes from 'routes';

// defaultTheme
import themes from 'themes';

function App() {
  const customization = { borderRadius: 12, fontFamily: '', isOpen: [] };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <AppRoutes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
