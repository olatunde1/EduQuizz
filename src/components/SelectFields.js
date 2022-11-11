import React, { useState } from 'react'
import { Box } from '@mui/system';
import { FormControl, InputLabel,MenuItem,Select } from '@mui/material';

const SelectFields = props => {
    const {label} = props;
    const [value, setValue] =useState('')

    const handleChange = ()=> {}
  return (
    <Box mt={3} width='100%'>
        <FormControl fullWidth size='small'>
            <InputLabel>{label}</InputLabel>
            <Select value={value} label={label} onChange={handleChange}>
                <MenuItem>Option 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
            </Select>
        </FormControl>
    </Box>
  )
}

export default SelectFields