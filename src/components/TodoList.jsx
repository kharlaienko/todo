import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import { TransitionGroup } from "react-transition-group";

const TodoList = ({ items, renderItem = () => {} }) => {
   if (!items.length)
      return <Typography variant="h6">There is no todos</Typography>;
   return (
      !!items.length && (
         <List
            sx={{
               maxHeight: "50svh",
               py: 1,
               overflowY: "auto",
            }}
         >
            <TransitionGroup>
               {items.map((el) => (
                  <Collapse key={el.id}>
                     <ListItem disablePadding>{renderItem(el)}</ListItem>
                     <Divider component="li" />
                  </Collapse>
               ))}
            </TransitionGroup>
         </List>
      )
   );
};

export default TodoList;
