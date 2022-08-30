
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import "./Navbar.css";
import { useState } from 'react';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

interface navbarprops{
  busca:string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}



export default function NavBar({busca, setBusca}:navbarprops) {
  
 
  
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent' >
        <Toolbar>
        <div className='header_text'>
            <h1>Fit store</h1>
          </div>
          <Search>
          <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          
            <StyledInputBase
              placeholder="Search…"
              value={busca}
              onChange={(e)=> setBusca(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
            />
            
          </Search>
        </Toolbar>
      </AppBar>
        </Box>
        <div className='banner'>
        <h1>surpass your limits with style!</h1>
        </div>
    </div>
);
}
