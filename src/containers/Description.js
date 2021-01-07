import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as description from '../actions/description';
import Description from '../components/Description';




const mapStateToProps = (books, description) => ({
    books: books.items,
    isReady: books.isReady,
    bId: description.bId,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(description, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Description);
