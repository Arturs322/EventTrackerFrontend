import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" color="default" elevation={0}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Material Kit 3
                </Typography>

                {/* Pages Dropdown */}
                <Box>
                    <Button onClick={handleMenuClick}>Pages</Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Page 1</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Page 2</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Page 3</MenuItem>
                    </Menu>
                </Box>

                {/* Sections Dropdown */}
                <Box>
                    <Button onClick={handleMenuClick}>Sections</Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Section 1</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Section 2</MenuItem>
                    </Menu>
                </Box>

                {/* Other Links */}
                <Button>Docs</Button>
                <Button>Github</Button>

                {/* Upgrade Button */}
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: '10px' }}
                >
                    Upgrade to Pro
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
