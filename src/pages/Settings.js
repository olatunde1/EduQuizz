
import SelectFields from './../components/SelectFields'
import { Box } from '@mui/system'
import {Button, CircularProgress, Typography} from '@mui/material';
import TextFieldComp from './../components/TextFieldComp';
import useAxios from './../hooks/useAxios';



const Settings = () => {
  const { response,error,loading } = useAxios({url:'/api_category.php'});

  if(loading){
    return(
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }

  if(error){
    return(
      <Typography>
        Something Went Wrong!
      </Typography>
    )
  }



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