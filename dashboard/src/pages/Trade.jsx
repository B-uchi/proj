import { connect } from "react-redux";
import { setShowSideNav } from "../redux/nav/sideNav.actions";
import { useEffect } from "react";

const Trade = ({ setShowSideNav }) => {
  useEffect(() => {
    setShowSideNav(false);
  }, []);
  return <div className="p-3">Build in progress...</div>;
};

const mapDispatchToProps = (dispatch) => ({
  setShowSideNav: (value) => dispatch(setShowSideNav(value)),
});

export default connect(null, mapDispatchToProps)(Trade);
