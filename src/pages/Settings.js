import React from 'react'
import SelectFields from './../components/SelectFields'
import { Box } from '@mui/system'
import {Button} from '@mui/material';
import TextFieldComp from './../components/TextFieldComp';



const Settings = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
   <form onSubmit={handleSubmit}>
    <SelectFields label='Category' />
    <SelectFields label='Difficulty' />
    <SelectFields label='Type' />
    <TextFieldComp />
    <Box mt={3} width='100%'>
      <Button fullWidth variant='contained' type='submit'>Get Started</Button>
    </Box>
   </form>
  )
}

export default Settings