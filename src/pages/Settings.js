import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";
import SelectField from './../components/SelectFields';
import 'boxicons';

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const history = useHistory();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
        <Typography>You're Welcome!!</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some Went Wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/questions");
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectField options={response.trivia_categories} label="Category" />
      <SelectField options={difficultyOptions} label="Difficulty" />
      <SelectField options={typeOptions} label="Type" />
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" hover='contained' type="submit" marginBottom='24px' >
          Get Started<box-icon color='white' name='right-arrow-circle'></box-icon>
        </Button>
      </Box>
      
    </form>
  );
};

export default Settings;