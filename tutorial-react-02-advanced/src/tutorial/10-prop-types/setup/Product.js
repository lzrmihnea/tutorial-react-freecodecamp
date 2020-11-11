import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
  const imgUrl = image && image.url
  return (
    <article className='product'>
      <h4>single product</h4>
      <img src={imgUrl || defaultImage} alt={name || 'default name'} /> 
    {/* adding such operators for default behavior is possible, but more messy than using defaultProps */}
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>);
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: { url: defaultImage },
// };

export default Product;
