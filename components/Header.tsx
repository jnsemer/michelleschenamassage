import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Logo } from './Logo';
import { Link, animateScroll as scroll } from "react-scroll";

const pages = [{title:'About', component: 'aboutComponent', id:'about'}, {title:'Treatments', component: 'treatmentComponent', id:'treatments'}, {title:'Contact', component: 'contactComponent', id:'contact'}];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}/>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link to={page.id} smooth key={page.title}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Logo sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}/>
          <Box sx={{ flexGrow: 1, justifyContent:'flex-end', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.id} smooth key={page.title}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'primary', display: 'block' }}
              >
                {page.title}
              </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
