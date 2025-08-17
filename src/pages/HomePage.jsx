import React from "react";
import { Link } from 'react-router-dom';
import { Box, Typography, Button,  Container } from "@mui/material";

const HomePage = () => {
    return (
        <Container maxWidth='md'>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                mt:8,
            }}>
                <Typography variant="h2" component="h2" gutterBottom >
                    Welcome to the GameStore
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph >
                    The best place to buy digital games online. explore our vast collections.
                </Typography>
                <Button variant="contained" size="large" component={Link} to="/store" sx={{mt:3}} >
                    Browse Store
                </Button>
            </Box>
        </Container>
    );
};

export default HomePage;