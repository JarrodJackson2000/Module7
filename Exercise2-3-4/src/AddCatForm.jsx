import { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";

function AddCatForm({ stateProp }) {
  const [submitResult, setSubmitResult] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.firstName.value) {
      setSubmitResult("You must enter Name:");
    } else if (!e.target.latinName.value) {
      setSubmitResult("You must enter Latin Name:");
    } else if (!e.target.imageUrl.value) {
      setSubmitResult("You must enter Image Url:");
    } else {
      setSubmitResult("Submitted successfully");
      stateProp((originalCats) => [
        ...originalCats,
        {
          name: e.target.firstName.value,
          latinName: e.target.latinName.value,
          imageUrl: e.target.imageUrl.value,
          id: originalCats.length + 1,
        },
      ]);
    }
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "35vh",
      }}
    >
      <Typography variant="h4">Add a new cat</Typography>
      <Box mb={2}>
        <TextField id="firstName" label="Name" variant="outlined" />
      </Box>
      <Box mb={2}>
        <TextField id="latinName" label="Latin Name" variant="outlined" />
      </Box>
      <Box mb={2}>
        <TextField id="imageUrl" label="Image URL" variant="outlined" />
      </Box>
      <Box mb={2}>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
      <div>{submitResult}</div>
    </Box>
  );
}

export default AddCatForm;
