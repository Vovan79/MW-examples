import { connect } from 'react-redux';
import Notifier from './Notifier';
import { AppState } from '../../../redux/store';
import { deleteRequestsError } from '../../../redux/modules/userData/actions';
import { selectRequestErrors } from '../../../redux/modules/userData/selectors';

const mapDispatchToProps = {
  deleteRequestsError,
};
const mapStateTopProps = (state: AppState) => ({
  requestErrors: selectRequestErrors(state),
});

export default connect(mapStateTopProps, mapDispatchToProps)(Notifier);
