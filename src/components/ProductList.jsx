import { Box } from '@mui/system'
import ProductCard from './ProductCard'

const ProductList = (props) => {

    const { products } = props

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