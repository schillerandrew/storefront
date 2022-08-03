import { connect } from 'react-redux';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';

const simpleCart = (props) => {

  return (
    <>
    <h2>Cart</h2>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        margin: '25px',
      }}>
        {props.shoppingCart.map((product, idx) => (
          <Card sx={{ margin: '10px' }} raised key={`product-${idx}`}>
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">Delete</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    shoppingCart: state.cart.shoppingCart,
  }
}

export default connect(mapStateToProps)(simpleCart);