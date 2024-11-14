import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#333' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Olympic Dashboard
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="inherit" component={Link} to="/">HeatMap</Button>
                    <Button color="inherit" component={Link} to="/medalsOverTime">Medals Over Time</Button>
                    <Button color="inherit" component={Link} to="/medalsPieChart">Pie Chart</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;