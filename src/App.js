import { AppBar, Avatar, Link, Stack } from '@mui/material';
import './App.css';
import Logo from './assets/logo_size_invert.jpg'
import AppBarNavigation from './components/appbar';
import JobsPage from './pages/jobs';


function App() {
  return (
    <>
      <AppBarNavigation />
      <JobsPage/>
    </>
  );
}

export default App;
