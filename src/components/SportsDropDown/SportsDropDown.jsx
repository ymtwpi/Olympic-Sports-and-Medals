import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
const SportsDropDown = ({ data, value, onChange }) => {
    const uniqueSports = [...new Set(data.map(item => item.Sport))];
    return (
        <FormControl fullWidth sx={{ width: 300 }}>
            <InputLabel>Select a Sport</InputLabel>
            <Select
                value={value}
                onChange={(event) => onChange(event.target.value)}
                label="Select a Sport"
            >
                {uniqueSports.map((sport, index) => (
                    <MenuItem key={index} value={sport}>
                        {sport}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
export default SportsDropDown;