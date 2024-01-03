import {AppBar, Box, Button, IconButton, Typography} from "@mui/material";
import { ShoppingCart} from "@mui/icons-material";
import {Toolbar} from "@mui/material";
import React from 'react';
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";



const Muinavbar = () => {
    return (<Box sx= {{flexGrow:1}}>
<AppBar position="static">
    <Toolbar>
        
        <IconButton size="small" sx= {{mr:2}}>
            <ShoppingCart/>
        </IconButton>
        <Typography variant="h6">
            UpGrad E Shop
        </Typography>
        
        <Typography sx={{flexGrow:1}}>
        <IconButton type="submit" aria-label="search">
      <SearchIcon />
    </IconButton>
        <TextField label= "search" variant= "outlined"/>

        </Typography>
        
    <Typography sx={{flexGrow:1}}>
        <Button  color = "inherit">home</Button>
        <Button color="inherit" > login</Button>
        <Button color="inherit" > Sign in</Button>

    </Typography>
        
    </Toolbar>    

    
</AppBar>
    </Box> 
    );
}
export default Muinavbar;