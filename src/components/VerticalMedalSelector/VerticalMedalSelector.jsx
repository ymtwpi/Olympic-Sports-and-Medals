import React, { useState } from 'react';
import goldMedal from '../../assets/gold_medal.png';
import silverMedal from '../../assets/silver_medal.png';
import bronzeMedal from '../../assets/bronze_medal.png';
const VerticalMedalSelector = ({ onMedalHover }) => {
    const [hoveredMedal, setHoveredMedal] = useState(null);

    const handleMouseEnter = (medal) => {
        setHoveredMedal(medal);
        onMedalHover(medal);
    };

    const handleMouseLeave = () => {
        setHoveredMedal(null);
        onMedalHover(null);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <img
                src={goldMedal}
                alt="Gold Medal"
                onMouseEnter={() => handleMouseEnter('Gold')}
                onMouseLeave={handleMouseLeave}
                style={{
                    cursor: 'pointer',
                    borderRadius: '50%'
                }}
            />
            <img
                src={silverMedal}
                alt="Silver Medal"
                onMouseEnter={() => handleMouseEnter('Silver')}
                onMouseLeave={handleMouseLeave}
                style={{
                    cursor: 'pointer',
                    borderRadius: '50%'
                }}
            />
            <img
                src={bronzeMedal}
                alt="Bronze Medal"
                onMouseEnter={() => handleMouseEnter('Bronze')}
                onMouseLeave={handleMouseLeave}
                style={{
                    cursor: 'pointer',
                    borderRadius: '50%'
                }}
            />
        </div>
    );
};

export default VerticalMedalSelector;