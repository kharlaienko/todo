import { useMemo, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CreateTodoForm from "./components/CreateTodoForm";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleChecked } from "./services/todo";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import Filter, { FILTERS } from "./components/Filter";

function App() {
   const [filter, setFilter] = useState(FILTERS.all);

   const todos = useSelector((state) => state.todo.list);
   const dispatch = useDispatch();

   const completedTodosCount = todos?.filter((el) => el.checked)?.length || 0;

   const filteredTodos = useMemo(() => {
      if (!todos.length) return [];

      if (filter === FILTERS.all) return todos;

      if (filter === FILTERS.checked) return todos.filter((el) => el.checked);

      return todos.filter((el) => !el.checked);
   }, [todos, filter]);

   return (
      <Container sx={{ height: "100%" }}>
         <Stack
            justifyContent="center"
            alignItems="center"
            direction="column"
            sx={{ height: "100%" }}
         >
            <Typography
               variant="h3"
               component="h1"
               sx={{
                  textAlign: "center",
                  marginBottom: 3,
                  color: "white",
                  textShadow: "1px 4px 6px rgba(0,0,0,0.3)",
               }}
            >
               TODO LIST
            </Typography>

            <Card
               sx={{
                  maxWidth: "800px",
                  width: "100%",
                  boxShadow: "5px 5px 10px rbga(0,0,0,0.4)",
               }}
            >
               <CardContent>
                  <CreateTodoForm
                     onAddItem={(todo) => dispatch(addTodo(todo))}
                  />

                  {!!todos.length && (
                     <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ mt: 2 }}
                     >
                        <Filter filter={filter} setFilter={setFilter} />

                        <Stack
                           direction="row"
                           justifyContent="space-between"
                           alignItems="center"
                        >
                           <Box component="span" color="green">
                              {completedTodosCount}
                           </Box>
                           /{todos.length}
                        </Stack>
                     </Stack>
                  )}

                  <Box sx={{ mt: 1 }}>
                     <TodoList
                        items={filteredTodos}
                        renderItem={(item) => (
                           <TodoItem
                              todo={item}
                              onCheckedChange={(val) =>
                                 dispatch(
                                    toggleChecked({
                                       id: item.id,
                                       checked: val,
                                    })
                                 )
                              }
                              onDelete={() =>
                                 dispatch(deleteTodo({ id: item.id }))
                              }
                           />
                        )}
                     />
                  </Box>
               </CardContent>
            </Card>
         </Stack>
      </Container>
   );
}

export default App;
