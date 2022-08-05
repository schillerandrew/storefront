import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { addToCart } from '../../store/simplecart';
import { getProducts} from '../../store/products';

const Products = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  let products = props.products.filter(product => product.category === props.activeCategory);

  return (
    <>
      <h2>Products: {props.activeCategory}</h2>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        margin: '25px',
      }}>
        {products.map((product, idx) => (
          <Card sx={{ margin: '10px' }} raised key={`item-${idx}`}>
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="h6">{product.desc}</Typography>
              <Typography variant="hp">In stock: {product.inStock}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" onClick={() => props.addToCart(product)}>Add to Cart</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    activeCategory: state.active
  }
};

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);