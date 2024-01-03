import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const MuiSelect =()=>{
    return (
        <>
        <FormControl sx= {{width:"200px", height:"50px"}} >
     
     <InputLabel id="select">Sort By</InputLabel>
        <Select id="select" labelId="SortBy">
        <MenuItem value={1}>Default</MenuItem>
        <MenuItem value={2}>Price: high to low</MenuItem>
        <MenuItem value={3}>Price: low to high</MenuItem>
        <MenuItem value={4}>Newest</MenuItem>
      </Select>     
      </FormControl>
        </>
);
}
export default MuiSelect;