
import React from 'react'
import './App.css'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';

import { Link, Outlet } from 'react-router-dom';

function App() {
  
// how to change css style in react? The <Outlet /> component is used to render the child routes of the parent route, but in wrong positioon of the screen
  return (
    <>
     <div className="App">
    
      <nav>
        <Link to={"/"}>Customers</Link>
        <Link to={"/TrainingList"}>Training</Link>
        <Link to={"/ShowCalendar"}>Calendar</Link>
      </nav>
     
    </div>
      <div>
      <Container maxWidth="xl">
      <CssBaseline />
      <AppBar position='static'>
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
