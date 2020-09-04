import { connect } from 'react-redux';
import Login from './Login';
import { AppState } from '../../../redux/store';
import { loginRequest, deleteRequestsError } from '../../../redux/modules/userData/actions';
import { selectLoadingRequests, selectRequestErrors } from '../../../redux/modules/userData/selectors';

const mapDispatchToProps = {
  loginRequest,
  deleteRequestsError,
};
const mapStateToProps = (state: AppState) => ({
  loadingRequests: selectLoadingRequests(state),
  requestErrors: selectRequestErrors(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
