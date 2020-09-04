import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';
import { AppState } from '../../../redux/store';
import { selectUserInfo } from '../../../redux/modules/userData/selectors';


const mapStateToProps = (state: AppState) => ({
  userRole: selectUserInfo(state).role,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
