import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({
   todo,
   onDelete = () => {},
   onCheckedChange = () => {},
}) => {
   return (
      <Stack
         direction="row"
         justifyContent="space-between"
         alignItems="center"
         sx={{ width: "100%" }}
      >
         <Typography
            variant="h6"
            sx={{
               textDecoration: todo.checked ? "line-through" : "none",
               transition: "all .3s",
               width: "100%",
            }}
            onClick={() => onCheckedChange(!todo.checked)}
         >
            {todo.name}
         </Typography>

         <IconButton size="large" onClick={onDelete}>
            <DeleteIcon fontSize="28" />
         </IconButton>
      </Stack>
   );
};

export default TodoItem;
