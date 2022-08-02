import { connect } from 'react-redux';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { displayProducts } from '../../store/departments.js';

const Categories = (props) => {

  const { departments, displayProducts } = props;
  return (
    <>
      <h1>Departments</h1>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        margin: '25px',
      }}>
        {departments.map((department, idx) => (
          <Card sx={{ margin: '10px' }} raised key={`candidate-${idx}`}>
            <CardContent>
              <Typography variant="h5">{department.name}</Typography>
              <Typography variant="hp">{department.desc}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" onClick={() => displayProducts(department)}>Explore</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};

const mapStateToProps = ({ departments }) => {
  return {
    departments: departments.departments,
    active: departments.active,
  };
}

const mapDispatchToProps = { displayProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);