import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductCard = ({item, addItem}) => {


    return (
        <Card sx={{ maxWidth: 250, flex: 1}}>
            <Link style={{textDecoration: 'none', color: 'black'}} to={`/product/${item.id}`} state={item} >
                <CardActionArea>
                    <LazyLoadImage 
                        src={item.image}
                        height='250px'
                        width="100%"
                        effect={blur}
                        style={{
                            objectFit: 'contain'
                        }}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            variant="h5"
                        >
                            {item.name}
                        </Typography>
                        <Typography 
                            gutterBottom 
                            variant="h6"
                        >
                            {`${item.price}$`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                <Button size="medium" color="primary" onClick={() => addItem(item)}>
                    Купити
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard