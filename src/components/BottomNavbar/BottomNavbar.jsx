import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
const BottomNavbar = ({ season, onChange }) => {
    const handleSeasonChange = (event, newSeason) => {
        if (newSeason !== null) {
            onChange(newSeason);
        }
    };
    return (
        <ToggleButtonGroup
            value={season}
            color="primary"
            size={'large'}
            exclusive
            onChange={handleSeasonChange}
            aria-label="Season Selection"
            sx={{ gap: 2 }}
        >
            <ToggleButton value="summer" aria-label="Summer">
                Summer
            </ToggleButton>
            <ToggleButton value="winter" aria-label="Winter">
                Winter
            </ToggleButton>
        </ToggleButtonGroup>
    );
};
export default BottomNavbar;
