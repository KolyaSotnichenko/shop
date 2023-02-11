import { FormControl, MenuItem, Select, Typography } from '@mui/material'
import { Box } from '@mui/system'
import ProductCard from './ProductCard'

const ProductList = (props) => {

    const { products } = props

    const handleInputChange = (e) => {
        setQuantity(e.target.value)
    }

  return (
    <>
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px'
            }}
        >
            {products && products.map((item, index) => (
                <ProductCard key={index} item={item} />
            ))}
        </Box>
    </>
  )
}

export default ProductList