import React from "react";
import { games } from "../data/games";
import GameList from '../components/GameList';
import { Typography } from "@mui/material";

const StorePage = () => {
    return (
        <>
            <Typography variant="h2" gutterBottom component="h1">
                Store
            </Typography>
            <GameList games={games} />
        </>
    );
};

export default StorePage;