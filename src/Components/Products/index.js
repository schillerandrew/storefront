import { connect } from 'react-redux';

const Products = (props) => {
  let products = props.products.filter(product => product.category === props.activeCategory);

  return (
    <>
    <h3>Products</h3>
    {products.map((item, idx) => <p>{item.name}</p>)}
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    products: state.storefront.products,
    activeCategory: state.storefront.activeCategory

  }
}

export default connect(mapStateToProps)(Products);