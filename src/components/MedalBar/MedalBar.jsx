import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import goldMedal from '../../assets/gold_medal.png';
import silverMedal from '../../assets/silver_medal.png';
import bronzeMedal from '../../assets/bronze_medal.png';

const MedalBar = ({activeMedal, onMedalClick}) => {
    return (
        <Toolbar sx={{justifyContent: 'space-between', width: '55%'}}>
            <Box>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="gold-medal"
                    onClick={() => onMedalClick('gold')}
                >
                    <img
                        src={goldMedal}
                        alt="Gold Medal"
                        style={{
                            width: 75,
                            height: 75,
                            opacity: activeMedal === 'gold' ? 1 : 0.4,
                            cursor: 'pointer',
                        }}
                    />
                </IconButton>
            </Box>
            <Box>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="silver-medal"
                    onClick={() => onMedalClick('silver')}
                >
                    <img
                        src={silverMedal}
                        alt="Silver Medal"
                        style={{
                            width: 75,
                            height: 75,
                            opacity: activeMedal === 'silver' ? 1 : 0.4,
                            cursor: 'pointer',
                        }}
                    />
                </IconButton>
            </Box>

            <Box>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="bronze-medal"
                    onClick={() => onMedalClick('bronze')}
                >
                    <img
                        src={bronzeMedal}
                        alt="Bronze Medal"
                        style={{
                            width: 75,
                            height: 75,
                            opacity: activeMedal === 'bronze' ? 1 : 0.4,
                            cursor: 'pointer',
                        }}
                    />
                </IconButton>
            </Box>
        </Toolbar>
    )
        ;
};

export default MedalBar;