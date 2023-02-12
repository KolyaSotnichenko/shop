import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const Filter = (props) => {

    const {chooseFilter} = props

    const [selectedFilter, setSelectedFilter] = useState('all')

    const [filters, setFilters] = useState([
        {
            key: 'all',
            name: 'Всі'
        },
        {
            key: 'fromLagerToSmaller',
            name: 'Найдорощі'
        },
        {
            key: 'fromSmallerToLager',
            name: 'Найдешевші'
        },
        {
            key: 'popular',
            name: 'Популярні'
        },
    ])

    const active = {color: 'green'}
    const inactive ={}

  return (
    <Box
        component='ul'
        sx={{
            display: 'flex',
            gap: '20px',
            listStyle: 'none',
            mb: '30px'
        }}
    >
        {filters.map(filter => (
            <Box 
                component='li' 
                key={filter.key}
                sx={{
                    cursor: 'pointer',
                    color: selectedFilter == filter.key ? active : inactive,
                    '&:hover': {
                        color: 'red',
                    }
                }}
                onClick={() => {
                    setSelectedFilter(filter.key)
                    chooseFilter(filter.key)
                }}
            >
                <Typography>
                    {filter.name}
                </Typography>
            </Box>
        ))}
    </Box>
  )
}

export default Filter