import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const MAX_LENGTH = 100;

const CreateTodoForm = ({ onAddItem = () => {} }) => {
   const [todo, setTodo] = useState("");

   const isMaxLength = todo.length >= MAX_LENGTH;

   const errorMaxLength = isMaxLength ? `Max length is ${MAX_LENGTH}` : null;

   const handleSubmit = (e) => {
      e.preventDefault();

      if (isMaxLength) return;

      onAddItem(todo);
      setTodo("");
   };

   return (
      <form onSubmit={handleSubmit}>
         <Stack direction="row" alignItems="center">
            <TextField
               value={todo}
               onChange={(e) => setTodo(e.target.value)}
               fullWidth
               placeholder="I neeed to ..."
               variant="filled"
               label="Create a Todo"
               helperText={errorMaxLength}
               error={isMaxLength}
            />

            <Stack
               direction="column"
               justifyContent="center"
               sx={{ marginLeft: 1 }}
            >
               <IconButton size="large" disabled={isMaxLength} type="submit">
                  <AddCircleOutlineIcon fontSize="28" />
               </IconButton>
            </Stack>
         </Stack>
      </form>
   );
};

export default CreateTodoForm;
