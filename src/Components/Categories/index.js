import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { activeCategory } from '../../store/active';
import { getCategories } from '../../store/categories';

const Categories = (props) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCategories())
  }, []);

  console.log('CATEGORIES', props);

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
              <Button variant="contained" onClick={() => props.activeCategory(category)}>Explore</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log('CATS STATE=', state);
  return {
    categories: state.categories,
    // active: state.active.activeCategory,
  };
}

const mapDispatchToProps = { activeCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);