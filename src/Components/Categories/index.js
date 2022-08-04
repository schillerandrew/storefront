import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { selectCategory, getCategories } from '../../store/storefront';

const Categories = (props) => {
  let dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  setTimeout( () => {
    console.log('PROPS', props);
  }, 5000);
  return (
    <>
      <h2>Departments</h2>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        margin: '25px',
      }}>
        {props.categories.map((category, idx) => (
          <Card sx={{ margin: '10px' }} raised key={`category-${idx}`}>
            <CardContent>
              <Typography variant="h5">{category.name}</Typography>
              <Typography variant="hp">{category.desc}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" onClick={() => props.selectCategory(category)}>Explore</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.storefront.categories,
    activeCategory: state.storefront.activeCategory,
  };
}

const mapDispatchToProps = { selectCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);