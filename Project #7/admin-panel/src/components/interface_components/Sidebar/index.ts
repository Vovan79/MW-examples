import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { AppState } from '../../../redux/store';
import { changeActive } from '../../../redux/modules/leftSidebar/actions';

const mapStateToProps = (state: AppState) => ({
  leftSidebar: state.leftSidebar,
});

const mapDispatchToProps = {
  changeActiveMenu: changeActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
