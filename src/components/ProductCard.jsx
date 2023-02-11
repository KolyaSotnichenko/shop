import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductCard = ({item}) => {


    return (
        <Card sx={{ maxWidth: 250, flex: 1}}>
            <Link style={{textDecoration: 'none', color: 'black'}} to={`/product/${item.id}`} state={item} >
                <CardActionArea>
                    {/* <CardMedia
                        component="img"
                        height="250"
                        sx={{
                            objectFit: 'contain'
                        }}
                        image={item.colors[0].images[0]}
                        alt="green iguana"
                    /> */}
                    <LazyLoadImage 
                        src={item.colors[0].images[0]}
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
                            {`${item.colors[0].price}$`}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Купити
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Link>
        </Card>
    )
}

export default ProductCard