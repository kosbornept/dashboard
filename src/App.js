import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from './scenes/global/Topbar';
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Calendar from './scenes/calendar';
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";
import NotFound from "./scenes/notfound";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path="/">
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="" element={<Navigate to="dashboard" />} />
              </Route>

              <Route path="/team">
                <Route path="team" element={<Team />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="invoices" element={<Invoices />} />
              </Route>

              <Route path="/admin">
                <Route path="form" element={<Form />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="faq" element={<FAQ />} />
              </Route>
            
              <Route path="/sales">
                <Route path="bar" element={<Bar />} />
                <Route path="pie" element={<Pie />} />
                <Route path="line" element={<Line />} />
                <Route path="geography" element={<Geography />} /> 
              </Route> 

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;