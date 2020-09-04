import { connect } from 'react-redux';
import Topbar from './Topbar';
import { logoutRequest } from '../../../redux/modules/userData/actions';
import { changeActive } from '../../../redux/modules/leftSidebar/actions';
import { AppState } from '../../../redux/store';
import { selectLoadingRequests, selectUserInfo } from '../../../redux/modules/userData/selectors';

const mapStateToProps = (state: AppState) => ({
  email: selectUserInfo(state).email,
  loadingRequests: selectLoadingRequests(state),
});

const mapDispatchToProps = {
  changeActiveMenu: changeActive,
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
