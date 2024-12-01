import PropTypes from 'prop-types';
// import axios from 'utils/axios';
import ProductDetails from 'views/apps/e-commerce/product-details';

// ==============================|| PAGE ||============================== //

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }) {
  const { id } = params;

  return <ProductDetails id={id} />;
}

Page.propTypes = {
  params: PropTypes.string,
  id: PropTypes.number
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  // todo: this need to look back again once we implemted SWR
  // const response = await axios.get('/api/products/list');

  // return response.data.products.map((prod: Products) => ({
  //   id: prod.id
  // }));

  const response = [1, 2, 3, 5];

  return response.map((prodId) => ({
    id: prodId.toString()
  }));
}
