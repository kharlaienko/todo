import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export const FILTERS = { all: "all", current: "current", checked: "checked" };

const toUpperCase = (value) => {
   return value.charAt(0).toUpperCase() + value.slice(1, value.length);
};

const Filter = ({ setFilter, filter }) => {
   return (
      <Stack direction="row" justifyContent="space-between" alignItems="center">
         <Typography sx={{ mr: 1 }}>Filer by:</Typography>

         {Object.keys(FILTERS).map((filterEl) => {
            return (
               <Chip
                  key={filterEl}
                  sx={{ mx: 0.5 }}
                  label={toUpperCase(filterEl)}
                  variant={filter === filterEl ? "outlined" : ""}
                  size="small"
                  onClick={() => setFilter(filterEl)}
               />
            );
         })}
      </Stack>
   );
};

export default Filter;
