
import React from 'react'
import './App.css'
import CustomerList from './Components/CustomerList'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';

import { Link, Outlet } from 'react-router-dom';

function App() {
  

  return (
    <>
     <div className="App">
    
      <nav>
        <Link to={"/"}>Customers</Link>
        <Link to={"/TrainingList"}>Training</Link>
        <Link to={"/contact"}>Calendar</Link>
      </nav>
     
    </div>
      <div>
      <Container maxWidth="xl">
      <CssBaseline />
      <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Personal Trainer
          </Typography>
          </Toolbar>
          </AppBar>
          <Outlet />
      </Container>
      </div>
  
    </>
  )
}

export default App
