import { connect } from 'react-redux';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { selectCategory } from '../../store/storefront.js';

const Categories = (props) => {

  const { categories, selectCategory } = props;
  return (
    <>
      <h1>Departments</h1>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        margin: '25px',
      }}>
        {categories.map((category, idx) => (
          <Card sx={{ margin: '10px' }} raised key={`candidate-${idx}`}>
            <CardContent>
              <Typography variant="h5">{category.name}</Typography>
              <Typography variant="hp">{category.desc}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" onClick={() => selectCategory(category)}>Explore</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories,
    activeCategory: categories.activeCategory,
  };
}

const mapDispatchToProps = { selectCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);