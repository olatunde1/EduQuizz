import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Settings from './pages/Settings'
import Questions from './pages/Questions'
import FinalScreen from './pages/FinalScreen'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system';

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
        <Switch>
          <Route exact path='/' >
           <Typography variant='h4' color='white' fontWeight='bold' bgcolor='blue' marginTop='10%' padding>Elementary School Students Info</Typography>
          <Box display='grid' justifyItems='start' marginTop='16px' padding>
            <Typography variant='p' color='blue' fontWeight='bold' padding >Student Name: Ezechukwu Grace</Typography>
            <Typography variant='p' color='blue' fontWeight='bold' padding >Class: SS3 Blue</Typography>
            <Typography variant='p' color='blue' fontWeight='bold' padding>Age: 18yrs</Typography>
          </Box>
            <Settings />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route path='/score'>
            <FinalScreen />
          </Route>
        </Switch>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
