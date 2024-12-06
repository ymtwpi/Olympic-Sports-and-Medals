import React from 'react';

const Legend = ({ data, colorScale }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            {data.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <div
                        style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: colorScale(item.value),
                            marginRight: '10px',
                            borderRadius: '4px'
                        }}
                    ></div>
                    <span>{item.label}</span>
                </div>
            ))}
        </div>
    );
};

export default Legend;