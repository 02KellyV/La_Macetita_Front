import React from "react";
import { connect } from "react-redux";

function Loader({ showLoader }) {
  return <div>{showLoader && <div className="loader loader-default is-active"></div>}</div>;
}

const mapStateToProps = (state) => ({
  showLoader: state.Loader.active,
});

export default connect(mapStateToProps)(Loader);
