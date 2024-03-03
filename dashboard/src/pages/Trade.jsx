import { connect } from "react-redux";
import { setShowSideNav } from "../redux/nav/sideNav.actions";
import { useEffect } from "react";

const Trade = ({ setShowSideNav }) => {
  useEffect(() => {
    setShowSideNav(false);
  }, []);
  return <div>Trade</div>;
};

const mapDispatchToProps = (dispatch) => ({
  setShowSideNav: (value) => dispatch(setShowSideNav(value)),
});

export default connect(null, mapDispatchToProps)(Trade);
