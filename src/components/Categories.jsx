import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const Categories = (props) => {

    const { chooseCategory } = props

    const [selectedCategory, setSelectedCategory] = useState('all')

    const [categories, setCategories] = useState([
        {
            key: 'all',
            name: 'Всі'
        },
        {
            key: 'smartphones',
            name: 'Смартфони'
        },
        {
            key: 'laptops',
            name: 'Ноутбуки'
        },
        {
            key: 'tablets',
            name: 'Планшети'
        },
    ])

    const active = { color: 'green' }
    const inactive = {}

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
            {categories.map((category, index) => (
                <Box
                    component='li'
                    key={category.key}
                    sx={{
                        cursor: 'pointer',
                        color: selectedCategory == category.key ? active : inactive,
                        '&:hover': {
                            color: 'red',
                        }
                    }}
                    onClick={() => {
                        setSelectedCategory(category.key)
                        chooseCategory(category.key)
                    }}
                >
                    <Typography>
                        {category.name}
                    </Typography>
                </Box>
            ))}
        </Box>
    )
}

export default Categories