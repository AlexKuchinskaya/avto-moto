import PropTypes from 'prop-types';
export const TransportPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })),
  name: PropTypes.string.isRequired,
  price: PropTypes.shape({
    current: PropTypes.string.isRequired,
    old: PropTypes.string.isRequired,
    credit: PropTypes.string.isRequired,
  }),
  paremetres: PropTypes.shape({
    fuel: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    horsepower: PropTypes.string.isRequired,
    volume: PropTypes.string.isRequired
  }),
  characteristics: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  reviews: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string.isRequired,
    pros: PropTypes.string.isRequired,
    cons: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }))
});
