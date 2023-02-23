import PropTypes from "prop-types";
import { useEffect } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//-----------------------|| AUTHENTICATION ||-----------------------//

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */
const Authentication = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("token") === undefined ||
      localStorage.getItem("token") === null
    )
      navigate("/login");
  });
  return children;
};

Authentication.propTypes = {
  children: PropTypes.node,
};

export default Authentication;
