import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CountryPickerDropdown = ({ data, value, onChange }) => {
    return (
        <FormControl sx={{ width: 200 }}>
            <InputLabel>Choose a Country</InputLabel>
            <Select
                value={value}
                onChange={(event) => onChange(event.target.value)}
                label="Choose a Country"
            >
                {data.map((item) => (
                    <MenuItem key={item.Code} value={item.Country}>
                        {item.Country}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CountryPickerDropdown;