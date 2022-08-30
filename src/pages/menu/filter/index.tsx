import filters from "./filter.json";
import "./filter.css";
import { Grid } from "@mui/material";

interface Option {
  label: string;
  id: number;
}

interface Filterprops {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtertab({ filter, setFilter }: Filterprops) {
  function Selectedfilter(option: Option) {
    if (filter === option.id) return setFilter(null);

    return setFilter(option.id);
  }
  return (
      <Grid container alignContent={'center'} rowSpacing={2} className="filter_options">
        {filters.map((option) => (
          <Grid item xs={9} sm={6} lg={2} md={5}>
            <button
              className="filter_buttons"
              key={option.id}
              onClick={() => {
                Selectedfilter(option);
              }}
            >
              {option.label}
            </button>
          </Grid>
        ))}
      </Grid>

  );
}
