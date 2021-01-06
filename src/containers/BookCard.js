import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cart from '../actions/cart';
import * as description from '../actions/description';
import BookCard from '../components/BookCard';


const mapStateToProps = ({ cart }, { id }) => ({
  addedCount: cart.items.reduce((count, book) => count + (book.id === id ? 1 : 0), 0),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cart, dispatch),
  ...bindActionCreators(description, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookCard);
