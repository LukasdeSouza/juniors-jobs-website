import { AppBar, Avatar, Link, Stack } from '@mui/material';
import './App.css';
import Logo from './assets/logo_size_invert.jpg'
import AppBarNavigation from './components/appbar';
import Contributes from './pages/contributes';


function App() {
  return (
    <>
      <AppBarNavigation />
      <Contributes/>
    </>
  );
}

export default App;
